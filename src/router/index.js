import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListEmployees from '@/components/ListEmployees'
import ModalAddEmployee from '@/components/ModalAddEmployee'
import ModalEditEmployee from '@/components/ModalEditEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'ListEmployees',
      component: ListEmployees
    },
    {
      path: '/modaladd',
      name: 'ModalAddEmployee',
      component: ModalAddEmployee
    },
    {
      path: '/modaledit',
      name: 'ModalEditEmployee',
      component: ModalEditEmployee
    }
  ]
})
