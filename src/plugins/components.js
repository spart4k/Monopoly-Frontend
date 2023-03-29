import Vue from 'vue'

Vue.component('v-btn', () => import('@/components/@ui/btn/default/index.vue'))
Vue.component('v-input', () => import('@/components/@ui/input/default/index.vue'))
Vue.component('v-textarea', () => import('@/components/@ui/textarea/default/index.vue'))
