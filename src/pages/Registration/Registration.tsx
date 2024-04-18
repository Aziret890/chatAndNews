import Back from "../../shared/images/backgroundReg.png";
import "./Registration.scss";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { getDatabase, ref, push, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { UserBase, setBaseInfo } from "../../store/slice/userslice";

interface Data extends UserBase {
  password: string;
  repeatPassword: string;
}

function Registration() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState<Data>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((PrevData) => ({
      ...PrevData,
      [name]: value,
    }));
  };

  function registerHandler() {
    console.log(userData);
    const newData: UserBase = {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
    };
    const db = getDatabase();
    const postListRef = ref(db, "users");
    const newPostRef = push(postListRef);
    set(newPostRef, userData)
      .then(() => {
        console.log("register");
        dispatch(setBaseInfo(newData));
        nav("/data/user");
      })
      .catch((error) => {
        console.log("ошикба", error);
      });

    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
  }
  return (
    <>
      <Header />
      <section
        style={{
          background: `url(${Back}) center/cover`,
          height: "100%",
          width: "100wh",
        }}
        className="pt-[125px]"
      >
        <div className="container">
          <div className="block__auth">
            <div className="block__auth__title mt-[77px] flex justify-start items-start gap-[50px] pl-[14%]">
              <div className="flex flex-col gap-[1px] items-center">
                <button onClick={() => nav("/registration")}>
                  РЕГИСТРАЦИЯ
                </button>
                <div className="block__auth__title_active"></div>
              </div>
              <div className="flex flex-col gap-[1px] items-center">
                <button onClick={() => nav("/auth")}> ВОЙТИ </button>
              </div>
            </div>
            <div className="block__auth__form flex flex-col items-center mt-[88px]">
              <div className="flex flex-col gap-[20px]">
                <p>Ваше имя</p>
                <Input
                  name="lastName"
                  background={"none"}
                  size="lg"
                  value={userData.lastName}
                  onChange={handleInputchange}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Ваше фамилия</p>
                <Input
                  name="firstName"
                  background={"none"}
                  size="lg"
                  value={userData.firstName}
                  onChange={handleInputchange}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Ваш email</p>
                <Input
                  name="email"
                  background={"none"}
                  size="lg"
                  value={userData.email}
                  onChange={handleInputchange}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Ваш пароль</p>
                <Input
                  name="password"
                  background={"none"}
                  size="lg"
                  value={userData.password}
                  onChange={handleInputchange}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Повторите пароль</p>
                <Input
                  name="repeatPassword"
                  background={"none"}
                  size="lg"
                  value={userData.repeatPassword}
                  onChange={handleInputchange}
                />
              </div>
              <button className="mt-[58px]" onClick={registerHandler}>
                Вход
              </button>
              <div className="flex justify-center gap-[7px] mt-[84px]">
                <p className="block__auth__form_p">Нет аккаунта?</p>
                <p className="block__auth__form_p decoration-[3px]">
                  Регистрация
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
