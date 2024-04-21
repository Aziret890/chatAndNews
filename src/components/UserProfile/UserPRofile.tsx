import "../UserProfile/userProfile.scss";
import "../profile/profile.scss";
import avatatIcon from "../../assets/profile-avatar.svg";
function UserPRofile() {
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
              </div>

              <div className="profile__content__cards__footer">
                <div className="profile__content__cards__footer__inputs">
                  <input
                    type="text"
                    className="profile__content__cards__footer__inputs__input"
                    required
                    placeholder="Имя"
                  />

                  <input
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserPRofile;
