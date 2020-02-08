import * as axios from 'axios';

const inctance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "a40bacd1-a363-4be3-9777-8d4772ff0fb3"
  }
})

export const authAPI = {
  auth: () => {
    return inctance.get(`/auth/me`);
  },
  login: (email, password, rememberMe = false, captcha) => {
    return inctance.post(`/auth/login`, { email, password, rememberMe, captcha })
  },
  logout: () => {
    return inctance.delete(`/auth/login`)
  }
}

export const usersAPI = {
  getUsers: (page, pageSize) => {
    return inctance.get(`/users?page=${page}&count=${pageSize}`)
  },
  follow: (userId) => {
    return inctance.post(`/follow/${userId}`)
  },
  unfollow: (userId) => {
    return inctance.delete(`/follow/${userId}`)
  }
}

export const profileAPI = {
  getUsersProfile: (userId) => {
    return inctance.get(`/profile/${userId}`)
  },
  getUsersProfileStatus: (userId) => {
    return inctance.get(`/profile/status/${userId}`)
  },
  updateUsersProfileStatus: (status) => {
    return inctance.put('/profile/status', { status })
  },
  saveProfilePhoto: (photo) => {
    let formData = new FormData();
    formData.append("image", photo);
    return inctance.put('/profile/photo', formData,
      { headers: {'Content-Type': 'multipart/form-data'}})
  },
  saveProfileData: (profile) => {
    return inctance.put('/profile', profile)
  },
}
export const securityAPI = {
  getCaptcha: () => {
    return inctance.get('/security/get-captcha-url')
  },
}
