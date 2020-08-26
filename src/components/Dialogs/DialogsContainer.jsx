import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import { sendMessage } from "./../../redux/dialogs-reducer";

const mapStateToProps = ({ dialogsPage: { dialogs, message } }) => ({
	dialogs,
	message
});

export default connect(mapStateToProps, { sendMessage })(Dialogs);
