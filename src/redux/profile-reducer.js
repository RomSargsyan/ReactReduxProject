import { stopSubmit } from 'redux-form';
import { profileAPI } from './../api/api';

const ADD_POST = "profile/ADD-POST";
const SET_USERS_PROFILE = "profile/SET-USERS-PROFILE";
const SET_USERS_PROFILE_STATUS = "profile/SET-USERS-PROFILE-STATUS";
const SAVE_PROFILE_PHOTO_SUCCESSS = "profile/SAVE-PROFILE-PHOTO-SUCCESSS";

let initialState = {
  posts: [
    {id: 1, message: "post1" },
    {id: 2, message: "post2" },
    {id: 3, message: "post3" },
  ],
  profile: null,
  status: '',
}


let profileReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newTextPost,
      };

      stateCopy.posts.push(newPost)
      return stateCopy
    }
    case SET_USERS_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_USERS_PROFILE_STATUS: {
      stateCopy.status = action.status;
      return stateCopy
    }
    case SAVE_PROFILE_PHOTO_SUCCESSS: {
      stateCopy.profile.photos = action.photos;
      return stateCopy
    }
    default: return state;
  }
};

const sendPost = (newTextPost) => ({ type: ADD_POST, newTextPost});

const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

const setUsersProfileStatus = (status) => ({ type: SET_USERS_PROFILE_STATUS, status });

const saveProfilePhotoSuccess = (photos) => ({type: SAVE_PROFILE_PHOTO_SUCCESSS, photos});

export const getUsersProfile = (userId) => async (dispatch) => {
   const res = await profileAPI.getUsersProfile(userId);
   dispatch(setUsersProfile(res.data));
}


export const getUsersProfileStatus = (userId) => async (dispatch) => {
   const res = await profileAPI.getUsersProfileStatus(userId)
   dispatch(setUsersProfileStatus(res.data))
}

export let updateUsersProfileStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateUsersProfileStatus(status)
  if (res.data.resultCode === 0) {
    dispatch(setUsersProfileStatus(res.data));
  }
}

export let saveProfilePhoto = (photo) => async (dispatch) => {
  let res = await profileAPI.saveProfilePhoto(photo)
  if (res.data.resultCode === 0) {
    dispatch(saveProfilePhotoSuccess(res.data.data.photos));
  }
}

export let saveProfileData = (data) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const res = await profileAPI.saveProfileData(data);

  if (res.data.resultCode === 0) {
    getUsersProfile(userId);
  } else {
    dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}));
    return Promise.reject(res.data.messages[0]);
  }
}

export const addPost = (newTextPost) => (dispatch) => {
  dispatch(sendPost(newTextPost))
}

export default profileReducer;
