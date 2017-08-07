import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/pages/Index.vue')), 'Index')
const Product = r => require.ensure([], () => r(require('@/pages/Product.vue')), 'Product')
const Cart = r => require.ensure([], () => r(require('@/pages/Cart.vue')), 'Cart')
const List = r => require.ensure([], () => r(require('@/pages/ProductList.vue')), 'List')
const Info = r => require.ensure([], () => r(require('@/pages/Myinfo.vue')), 'Info')
const Regist = r => require.ensure([], () => r(require('@/pages/Regist.vue')), 'Regist')
const Login = r => require.ensure([], () => r(require('@/pages/Regist.vue')), 'Regist')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
		            {
		           	path: '/index/user=:user',
		           	name:'index/user',
		            component: Index,
		            }
               ]
    },{
    	path: '/product/goods=:goods',
      name: 'Product',
      component: Product
    },{
    	path: '/login',
      name: 'Login',
      component: Login
    },{
    	path: '/regist',
      name: 'Regist',
      component: Regist
    },{
    	path: '/cart',
      name: 'Cart',
      component: Cart
    },{
    	path: '/list/:type',
      name: 'List',
      component: List
    },{
    	path: '/myinfo/:user',
      name: 'Info',
      component: Info
    },{
    	path:'/',
    	redirect:"/index"
    }
  ]
   })
