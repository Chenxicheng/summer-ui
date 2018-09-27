import axios from '@/libs/api.request'

export const getRouterList = (userId) => {
  console.log('getRouterList111111111111111111111111111')
  return axios.request({
    url: `api/sys/permission/findMenuByUserId/${userId}`,
    method: 'get'
  })
}
