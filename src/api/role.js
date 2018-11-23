import axios from '@/libs/api.request'
/**
 * 校验英文名称
 * @param {*} name
 */
export const validateName = (name) => {
  const params = { name }
  return axios.request({
    url: '/api/sys/role/validateName',
    params,
    method: 'get'
  })
}
