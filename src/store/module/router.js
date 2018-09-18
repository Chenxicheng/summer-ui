import { routes } from '@/router/routers';

const state = {
  routes,
  hasRoutes: fasle
}

const mutations = {

}

const actions = {
  updateRoutes ({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
