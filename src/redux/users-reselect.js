import { createSelector } from 'reselect';

const getUsers = (state) => {
  return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter(user => true);
})

export const getTotalUsersCountSelector = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPageSelector = (state) => {
  return state.usersPage.currentPage;
}

export const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize;
}

export const getFollowingSelector = (state) => {
  return state.usersPage.isFollowing;
}
