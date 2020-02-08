import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    addPost,
    getUsersProfile,
    getUsersProfileStatus,
    updateUsersProfileStatus,
    saveProfilePhoto,
    saveProfileData,
  } from './../../redux/profile-reducer';
import { withRouter } from 'react-router';
import WithAuthRedirect from './../Hoc/withRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  updateProfileInfo() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUsersProfile(userId)
    this.props.getUsersProfileStatus(userId)
  }

  componentDidMount() {
    this.updateProfileInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfileInfo();
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!!this.props.match.params.userId} />
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
  }
};

export default compose(
  connect(mapStateToProps,
    {
      addPost,
      getUsersProfile,
      getUsersProfileStatus,
      updateUsersProfileStatus,
      saveProfilePhoto,
      saveProfileData,
    }),
  WithAuthRedirect,
  withRouter
)(ProfileContainer)
