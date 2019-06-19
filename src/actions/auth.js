import { firebase, GoogleAuthProvider } from "../firebase/firebase";

export let login = uid => ({
  type: "LOGIN",
  uid
});

export let startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(GoogleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
