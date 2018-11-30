import axios from '@/libs/api.request'
const BASE_URL = '/api/sys/permission'

/**
 * 获取全部菜单
 */
export const getMenuAllList = () => {
  return axios.request({
    url: `${BASE_URL}/getMenuAllList`,
    method: 'get'
  })
}
