import { auth, provider } from "../../firebase";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const logIn = () => ({
  type: LOG_IN,
  promise: auth.signInWithPopup(provider)
});

export const logOut = () => ({
  type: LOG_OUT,
  promise: auth.signOut()
});
