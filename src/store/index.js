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
    },
    currentUsersSelected (state, getters) {
      if (!getters.selectedUsersLength || getters.selectedUsersLength < getters.users.length) {
        return false
      }

      return getters.users.every(user => {
        return getters.isUserSelected(user.id)
      })
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
    deleteUser (state, id) {
      state.users = state.users.filter(u => u.id !== id)
      Vue.delete(state.changedUsersObj, id)
    },
    setSearchQuery (state, query) {
      state.searchQuery = query
    },
    deleteSelectedUsers (state) {
      const toRemove = state.changedUsersObj
      const difference = state.users.filter(user => !toRemove.hasOwnProperty(user.id))
      state.users = difference
      state.changedUsersObj = {}
    },
  },

  actions: {
    toggleCurrentUsers ({ commit, state, getters }, checked) {
      const stack = checked ? getters.users : state.users

      for (let i = 0; i < stack.length; i++) {
        commit('toggleUser', {
          id: stack[i].id,
          checked
        })
      }
    },
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
