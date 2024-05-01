import Back from "../../shared/images/backgroundReg.png";
import "./Registration.scss";
import FireBaseInit from "../../firebace/firebse";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { UserBase, setBaseInfo } from "../../store/slice/userslice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import uniqid from "uniqid";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface Data extends UserBase {
  password: string;
  repeatPassword: string;
}

function Registration() {
  const [userData, setUserData] = useState<Data>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    id: "",
  });

  const { auth } = FireBaseInit();

  const nav = useNavigate();

  const dispatch = useDispatch();

  const notify = () => toast.error("Пароли не совпадают");
  const notifyemail = () => toast.error("такой email уже существует");

  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((PrevData) => ({
      ...PrevData,
      [name]: value,
    }));
  };

  function registerHandler() {
    if (userData.password !== userData.repeatPassword) {
      notify();
    } else {
      const newData = {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      };
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then(async (r) => {
          const id = uniqid();
          console.log(id);
          const newUser: UserBase = {
            ...newData,
            id,
          };
          if (newUser.email !== newData.email) {
            notifyemail();
          }
          const db = getDatabase();
          const newPostRef = ref(db, `users/${id}`);
          const userCollectionRef = doc(FireBaseInit().db, "users", r.user.uid);
          const userDocSnapShot = await getDoc(userCollectionRef);
          if (!userDocSnapShot.exists()) {
            await setDoc(userCollectionRef, {
              ...newUser,
              uid: r.user.uid,
            });
            await setDoc(FireBaseInit().db, "userChats", r.user.uid);
          }
          set(newPostRef, newUser)
            .then(() => {
              dispatch(setBaseInfo(newUser));
              nav("/data/user");
            })
            .catch((error) => {
              console.log("ошикба", error);
            })
            .finally(() => {
              setUserData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                repeatPassword: "",
                id: "",
              });
            });
        })
        .catch((error) => console.log(error));
    }
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
                  type="password"
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
                  type="password"
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
