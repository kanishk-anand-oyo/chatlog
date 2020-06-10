import { getData } from "./fetchData";

export function getChatData({ successCb, failureCb }) {
  const memberPromise = getData({
    host: window.location.href,
    path: "members",
    method: "GET",
  });
  const messagesPromise = getData({
    host: window.location.href,
    path: "message",
    method: "GET",
  });
  Promise.all([memberPromise, messagesPromise])
    .then((results) => {
      const [members, messages] = results;
      successCb(getDisplayableChatMessages(members.data, messages.data));
    })
    .catch((err) => {
      failureCb({ message: "unable to get chat messages" });
    });
}

function getDisplayableChatMessages(members, messages) {
  const memberObj = {};
  let resultArr = [];
  if (members.constructor === Array && members.length) {
    members.forEach((element) => {
      memberObj[element.id] = element;
    });
  }
  if (messages.constructor === Array && messages.length) {
    resultArr = messages.map((item) => {
      const memberInfo = memberObj[item.userId];
      if (memberInfo) {
        return {
          userId: item.userId,
          messageId: item.id,
          fullName: memberInfo.firstName + " " + memberInfo.lastName,
          email: memberInfo.email,
          message: item.message,
          avatar: memberInfo.avatar,
          timestamp: item.timestamp,
        };
      }
    });
  }
  return resultArr;
}
