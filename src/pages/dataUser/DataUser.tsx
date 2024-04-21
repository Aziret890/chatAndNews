import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Back from "../../shared/images/backgroundReg.png";
import { Input } from "@chakra-ui/react";
import { UserData, setBaseInfo } from "../../store/slice/userslice";
import { useDispatch } from "react-redux";
import { getDatabase, ref, push, set } from "firebase/database";

function DataUser() {
  const nav = useNavigate();

  const [userData, setUserData] = useState<UserData>({
    tgLink: "",
    phoneNum: "",
    group: "",
    category: "",
  });

  const dispatch = useDispatch();

  const ClickDataUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((PrevData) => ({
      ...PrevData,
      [name]: value,
    }));
  };

  function registerHandler() {
    console.log(userData);
    const newData: UserData = {
      tgLink: userData.tgLink,
      phoneNum: userData.phoneNum,
      group: userData.group,
      category: userData.category,
    };
    const db = getDatabase();
    const postListRef = ref(db, "users");
    const newPostRef = push(postListRef);
    set(newPostRef, userData)
      .then(() => {
        console.log("успешно");
        dispatch(setBaseInfo(newData));
      })
      .catch((error) => {
        console.log("ошикба", error);
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
                <p>Телеграмм ссылка</p>
                <Input
                  background={"none"}
                  size="lg"
                  name="tgLink"
                  value={userData.tgLink}
                  onChange={ClickDataUser}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Тел.номер</p>
                <Input
                  background={"none"}
                  size="lg"
                  type="number"
                  name="phoneNum"
                  value={userData.phoneNum}
                  onChange={ClickDataUser}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Группа</p>
                <Input
                  background={"none"}
                  size="lg"
                  name="group"
                  value={userData.group}
                  onChange={ClickDataUser}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Направление</p>
                <Input
                  background={"none"}
                  size="lg"
                  name="category"
                  value={userData.category}
                  onChange={ClickDataUser}
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

export default DataUser;
