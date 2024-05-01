import Back from "../../shared/images/backgroundReg.png";
import "./Auth.scss";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import FireBaseInit from "../../firebace/firebse";
import { useState } from "react";
import { toast } from "react-toastify";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authnotify = () => toast.success("Вы вошли в аккаунт");
  const notify = () => toast.error("неверный пароль или логин");

  const nav = useNavigate();

  const { auth } = FireBaseInit();

  function AuthClickHandler() {
    if (email !== email) {
      console.log("qwert");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail("");
        setPassword("");
        nav("/");
        authnotify();
      })
      .catch((error) => {
        notify();
        console.log("ошибка ", error);
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
                <p>Ваш логин</p>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  background={"none"}
                  size="lg"
                />
              </div>
              <div className="flex flex-col gap-[20px] mt-[28px]">
                <p>Ваш пароль</p>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  background={"none"}
                  size="lg"
                />
              </div>
              <button onClick={AuthClickHandler} className="mt-[58px]">
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

export default Auth;
