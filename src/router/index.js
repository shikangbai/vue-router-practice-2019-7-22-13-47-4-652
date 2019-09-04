import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
