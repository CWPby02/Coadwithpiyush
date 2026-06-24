import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { db } from "./config.js";

export async function addService(data) {

  return await addDoc(
    collection(db, "services"),
    data
  );

}

export async function getServices() {

  const snapshot = await getDocs(
    collection(db, "services")
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}
