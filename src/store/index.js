import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: []
  },

  mutations: {
    setUsersList (state, users) {
      state.users = users
    }
  },

  actions: {
    getUsersList ({ commit }) {
      fetch('/api/users')
        .then(res => res.json())
        .then(({ users }) => {
          commit('setUsersList', users)
        })
    }
  }
})

export default store
