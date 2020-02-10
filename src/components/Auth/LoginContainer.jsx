import { connect } from "react-redux";

import Login from "./Login";
import { login, logout } from "./../../redux/auth-reducer";

const mapStateToProps = ({auth: {isAuth, userId, captchaUrl}}) => {
  return { isAuth, userId, captchaUrl };
};

export default connect(mapStateToProps, { login, logout })(Login);
