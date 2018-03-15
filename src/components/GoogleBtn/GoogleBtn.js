import React from "react";
import GoogleButton from "react-google-button";
import AuthContainer from "../../containers/Auth.js";

const GoogleBtn = ({ logIn, logOut, user }) => {
  return user ? (
    <button onClick={logOut}>log out</button>
  ) : (
    <GoogleButton type="light" onClick={logIn} />
  );
};

export default AuthContainer(GoogleBtn);
