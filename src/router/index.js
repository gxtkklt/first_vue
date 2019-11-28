import Vue from 'vue'
import Router from 'vue-router'
import Test from  '@/components/test/Test'
import Computed_demo1 from  '@/components/test/Computed_demo1'
import from from  '@/components/test/from'
import style from  '@/components/day1/style'
import list from  '@/components/testvue_api/list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/computed_demo1',
      name: 'Computed_demo1',
      component: Computed_demo1
    },
    {
      path: '/from',
      name: 'from',
      component: from
    },
    {
      path: '/style',
      name: 'style',
      component: style
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
  ]
})
