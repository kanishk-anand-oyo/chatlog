export function encodeQueryParams(obj) {
  if (!obj || Object.keys(obj).length === 0) {
    return "";
  }
  const str = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];
      if (val == undefined) {
        continue;
      }
      str.push(
        val !== null && typeof val === "object"
          ? encodeQueryParams(val)
          : `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
      );
    }
  }
  return str.join("&");
}

export function getData(config) {
  const {
    host = "",
    path = "",
    method,
    queryParams = {},
    proxyHeaders = {},
  } = config;
  const body =
    method === "POST" || (method === "PATCH" && config.body)
      ? JSON.stringify(config.body)
      : null;

  // get query string from query params
  let url = host + path;
  // if we have a query string, append it to host to get desired url
  if (Object.keys(queryParams).length) {
    url = `${url}?${encodeQueryParams(queryParams)}`;
  }
  const fetchData = {
    method,
    body,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...proxyHeaders },
  };

  return fetch(url, fetchData).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText} ${response.status}`);
  });
}
