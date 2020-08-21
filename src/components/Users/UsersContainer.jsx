import { connect } from "react-redux";
import React, { useEffect } from "react";

import Users from "./Users";
import { follow, unfollow, getUsers, setCurrentPage } from "./../../redux/users-reducer";

const UsersContainer = props => {
  const { getUsers, currentPage, pageSize,
          setCurrentPage, follow, unfollow
        } = props;

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [getUsers, currentPage, pageSize]);

  const onPageChanged = pageNumber => {
    setCurrentPage(pageNumber);
    getUsers(pageNumber, pageSize);
  };

  const onFollow = userId => {
    follow(userId);
  };

  const onUnfollow = userId => {
    unfollow(userId);
  };

  return (
    <Users
      {...props}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
      onPageChanged={onPageChanged}
    />
  );
};

const mapStateToProps = ({ usersPage: {users, totalUsersCount, currentPage, pageSize, isFollowing}}) => {
  return { users, totalUsersCount, currentPage, pageSize, isFollowing };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
  setCurrentPage
})(UsersContainer);
