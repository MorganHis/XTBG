import VueRouter from 'vue-router'

const router = new VueRouter({
  // mode: 'history', // 路由history模式，地址栏不会出现丑丑的 #
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/home/index'),
      meta: { title: 'Home' }
    },
    {
      path: '/home',
      component: () => import('@/views/home/index'),
      meta: { title: 'Home' }
    },
    {
      path: '/committee',
      component: () => import('@/views/committee/index'),
      meta: { title: 'Committee' }
    },
    {
      path: '/contact',
      component: () => import('@/views/contact/index'),
      meta: { title: 'Contact' }
    },
    {
      path: '/registration',
      component: () => import('@/views/registration/index'),
      meta: { title: 'Registration' }
    },
    {
      path: '/speakers',
      component: () => import('@/views/speakers/index'),
      meta: { title: 'Speakers' }
    },
    {
      path: '/schedule',
      component: () => import('@/views/schedule/index'),
      meta: { title: 'Schedule' }
    },
    {
      path: '/submission',
      component: () => import('@/views/submission/index'),
      meta: { title: 'Submission' }
    }
  ]
})
// 全局后置路由守卫 用于更改页签标题
router.afterEach((to) => {
  const affix = 'XTBG'
  const title = to.meta.title
  document.title = title ? `${title} - ${affix}` : affix
})


export default router
