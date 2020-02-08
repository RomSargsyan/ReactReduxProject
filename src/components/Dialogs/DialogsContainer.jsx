import { connect } from 'react-redux';
import { sendMessage } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import WithAuthRedirect from './../Hoc/withRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    message: state.dialogsPage.message,
  }
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  WithAuthRedirect
)(Dialogs)
