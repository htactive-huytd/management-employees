import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListEmployees from '@/components/ListEmployees'
import ModalComponent from '@/components/ModalComponent'

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
      path: '/mod',
      name: 'ModalComponent',
      component: ModalComponent
    }
  ]
})
