import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Back from "../../shared/images/backgroundReg.png";
import { Input } from "@chakra-ui/react";
function DataUser() {
  const nav = useNavigate();
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
                <Input background={"none"} size="lg" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Тел.номер</p>
                <Input background={"none"} size="lg" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Группа</p>
                <Input background={"none"} size="lg" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <p>Направление</p>
                <Input background={"none"} size="lg" />
              </div>
              <button className="mt-[58px]">Вход</button>
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
