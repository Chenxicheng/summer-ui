import axios from '@/libs/api.request'

export const getRouterList = (userId) => {
  return axios.request({
    url: `api/sys/permission/findMenuByUserId/${userId}`,
    method: 'get'
  })
}
