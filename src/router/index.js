import Vue from 'vue'
import Router from 'vue-router'
import ListEmployees from '@/components/ListEmployees'
import ModalAddEmployee from '@/components/ModalAddEmployee'
import ModalEditEmployee from '@/components/ModalEditEmployee'
import ModalConfirmDelete from '@/components/ModalConfirmDelete'
import ShowDetailEmployee from '@/components/ShowDetailEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/modalconfirm',
      name: 'ModalConfirmDelete',
      component: ModalConfirmDelete
    },
    {
      path: '/showdetail/:id',
      name: 'ShowDetailEmployee',
      component: ShowDetailEmployee,
      props: true
    }
  ]
})
