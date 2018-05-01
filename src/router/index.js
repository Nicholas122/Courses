import Vue from 'vue'
import Router from 'vue-router'
import CreateTest from '@/components/CreateTest'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test/new/:courseId',
      component: CreateTest,
      props: true
    }
  ]
})