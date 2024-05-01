import "./chatdeatail.scss";
import chaticon from "../../assets/chat.svg";
import { child, get, getDatabase, push, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
// import { uid } from "react-uid";
import { Link, useParams } from "react-router-dom";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import FireBaseInit, { db } from "../../firebace/firebse";
import { useAuth } from "../../ctx/useAuth";
import Message from "../message/message";
import { useAppSelector } from "../../store/store";
function Chatdetail() {
  const [data, setdata] = useState({
    text: "",
    date: Date.now(),
  });

  const [messages, setMessages] = useState<any[]>([]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);
  const { chatId, user: selectUser } = useAppSelector((s) => s.chat);

  const { user } = useAuth();

  useEffect(() => {
    if (!chatId) return;
    const unsub = onSnapshot(
      doc(FireBaseInit().db, "chats", chatId!),
      (doc) => {
        if (doc.data() && doc.data()?.messages) {
          setMessages(doc.data()?.messages);
        }
      }
    );
    return () => unsub();
  }, [chatId]);

  const [message, setMessage] = useState<any>();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const res = Object.values(snapshot.val() as User[]);
              const curUser = res.find((el) => el.email == user.email);
              setMessage(curUser);
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

  async function sendMessage() {
    await updateDoc(doc(FireBaseInit().db, "chats", chatId!), {
      messages: arrayUnion({
        senderId: user?.uid,
        ...data,
      }),
    });

    if (!user) return;
    await updateDoc(doc(db, "userChats", user?.uid), {
      [chatId + ".lastMessage"]: {
        text: data.text,
      },
      [chatId + ".date"]: data.date,
    });
    await updateDoc(doc(db, "userChats", selectUser?.uid), {
      [chatId + ".lastMessage"]: {
        text: data.text,
      },
      [chatId + ".date"]: data.date,
    });

    setdata({
      ...data,
      text: "",
    });

    // const db = getDatabase();
    // const newPostRef = ref(db, `users/${message.id}/chats/`);
    // push(newPostRef, data)
    //   .then((message) => {
    //     console.log(message, "успешно");
    //   })
    //   .catch((error) => {
    //     console.log("ошикба", error);
    //   });
  }

  async function keydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      await sendMessage();
    }
  }

  return (
    <>
      <section className="deatailchat">
        <div className="container">
          <div className="deatailchat__content">
            <div className="deatailchat__content__header">
              <Link to={"/pageChat"}>
                <FaArrowLeft style={{ color: "white" }} size={25} />
              </Link>
              <h2 className="deatailchat__content__title">Майрамбек</h2>
            </div>
            <hr />
            <div className="deatailchat__content__overflow">
              {messages.map((message, key) => {
                return <Message key={key} message={message} />;
              })}
              <div ref={messageEndRef}></div>
            </div>
          </div>
          <input
            onChange={(e) => setdata({ ...data, text: e.target.value })}
            type="text"
            className="deatailchat__content__input"
            placeholder="message..."
            onKeyDown={keydown}
          />
          <img
            onClick={sendMessage}
            className="deatailchat__content__icon"
            src={chaticon}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Chatdetail;
