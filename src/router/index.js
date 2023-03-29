import Vue from 'vue'
import VueRouter from 'vue-router'

import Start from '@/views/Start'
import TodoView from '@/views/Todo'

import TodoList from '@/components/@logic/todo/list/default'
import TodoListRemoved from '@/components/@logic/todo/list/removed'
import TodoTask from '@/components/@logic/todo/task/default'
import TodoAddOrEdit from '@/components/@logic/todo/addOrEdit/default'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Start,
  },
  {
    name: 'Список задач',
    path: '/list',
    component: TodoView,
    children: [
      { path: '/list', component: TodoList },
      { path: '/list/add', component: TodoAddOrEdit },
      { path: '/list/removed', component: TodoListRemoved },
      { path: '/list/:id', component: TodoTask },
      { path: '/list/:id/edit', component: TodoAddOrEdit },
      // ...other sub routes
    ],
  },
]
console.log('router')
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
