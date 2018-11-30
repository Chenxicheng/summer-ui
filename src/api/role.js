import axios from '@/libs/api.request'
const BASE_URL = '/api/sys/role'
/**
 * 校验英文名称
 * @param {*} name
 */
export const validateName = (name) => {
  const params = { name }
  return axios.request({
    url: `${BASE_URL}/validateName`,
    params,
    method: 'get'
  })
}
