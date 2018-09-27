import Mock from 'mockjs'
import { logout, getUserInfo } from './login'
import { getTableData, getDragList } from './data'
// import { getRouterList } from './router'

// 登录相关和获取用户信息
// Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/get_drag_list/, getDragList)
// Mock.mock(/\/getRouterList/, getRouterList)

export default Mock