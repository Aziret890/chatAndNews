import { useEffect, useState } from "react";
import Admin from "../../components/admin/Admin";
import Password from "../../components/password/Password";
import FireBaseInit from "../../firebace/firebse";
import { collection, getDocs } from "firebase/firestore";
import { useAppSelector } from "../../store/store";
const db = FireBaseInit().db;
interface IData {
  password: string;
  email: string;
}
function AdminPage() {
  const [data, setData] = useState<IData | undefined | any>();
  const admin = useAppSelector((res) => res.admin.passwordData);

  async function getDataFromFirestore() {
    try {
      const querySnapshot = await getDocs(collection(db, "/admin"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setData(data[0]);
      console.log("Data from Firestore: ", data);
      return data;
    } catch (error) {
      console.error("Error getting data from Firestore:", error);
    }
  }
  useEffect(() => {
    getDataFromFirestore();
  }, []);
  console.log(admin);

  return (
    <div>
      {admin?.password == data?.passowrd && admin?.username == data?.email ? (
        <Admin />
      ) : (
        <Password />
      )}
    </div>
  );
}

export default AdminPage;
