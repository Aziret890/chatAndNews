/* eslint-disable no-empty */
import "../profile/profile.scss";
import avatatIcon from "../../assets/profile-avatar.svg";
import minIcon from "../../assets/profile-mini-icon.svg";
import { useRef } from "react";
import Header2 from "../header2/header2";
import InfoUser from "../../pages/InfoUser/InfoUser";
function Profile() {
  const numRef = useRef<null | HTMLInputElement>(null);
  const familyRef = useRef<null | HTMLInputElement>(null);
  const telRef = useRef<null | HTMLInputElement>(null);
  const emailRef = useRef<null | HTMLInputElement>(null);
  const biographyRef = useRef<null | HTMLInputElement>(null);
  function HandleValidation() {
    const refs = [numRef, familyRef, telRef, emailRef, biographyRef];
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.border =
          ref.current.value.trim() === "" ? "4px solid red" : "4px solid green";
      }
    });
  }

  function HandleImage() {}

  return (
    <>
      <Header2 />
      <section className="profile">
        <h1 className="profile__title">Профиль</h1>
        <div className="container">
          <div className="profile__content">
            <div className="profile__content__cards">
              <div className="profile__content__cards__back">
                <img
                  src={avatatIcon}
                  alt=""
                  className="profile__content__cards__back__avatar"
                />

                <div
                  className="profile__content__cards__back__mini"
                  onClick={() => HandleImage}
                >
                  <img
                    src={minIcon}
                    alt=""
                    className="profile__content__cards__back__avatar__mini"
                  />
                </div>
              </div>
              <div className="profile__content__cards__footer">
                <div className="profile__content__cards__footer__inputs">
                  <input
                    ref={numRef}
                    type="text"
                    className="profile__content__cards__footer__inputs__input"
                    required
                    placeholder="Имя"
                  />

                  <input
                    ref={familyRef}
                    type="text"
                    className="profile__content__cards__footer__inputs__lastname"
                    placeholder="Фамилия"
                  />
                  <input
                    ref={telRef}
                    type="number"
                    className="profile__content__cards__footer__inputs__tel"
                    placeholder="Телефон номер"
                  />
                  <input
                    ref={emailRef}
                    type="email"
                    className="profile__content__cards__footer__inputs__email"
                    placeholder="Эл.почта"
                  />
                  <input
                    ref={biographyRef}
                    type="text"
                    className="profile__content__cards__footer__inputs__biography"
                    placeholder="Биография"
                  />
                  <button
                    onClick={HandleValidation}
                    className="profile__content__cards__footer__inputs__btn"
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
            <InfoUser />
          </div>
        </div>
      </section>
      ``
    </>
  );
}

export default Profile;
