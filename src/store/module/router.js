import { routes, routerMap } from '@/router/routers'
import { getRouterList } from '@/api/router'
import Main from '@/view/main'
// import lazyLoadComponent from '@/libs/lazyLoadComponent'

const state = {
  routers: routes,
  hasRoutes: false
}

const mutations = {
  CONCAT_ROUTES (state, routerList) {
    state.routers = routerList.concat(routes)
    state.hasRoutes = true
  },
  RESET_ROUTERS (state) {
    state.routers = routes
  },
  SET_HAS_ROUTES (state, val) {
    state.hasRoutes = val
  }
}

// 创造路由信息
const createRouterList = (routerList, routermap) => {
  return routerList.map(item => {
    if (item.component && item.component === 'Main') item.component = Main
    else {
      item.component = routermap[item.name]
    }
    if (item.children && item.children.length) {
      item.children = createRouterList(item.children, routermap)
    }
    return item
  })
}

const actions = {
  updateRoutes ({ commit }) {
    return new Promise((resolve, reject) => {
      // 获取路由列表
      getRouterList().then(res => {
        let routerList = createRouterList(res.data, routerMap)
        commit('CONCAT_ROUTES', routerList)
        resolve(state.routers)
      }).catch(error => reject(error))
    })
  }
}

export default {
  state,
  mutations,
  actions
}
