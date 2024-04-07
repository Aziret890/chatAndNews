import IconUsers from "../../assets/header-users.svg";
import IconChat from "../../assets/header-chat-icon.svg";
import IconProfile from "../../assets/header-profile-icon.svg";
import "../header2/header2.scss";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__content__logo__wrap2">
              <h3 className="header__content__logo">Motion web/news</h3>
            </div>
            <div className="header__content__navs2">
              <Link to="/" className="header__content__navs__nav">
                <img src={IconUsers} alt="" />
              </Link>
              <Link to="/" className="header__content__navs__nav">
                <img src={IconChat} alt="" />
              </Link>
              <Link to="/" className="header__content__navs__nav">
                <img src={IconProfile} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header2;
