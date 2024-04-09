/* eslint-disable no-empty */
import "../profile/profile.scss";
import avatatIcon from "../../assets/profile-avatar.svg";
import minIcon from "../../assets/profile-mini-icon.svg";
import { useRef } from "react";
function Profile() {
  const numRef = useRef<null | HTMLInputElement>(null);
  const familyRef = useRef<null | HTMLInputElement>(null);

  function HandleValidation() {
    if (numRef.current) {
      numRef.current.style.border =
        numRef.current.value.trim() === ""
          ? "4px solid red"
          : "4px solid green";
    }
    if (familyRef.current) {
      familyRef.current.style.border =
        familyRef.current.value.trim() === ""
          ? "4px solid red"
          : "4px solid green";
    }
  }

  return (
    <>
      <section className="profile">
        <div className="container">
          <div className="profile__content">
            <div className="profile__content__cards">
              <div className="profile__content__cards__back">
                <img
                  src={avatatIcon}
                  alt=""
                  className="profile__content__cards__back__avatar"
                />

                <div className="profile__content__cards__back__mini">
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
                    className="profile__content__cards__footer__inputs__family"
                    placeholder="Фамилия"
                  />
                  <input
                    type="number"
                    className="profile__content__cards__footer__inputs__tel"
                    placeholder="Телефон номер"
                  />
                  <input
                    type="email"
                    className="profile__content__cards__footer__inputs__email"
                    placeholder="Эл.почта"
                  />
                  <input
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
