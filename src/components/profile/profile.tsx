import "../profile/profile.scss";
import avatatIcon from "../../assets/profile-avatar.svg";
import minIcon from "../../assets/profile-mini-icon.svg";
import { useEffect, useState } from "react";
import Header2 from "../header2/header2";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User } from "../../store/slice/userslice";

function Profile() {
  const [data, Setdata] = useState<any>();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const res = Object.values(snapshot.val() as User[]);
              const curUser = res.find((el) => el.email == user.email);
              Setdata(curUser);
              console.log(curUser);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }, []);

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
                  <div
                    className="profile__content__cards__footer__inputs__input"
                    style={{ color: "black" }}
                  >
                    <h1 className="input__text">{data && data.lastName}</h1>
                  </div>

                  <div className="profile__content__cards__footer__inputs__lastname">
                    <h1 className="input__text">{data && data.firstName}</h1>
                  </div>

                  <div className="profile__content__cards__footer__inputs__tel">
                    <h1 className="input__text">{data && data.phoneNum}</h1>
                  </div>
                  <div className="profile__content__cards__footer__inputs__email">
                    <h1 className="input__text">{data && data.email}</h1>
                  </div>
                  <div className="profile__content__cards__footer__inputs__biography">
                    <h1 className="input__text">{data && data.tgLink}</h1>
                  </div>
                  <div className="profile__content__cards__footer__inputs__biography">
                    <h1 className="input__text">{data && data.category}</h1>
                  </div>
                  <div className="profile__content__cards__footer__inputs__biography">
                    <h1 className="input__text">{data && data.group}</h1>
                  </div>

                  <button className="profile__content__cards__footer__inputs__btn">
                    Изменить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ``
    </>
  );
}

export default Profile;
