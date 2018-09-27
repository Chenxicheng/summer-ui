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

const createRouterList2 = (routerList, routermap) => {
  return routerList.map(item => {
    let obj = null
    if (item.type === '0') { //
      obj = {
        path: item.path,
        name: item.name,
        meta: {
          icon: item.icon,
          title: item.title
        }
      }
      if (item.level && item.level === '1') obj.component = Main
      else obj.component = routermap[item.name]

      if (item.children && item.children.length) {
        if (item.children[0].type === '0') obj.children = createRouterList2(item.children, routermap)
        else obj.meta.permission = createRouterList2(item.children, routermap)
      }
    } else obj = item.name

    return obj
  })
}

const actions = {
  updateRoutes ({ state, commit, rootState }) {
    return new Promise((resolve, reject) => {
      // 获取路由列表
      getRouterList(rootState.user.userId).then(res => {
        const data = res.data
        let routerList = createRouterList2(data.menuList, routerMap)
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
