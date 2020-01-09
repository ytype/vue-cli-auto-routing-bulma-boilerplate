/* eslint-disable arrow-body-style */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable prefer-template */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import {
  createRouterLayout
} from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout((layout) => {
  return import('@/layouts/' + layout + '.vue')
})

export default new Router({
  routes: [{
    path: '/',
    component: RouterLayout,
    children: routes
  }]
})