import React, { useState } from "react";
import Back from "../../shared/images/backgroundReg.png";
import "./Auth.scss";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function AuthAdmin() {
  const [valuePassowrd, setValuePassowrd] = useState<string>("");
  const [valueEmail, setValueEmail] = useState<string>("");
  const nav = useNavigate();
  const notify = () => toast.success("успешная регистрация");
  const notifyError = () => toast.error("регистация не прошла");
  const auth = getAuth();
  function createAccountAdmin() {
    createUserWithEmailAndPassword(auth, valueEmail, valuePassowrd)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("aa");
        notify();
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
        notifyError();
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
              <button onClick={() => nav("/registration")}>РЕГИСТРАЦИЯ</button>
              <div className="flex flex-col gap-[1px] items-center">
                <button onClick={() => nav("/login")}> ВОЙТИ </button>
                <div className="block__auth__title_active"></div>
              </div>
            </div>
            <div className="block__auth__form flex flex-col items-center mt-[88px]">
              <div className="flex flex-col gap-[20px]">
                <p>Ваш email</p>
                <Input
                  onChange={(e) => setValueEmail(e.target.value)}
                  background={"none"}
                  size="lg"
                />
              </div>
              <div className="flex flex-col gap-[20px] mt-[28px]">
                <p>Ваш пароль</p>
                <Input
                  onChange={(e) => setValuePassowrd(e.target.value)}
                  background={"none"}
                  size="lg"
                />
              </div>
              <button
                onClick={() => (createAccountAdmin(), nav("/admin"))}
                className="mt-[58px]"
              >
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

export default AuthAdmin;
