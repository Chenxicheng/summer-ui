import axios from '@/libs/api.request'

export const getRouterList = () => {
  return axios.request({
    url: 'getRouterList',
    method: 'get'
  })
}
