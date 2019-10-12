import Home from '../pages/home'
import Classify from '../pages/classify'
import Find from '../pages/find'
import ShopCart from '../pages/shopCart'
import Personal from '../pages/personal'
import Search from  '../pages/search'

export default [
   {
     path:'/home',
     component:Home,
     meta:{
       isShowFooter: true
     }
   },
   {
     path:'/classify',
     component:Classify,
     meta: {
       isShowFooter: true
     }
   },
   {
     path:'/find',
     component:Find,
     meta: {
       isShowFooter: true
     }
   },
   {
     path: '/shopCart',
     component:ShopCart,
     meta: {
       isShowFooter: true
     }
   },
   {
     path: '/personal',
     component:Personal
   },
   {
     path:'/search',
     component:Search
   },
   {
     path: '/',
     redirect: '/home'
   }
]