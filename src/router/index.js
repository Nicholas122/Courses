import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test/new/:courseId',
      name: 'createNewTest',
      component: Hello
    },
    {
      path: '/test/:id',
      name: 'editTest',
      component: Hello
    },
  ]
})