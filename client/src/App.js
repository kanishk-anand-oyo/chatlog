import React from "react";
import "./App.css";
import ChatCard from "./components/ChatCard";

function App() {
  return (
    <div className="App">
      <header className="header">ChatLog</header>
      <div className="wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <ChatCard />
        ))}
      </div>
    </div>
  );
}

export default App;
