import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    changedUsersObj: {},
    searchQuery: ''
  },

  getters: {
    users (state) {
      const s = state.searchQuery

      const users = state.users.filter(({ name, email, role }) => {
        return name.toLowerCase().includes(s) || email.toLowerCase().includes(s) || role.toLowerCase().includes(s)
      })

      return users
    },
    isUserSelected: state => id => {
      return state.changedUsersObj.hasOwnProperty(id)
    },
    selectedUsersLength (state) {
      return Object.keys(state.changedUsersObj).length
    }
  },

  mutations: {
    setUsersList (state, users) {
      state.users = users
    },
    toggleUser (state, { id, checked }) {
      if (checked) {
        Vue.set(state.changedUsersObj, id, checked)
      } else {
        Vue.delete(state.changedUsersObj, id)
      }
    },
    setSearchQuery (state, query) {
      state.searchQuery = query
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
