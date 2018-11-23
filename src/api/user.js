import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    username: userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = () => {
  return axios.request({
    url: 'get_info',
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

/**
 * 校验用户名是否重复
 * @param {*} username
 */
export const verifyUsername = (username) => {
  const params = { username }
  return axios.request({
    url: '/api/commen/security/verifyUsername',
    params,
    method: 'get'
  })
}
