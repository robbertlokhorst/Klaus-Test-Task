import Vue from 'vue'
import App from './App.vue'
import { makeServer } from '@/server'
import VueVirtualScroller from 'vue-virtual-scroller'
import '@/assets/reset.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(VueVirtualScroller)

makeServer()

new Vue({
  render: (h) => h(App)
}).$mount('#app')
