import { usersAPI } from './../api/api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const FOLLOWING_PROGRESS = 'users/FOLLOWING-PROGRESS';

const initialState = {
	users: [],
	totalUsersCount: 0,
	currentPage: 1,
	pageSize: 10,
	isFollowing: [],
}


const usersReducer = (state = initialState, action) => {
	const stateCopy = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case FOLLOW: {
			stateCopy.users.map((user) => {
				if (action.userId === user.id) {
					user.followed = false;
				}
				return user
			})
			return stateCopy
		}
		case UNFOLLOW: {
			stateCopy.users.map(user => {
				if (action.userId === user.id) {
					user.followed = true;
				}
				return user
			})
			return stateCopy
		}
		case SET_USERS: {
			stateCopy.users = action.users;
			return stateCopy
		}
		case SET_TOTAL_USERS_COUNT: {
			stateCopy.totalUsersCount = action.count;
			return stateCopy
		}
		case SET_CURRENT_PAGE: {
			stateCopy.currentPage = action.currentPage;
			return stateCopy
		}
		case FOLLOWING_PROGRESS: {
			action.isFetching
				? stateCopy.isFollowing.push(action.userId)
				: stateCopy.isFollowing.filter(id => id === action.userId);
			return stateCopy
		}
		default:
			return stateCopy;

	}
};

const followSuccess = (userId) => ({ type: FOLLOW, userId });

const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

const setUsers = (users) => ({ type: SET_USERS, users });

const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

const followingProgress = (isFetching, userId) => ({ type: FOLLOWING_PROGRESS, isFetching, userId });


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	const res = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setUsers(res.data.items));
	dispatch(setTotalUsersCount(res.data.totalCount));
}

export const follow = (userId) => async (dispatch) => {
	followingProgress(true, userId);
	const res = await usersAPI.follow(userId)
	if (res.data.resultCode === 0) {
		dispatch(followSuccess(userId))
		dispatch(followingProgress(false, userId));
	}
}

export const unfollow = (userId) => async (dispatch) => {
	followingProgress(true, userId);
	const res = await usersAPI.follow(userId)
	if (res.data.resultCode === 0) {
		dispatch(unfollowSuccess(userId))
		dispatch(followingProgress(false, userId));
	}
}
export default usersReducer;
