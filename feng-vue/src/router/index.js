import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import article from '@/components/children/article'
import content0 from '@/components/children/content0'
import content1 from '@/components/children/content1'
import content2 from '@/components/children/content2'
import content3 from '@/components/children/content3'
import content4 from '@/components/children/content4'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect:'/article'
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
        {
          path: 'article',
          name: 'article',
          component: article,
        },
        {
          path: 'content0',
          name: 'content0',
          component: content0,
        },
        {
          path: 'content1',
          name: 'content1',
          component: content1,
        },
        {
          path: 'content2',
          name: 'content2',
          component: content2,
        },
        {
          path: 'content3',
          name: 'content3',
          component: content3,
        },
        {
          path: 'content4',
          name: 'content4',
          component: content4,
        }
      ]
    }
  ]
})
