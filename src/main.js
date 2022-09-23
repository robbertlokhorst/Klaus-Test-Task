import Vue from 'vue'
import App from './App.vue'
import { makeServer } from '@/server'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(VueVirtualScroller)

if (process.env.NODE_ENV === "development") {
  makeServer()
}

new Vue({
  render: (h) => h(App)
}).$mount('#app')