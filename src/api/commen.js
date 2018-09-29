import axios from '@/libs/api.request'

/**
 * 分页查询数据
 * @param {*} url
 * @param {*} data
 */
export const findPage = (url, params) => {
  return axios.request({
    url,
    method: 'get',
    params
  })
}

export const getDataInfo = (url) => {
  return axios.request({
    url,
    method: 'get'
  })
}

export const addData = (url, data) => {
  return axios.request({
    url,
    method: 'post',
    data
  })
}

export const updateData = (url, data) => {
  return axios.request({
    url,
    method: 'put',
    data
  })
}

export const deleteData = (url) => {
  return axios.request({
    url,
    method: 'delete'
  })
}
