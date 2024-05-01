import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebace/firebse";
import { useEffect, useState } from "react";
import { useAuth } from "../../ctx/useAuth";

function Message({ message }: any) {
  const [findUser, setFindUser] = useState<Record<string, string>>({});
  const { user } = useAuth();
  function findUserBySenderId() {
    getDocs(collection(db, "users")).then((snap) => {
      snap.docs.forEach((doc) => {
        const user = doc.data();
        if (user.uid === message.senderId) {
          setFindUser(user as any);
        }
      });
    });
  }
  useEffect(() => {
    findUserBySenderId();
  }, []);
  const thisUser = user?.uid === message.senderId;
  return (
    <div className={`deatailchat__content__user ${thisUser ? "owner" : ""}`}>
      <h1 className="deatailchat__content__user__title">{findUser.lastName}</h1>
      <p className="deatailchat__content__user__text">{message.text}</p>
    </div>
  );
}

export default Message;
