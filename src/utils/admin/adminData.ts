// import { collection, doc, getDocs, setDoc } from "firebase/firestore";
// import FireBaseInit from "../../firebace/firebse";

// const db = FireBaseInit().db;
// export async function getAdminData() {
//   try {
//     const ref = collection(db, "admin");
//     const snapShot = await getDocs(ref);
//     console.log(
//       "aaaaa",
//       snapShot.docs.map((doc) => doc.data())
//     );

//     return snapShot.docs.map((doc) => doc.data());
//   } catch (error) {
//     console.log("e", error);
//   }
// }
// type TypeParametres = "password";

// export async function createAdmin(
//   values: Record<TypeParametres, string | number>
// ) {
//   await setDoc(doc(db, "admin"), values);
// }
// // export async function createAdmin(
// //   values: Record<TypeParametres, string | number>
// // ): Promise<void> {
// //   try {
// //     await setDoc(doc(db, "admin"), values);
// //     console.log("Admin created successfully!");
// //   } catch (error) {
// //     console.error("Error creating admin:", error);
// //     throw error; // Передаем ошибку дальше
// //   }
// // }

// export default getAdminData;
