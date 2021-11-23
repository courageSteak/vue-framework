// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

// 懒加载方法导入
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')

const Profile = () => import('../components/Profile')

// 1. 通过Vue.use(插件)，安装插件
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]
  },
{
  path: '/about',
  name: 'About',
  meta: {
    title: '关于'
  },
  component: About
},
  {
    path: '/user/:userId',
    name: 'User',
    component: User
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

// 2.创建VueRouter对象
export default new Router({
  routes,
  mode: 'history'
})

// // 前置守卫(guard)
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title
//   next()
// })
// // 后置钩子(hook)
// router.afterEach((to,from)=>{
//
// })
