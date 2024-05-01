import Header from "../header/Header";
import "./chat.scss";
// import avatarkaCard from "../../assets/chat__avatarka.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebace/firebse";
import { useAuth } from "../../ctx/useAuth";
import SearchUsers from "../searchUsers/searchUsers";
import { useAppDispatch } from "../../store/store";
import { changeChat } from "../../store/slice/chat";

function Chat() {
  const [chat, setchat] = useState<boolean>(false);
  const [chats, setChats] = useState({});
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) return;
    const unsub = onSnapshot(doc(db, "userChats", user?.uid!), async (dosc) => {
      setChats(dosc.data() as any);
      // const combinedId =
      //   "5ubgrVq21rNDTbBgURHt1cSTaMH3Main7LNtxhahnLi9ild7k2sxJLG3";
      // await updateDoc(doc(db, "userChats", user?.uid!), {
      //   [combinedId + ".userInfo"]: {
      //     firstName: "Kambarov",
      //     lastName: "Amir",
      //     uid: "5ubgrVq21rNDTbBgURHt1cSTaMH3",
      //   },
      //   [combinedId + ".lastMessage"]: {
      //     text: "Здраствуйте",
      //   },
      // });
    });
    return () => unsub();
  }, [user?.uid]);

  return (
    <>
      <Header />
      <section className="chat">
        <div className="container">
          <div className="chat__content">
            <h2 className="chat__content__logo">Чаты</h2>
            <div className="chat__content__nav">
              <h3
                className="chat__content__nav__title"
                onClick={() => setchat(false)}
              >
                Community
              </h3>
              <h3
                className="chat__content__nav__pretitle"
                onClick={() => setchat(true)}
              >
                Чаты
              </h3>
            </div>
            <hr
              className={`chat__content__nav__hrr ${
                chat ? "chat__content__nav__active" : ""
              }`}
            />
            <hr />

            <SearchUsers />

            {Object.entries(chats).map((chat: any) => {
              const _chat = chat[1];
              const select = _chat.userInfo;
              const combinedId =
                user && user?.uid > select.uid
                  ? user?.uid + select.uid
                  : select.uid + user?.uid;
              return (
                <Link
                  to={`/PageDetailchat`}
                  key={chat[0]}
                  onClick={() => {
                    dispatch(
                      changeChat({
                        chatId: combinedId,
                        user: select,
                      })
                    );
                  }}
                  className="chat__content__card"
                >
                  <div className="chat__content__card__avatarka__wrap">
                    {/* {_chat.userInfo.lastName.slice(0, 1)} */}
                  </div>
                  <div className="chat__content__card__info">
                    <h2 className="chat__content__card__name">
                      {_chat.userInfo?.firstName +
                        " " +
                        _chat.userInfo.lastName}
                    </h2>
                    <h2 className="chat__content__card__text">
                      {_chat.lastMessage.text}
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Chat;
