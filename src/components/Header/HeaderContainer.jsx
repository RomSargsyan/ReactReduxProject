import { connect } from "react-redux";

import Header from "./Header";
import { logout } from "./../../redux/auth-reducer";

const mapStateToProps = ({ auth: { email, userId, login, isAuth } }) => (
  { email, login, userId, isAuth}
);

export default connect(mapStateToProps, { logout })(Header);
