import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    changedUsersObj: {}
  },

  getters: {
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
