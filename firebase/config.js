import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCptNnTbAtoe3-IKQXf-3_YeyyjQmlh6vk",
  authDomain: "my-web-1fb99.firebaseapp.com",
  databaseURL: "https://my-web-1fb99-default-rtdb.firebaseio.com",
  projectId: "my-web-1fb99",
  storageBucket: "my-web-1fb99.firebasestorage.app",
  messagingSenderId: "504499838018",
  appId: "1:504499838018:web:b73400049024e8a232e1db"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
