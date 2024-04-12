import { IoSearchOutline } from "react-icons/io5";
import IconUsers from "../../assets/header-users.svg";
import IconChat from "../../assets/header-chat-icon.svg";
import IconProfile from "../../assets/header-profile-icon.svg";
import "../header/header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__content__logo__wrap">
              <h3 className="header__content__logo">Motion web/news</h3>
            </div>
            <div className="header__content__input">
              <input
                type="text"
                className="header__content__inp"
                placeholder="введите поисковый запрос...."
              />
              <button className="header__content__input__btn">
                <IoSearchOutline color="white" />
              </button>
            </div>
            <div className="header__content__navs">
              <Link to="/PageUser" className="header__content__navs__nav">
                <img src={IconUsers} alt="" />
              </Link>
              <Link to="/pageChat" className="header__content__navs__nav">
                <img src={IconChat} alt="" />
              </Link>
              <Link to="/PageProfile" className="header__content__navs__nav">
                <img src={IconProfile} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
