import { connect } from "react-redux";
import { logIn, logOut } from "../redux/actions/authActions.js";

const AuthContainer = connect(({ auth }) => ({ user: auth.user }), {
  logIn,
  logOut
});

export default AuthContainer;
