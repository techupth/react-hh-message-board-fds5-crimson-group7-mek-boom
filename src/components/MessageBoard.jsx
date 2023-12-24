import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageShow, setMessageShow] = useState([]);

  const handleMessageShow = () => {
    //ต้องเอาข้อความ messageinput ใส่ไปใน array messageShow
    // 1) เราต้อง clone ตัว array messageShow ก่อนไว้ variable อันใหม่
    const newMessageShow = [...messageShow];
    // 2) เราจะ push messageInput  ใส่ไปใน variable อันใหม่
    newMessageShow.push(messageInput);
    // 3) อัพเดท states
    setMessageShow(newMessageShow);
  };
  const handleRemove = (messageIndex) => {
    //โคลน array state ใหม่มาเพื่ออัพเดทปุ่ม x ขั้นตอนคล่้ายๆ ด้่านบน
    const removeMessage = [...messageShow];
    removeMessage.splice(messageIndex, 1);
    setMessageShow(removeMessage);
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
              setMessageInput(e.target.value); // เก็บข้อมูล input
            }}
            value={messageInput} // เก็บข้อมูล input
          />
        </label>
        <button className="submit-message-button" onClick={handleMessageShow}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageShow.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleRemove(index);
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
