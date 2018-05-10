import Vue from 'vue'
import Router from 'vue-router'
import CreateTest from '@/components/CreateTest'
import EditTests from '@/components/EditTests'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test-new/:courseId',
      component: CreateTest,
      props: true
    },
    {
      path: '/test-edit/:testId',
      component: EditTests,
      props: true
    }
  ]
})