import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';
import { securityAPI } from '../api/api';

const SET_AUTH = "auth/SET-AUTH";
const SET_CAPTCHA ="auth/SET-CAPTCHA"

let initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
}

let authReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SET_AUTH: {
      stateCopy.email = action.email;
      stateCopy.userId = action.userId;
      stateCopy.login = action.login;
      stateCopy.captchaUrl = action.captcha;
      stateCopy.isAuth = action.isAuth;
      return stateCopy;
    }
    case SET_CAPTCHA: {
      stateCopy.captchaUrl = action.captchaUrl;
      return stateCopy;
    }
    default: return stateCopy

  }
}

const setAuth = (email, userId, login, isAuth = true) => ({ type: SET_AUTH, email, userId, login, isAuth });

const setCaptcha = (captchaUrl) => ({ type: SET_CAPTCHA, captchaUrl });



export const getAuth = () => async (dispatch) => {
  let res = await authAPI.auth()
  if (res.data.resultCode === 0) {
    dispatch(setAuth(res.data.data.email, res.data.data.id, res.data.data.login, true));
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let res = await authAPI.login(email, password, rememberMe, captcha)
  if (res.data.resultCode === 0) {
    dispatch(getAuth());
  } else {
    if (res.data.resultCode === 10) {
      dispatch(getCaptcha());
    }
    dispatch(stopSubmit('login', {_error: res.data.messages[0]}))
  }
}

export const logout = () => async (dispatch) => {
  const res = await authAPI.logout();
  if (res.data.resultCode === 0) {
    dispatch(setAuth(null, null, null, false));
  }
}

export const getCaptcha = () => async (dispatch) => {
  const res = await securityAPI.getCaptcha();
    dispatch(setCaptcha(res.data.url));
}


export default authReducer;
