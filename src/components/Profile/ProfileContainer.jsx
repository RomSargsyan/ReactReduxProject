import { connect } from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router";

import Profile from "./Profile";
import {
  addPost,
  getUsersProfile,
  getUsersProfileStatus,
  updateUsersProfileStatus,
  saveProfilePhoto,
  saveProfileData
} from "./../../redux/profile-reducer";

const ProfileContainer = props => {
  const {
    match,
    history,
    getUsersProfile,
    authorizedUserId,
    getUsersProfileStatus
  } = props;

  const updateProfileInfo = () => {
    let userId = match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        history.push("/login");
      }
    }
    getUsersProfile(userId);
    getUsersProfileStatus(userId);
  };

  useEffect(() => {
    updateProfileInfo();
  }, [match.params.userId]);

  return <Profile {...props} isOwner={!!match.params.userId} />;
};

const mapStateToProps = ({profilePage: { posts, profile, status}, auth: {userId}}) => {
  return {
    posts, profile, status,
    authorizedUserId: userId
  };
};

export default connect(mapStateToProps, {
  addPost,
  getUsersProfile,
  getUsersProfileStatus,
  updateUsersProfileStatus,
  saveProfilePhoto,
  saveProfileData
})(withRouter(ProfileContainer));
