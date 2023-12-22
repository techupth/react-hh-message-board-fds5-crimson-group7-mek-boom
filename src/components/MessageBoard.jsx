import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const addMessageList = () => {
    const newMessageList = [...messageList];
    newMessageList.push(messageInput);
    setMessageList(newMessageList);
  };

  const removeMessageList = (messageIndex) => {
    const newMessageList = [...messageList];
    newMessageList.splice(messageIndex, 1);
    setMessageList(newMessageList);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => {
              setMessageInput(e.target.value);
            }}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button" onClick={addMessageList}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  {
                    removeMessageList(index);
                  }
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
