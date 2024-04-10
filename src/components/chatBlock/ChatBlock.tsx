import React from "react";
import "./ChatBlock.scss";
function ChatBlock() {
  const data = [
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
    { title: "Кубанычбеков азирет", number: "0705959404" },
  ];
  return (
    <div className="chat_block">
      <div className="container">
        <div className="chat_block__content">
          <h1>участники сообщества</h1>
          <div className="chat_block__content__block">
            <div className="styles.chat_block__content__block__info">
              <h1></h1>
              <div className="bor chat_block__content">
                <img src="" alt="" />
              </div>
            </div>
            <div className="styles.chat_block__content__block__search"></div>
            <div className="styles.chat_block__content__block__ul">
              <div className="styles.chat_block__content__block__ul__li"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBlock;
