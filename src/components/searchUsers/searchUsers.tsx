import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebace/firebse";
import { useAuth } from "../../ctx/useAuth";

function SearchUsers() {
  const [name, setName] = useState("");
  const [userList, setUserList] = useState<any[]>([]);
  const _user = useAuth();

  async function searchUser() {
    const userCollection = collection(db, "users");
    const userDocs = await getDocs(userCollection);

    userDocs.docs.forEach((doc) => {
      const user = doc.data();
      const findUser =
        user.lastName.toLowerCase().includes(name.toLowerCase()) &&
        _user.user?.uid !== user.uid;

      if (findUser) {
        setUserList((prev) => [...prev, user]);
      }
    });
  }

  async function keydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      await searchUser();
    }
  }

  async function handleSelect(select: Record<string, string>) {
    if (!_user.user || !select.uid) return;
    const combinedId =
      _user.user?.uid > select.uid
        ? _user.user?.uid + select.uid
        : select.uid + _user.user?.uid;

    const res = await getDoc(doc(db, "chats", combinedId));

    if (!res.exists()) {
      await setDoc(doc(db, "chats", combinedId), { messages: [] });

      console.log(_user.user);

      await updateDoc(doc(db, "userChats", select.uid), {
        [combinedId + ".userInfo"]: {
          uid: _user.user.uid,
          lastName: _user.user.lastName,
          firstName: _user.user.firstName,
        },
        [combinedId + ".lastMessage"]: {
          text: "",
        },
        [combinedId + ".date"]: Date.now(),
      });
      await updateDoc(doc(db, "userChats", _user.user.uid), {
        [combinedId + ".userInfo"]: {
          uid: select.uid,
          lastName: select.lastName,
          firstName: select.firstName,
        },
        [combinedId + ".lastMessage"]: {
          text: "",
        },
        [combinedId + ".date"]: Date.now(),
      });
      console.log("finish");
      setName("");
      setUserList([]);
    }
  }

  return (
    <div className="chat__content__search_box">
      <input
        value={name}
        onKeyDown={keydown}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="chat__content__search"
        placeholder="Поиск"
      />

      {name.trim() !== "" && userList.length > 0 && (
        <ul className="">
          {userList.map((item) => (
            <li onClick={async () => await handleSelect(item)}>
              {item.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchUsers;
