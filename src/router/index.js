import { createRouter, createWebHistory } from 'vue-router'



//หน้าแรก
import homepage from '../views/homepage.vue'
//หน้ารายละเอียดสินค้า
import product_detail from '../views/product_detail.vue'
// ตะกร้าสินค้า
import cart_cart from '../views/cart_cart.vue'


const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  }, 
  {
    path: '/product_detail/:name',
    name: 'product_detail',
    component: product_detail
  },
  {
    path: '/cart',
    name: 'cart_cart',
    component: cart_cart
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router