import Vue from 'vue'
import App from '@/App.vue'
import { makeServer } from '@/server'
import { RecycleScroller } from 'vue-virtual-scroller'
import '@/assets/reset.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import store from '@/store'

Vue.component('RecycleScroller', RecycleScroller)

makeServer()

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
