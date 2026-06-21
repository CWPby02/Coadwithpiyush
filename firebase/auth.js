import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { auth } from "./config.js";

/* LOGIN */

export async function loginUser(
  email,
  password
) {

  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

}

/* LOGOUT */

export async function logoutUser() {

  return await signOut(auth);

}
