import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import FireBaseInit from "../../firebace/firebse";

const db = FireBaseInit().db;
export async function getNews() {
  try {
    const ref = collection(db, "news");
    const snapShot = await getDocs(ref);
    return snapShot.docs.map((doc) => doc.data());
  } catch (error) {
    console.log("e", error);
  }
}

export async function getNewsid(id: any) {
  try {
    const docref = doc(db, "news", id);
    const docshop = await getDoc(docref);

    if (docshop.exists()) {
      return docshop.data;
    } else {
      console.log("ошибка");
      return null;
    }
  } catch (error) {
    console.log("err");
  }
}

type TypeParametres = "title" | "text" | "image" | "date" | "id";

export async function create(values: Record<TypeParametres, string | number>) {
  await setDoc(doc(db, "news", Date.now().toString()), values);
}
