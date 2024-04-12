import Header from "../header/Header";
import "./chat.scss";
import { IoSearchOutline } from "react-icons/io5";
import avatarkaCard from "../../assets/chat__avatarka.svg";
function Chat() {
  return (
    <>
      <Header />
      <section className="chat">
        <div className="container">
          <div className="chat__content">
            <h2 className="chat__content__logo">Чаты</h2>
            <div className="chat__content__nav">
              <h3 className="chat__content__nav__title">Community</h3>
              <h3 className="chat__content__nav__pretitle">Чаты</h3>
            </div>
            <hr className="chat__content__nav__hrr" />
            <hr />
            <input
              type="text"
              className="chat__content__search"
              placeholder="Поиск"
            />
            <IoSearchOutline
              className="chat__content__search__icon"
              size={18}
            />
            <div className="chat__content__card">
              <div className="chat__content__card__avatarka__wrap">
                <img
                  src={avatarkaCard}
                  alt=""
                  className="chat__content__card__avatarka"
                />
                <h2 className="chat__content__card__data">12: 30</h2>
              </div>
              <div>
                <h2 className="chat__content__card__name">Айназик</h2>
                <h2 className="chat__content__card__text">Здравствуйте!</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chat;
