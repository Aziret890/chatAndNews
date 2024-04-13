import { collection, doc, getDocs, setDoc } from "firebase/firestore";
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

type TypeParametres = "title" | "text" | "image" | "date";

export async function create(values: Record<TypeParametres, string | number>) {
  await setDoc(doc(db, "news", Date.now().toString()), values);
}