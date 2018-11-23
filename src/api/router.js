import axios from '@/libs/api.request'

export const getRouterList = () => {
  return axios.request({
    url: `api/sys/permission/findMenuByUserId`,
    method: 'get'
  })
}
