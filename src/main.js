import Vue from 'vue'
import App from './App.vue'
import { makeServer } from '@/server'
import VueVirtualScroller from 'vue-virtual-scroller'
import '@/assets/reset.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import store from '@/store'

Vue.use(VueVirtualScroller)

makeServer()

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
