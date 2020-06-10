import React, { Component } from "react";
import "./App.css";
import ChatCard from "./components/ChatCard";
import Placeholder from "./components/ChatCard/placeholder";
import { getChatData } from "./utils/getChatData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatData: {
        data: [],
        error: null,
        isFetching: true,
      },
    };
  }

  componentDidMount() {
    getChatData({
      successCb: (data) => {
        this.setState({ chatData: { data, err: null, isFetching: false } });
      },
      failureCb: (error) => {
        this.setState({ chatData: { data: [], error, isFetching: false } });
      },
    });
  }
  render() {
    const {
      chatData: { data, isFetching, error },
    } = this.state;
    return (
      <div className="App">
        <header className="header">ChatLog</header>
        <div className="wrapper">
          {(!isFetching &&
            data.length &&
            data.map((item) => <ChatCard {...item} key={item.messageId} />)) ||
            [1, 2, 3, 4, 5].map(() => <Placeholder />)}
        </div>
      </div>
    );
  }
}

export default App;
