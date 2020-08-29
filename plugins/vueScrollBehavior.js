import Vue from 'vue'
import vueScrollBehavior from 'vue-scroll-behavior'

export default function ({ app }) {
  Vue.use(vueScrollBehavior, { router: app.router, el: '.app' })
}
