import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import home from '../components/home'
import welcome from '../components/welcome'
import users from '../components/user/users'
import Rights from '../components/power/Rights'
import Roles from '../components/power/Roles'
import Cate from '../components/goods/Cate'
import params from '../components/goods/params'
import goodsList from '../components/goods/goodsList'
import add from '../components/goods/add'
import order from '../components/order/order'
import report from '../components/report/report'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    {
      path: '/home',
      component: home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: welcome },
        { path: '/users', component: users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/params', component: params },
        { path: '/goods', component: goodsList },
        { path: '/goods/add', component: add },
        { path: '/orders', component: order },
        { path: '/reports', component: report }
      ]
    }
  ]
})
// 挂载路由导航首位
// 为路由对象，添加 beforeEach 导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从 sessionStorage 中获取到 保存的 token 值
  const tokenStr = window.sessionStorage.getItem('token') // 没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
