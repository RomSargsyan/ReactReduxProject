import React from 'react';
import { connect } from 'react-redux';
import { compose }  from 'redux';
import Users from './Users';
import { follow, unfollow, getUsers, setCurrentPage } from './../../redux/users-reducer';
import WithAuthRedirect from './../Hoc/withRedirect';
import {
  getUsersSelector,
  getTotalUsersCountSelector,
  getCurrentPageSelector,
  getPageSizeSelector,
  getFollowingSelector,
} from './../../redux/users-reselect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  onFollow = (userId) => {
    this.props.follow(userId);
  }

  onUnfollow = (userId) => {
    this.props.unfollow(userId);
  }

  render() {
    return <Users
              {...this.props}
              onPageChanged={this.onPageChanged}
              onFollow={this.onFollow}
              onUnfollow={this.onUnfollow}
            />
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    pageSize: getPageSizeSelector(state),
    isFollowing: getFollowingSelector(state),
  }
}

export default compose(
  connect(mapStateToProps, { follow, unfollow, getUsers, setCurrentPage }),
  WithAuthRedirect
)(UsersContainer)
