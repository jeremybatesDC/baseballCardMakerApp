//import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
//import Tabs from '../views/Tabs.vue'
//
//const routes: Array<RouteRecordRaw> = [
//  {
//    path: '/',
//    redirect: '/tabs/front'
//  },
//  {
//    path: '/tabs/',
//    component: Tabs,
//    children: [
//      {
//        path: '',
//        redirect: 'front'
//      },
//      {
//        path: 'front',
//        component: () => import('@/views/Front.vue')
//      },
//      {
//        path: 'back',
//        component: () => import('@/views/Back.vue')
//      }
//    ]
//  }
//]
//
//const router = createRouter({
//  history: createWebHistory(process.env.BASE_URL),
//  routes
//})
//
//export default router