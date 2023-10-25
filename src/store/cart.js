import { defineStore } from "pinia";

import { ref, computed } from 'vue'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

//useProductStore
import { useProductStore } from './product'

export const useCartStore = defineStore('useCartStore', () => {
    const cart = ref([])

    const add_cart = (name, price, quantity = 1) => {
        const data = {
            name,
            price,
            quantity
        }

        const findId = cart.value.find(e => e.name === data.name)

        if(findId) {
            alert_add_cart_failed()
        } else {
            cart.value.push(data)
            saveToLocalStorage()
            alert_add_cart()
        }

        
        console.log(cart.value)
    }

    const add_cart_detail = (name, price, quantity) => {
        const data = {
            name,
            price,
            quantity
        }

        const findId = cart.value.find(e => e.name === data.name)

        if(findId) {
            const findIndexProduct = cart.value.findIndex(e => e.name === data.name)
            cart.value[findIndexProduct].quantity = cart.value[findIndexProduct].quantity + quantity
            saveToLocalStorage()
            alert_add_cart()
        } else {
            cart.value.push(data)
            saveToLocalStorage()
            alert_add_cart()
        }
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    const loadFromLocalStorage = () => {
        if(localStorage.getItem('cart')) {
            cart.value = JSON.parse(localStorage.getItem('cart'))
        }
    }

    const cart_previews = computed(() => {
        const product_store = useProductStore()

       return cart.value.map((prd, i) => {
            const findIndexProduct = product_store.products.findIndex(e => e.name === prd.name)

          return  {
                product : product_store.products[findIndexProduct],
                quantity : cart.value[i].quantity,
                total_product : product_store.products[findIndexProduct].price * cart.value[i].quantity
            }
        })
    })

    const total = computed(() => {
        return cart.value.reduce((sum, prd) => sum + prd.price * prd.quantity ,0)
    })

    const alert_add_cart = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'เพิ่มสินค้าเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const alert_add_cart_failed = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'คุณได้เพิ่มสินค้าไปแล้ว',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const increment_quantity = (i) => {
        cart.value[i].quantity += 1
        saveToLocalStorage()
    }

    const decrement_quantity = (i) => {
        cart.value[i].quantity -= 1
        saveToLocalStorage()

        if(cart.value[i].quantity === 0) {
            cart.value.splice(i, 1)
            saveToLocalStorage()
        }
    }

    const remove_cart = (i) => {
        cart.value.splice(i, 1)
        saveToLocalStorage()
    }

    const clear_cart = () => {
        cart.value = []
        saveToLocalStorage()
    }

    return { cart, add_cart, loadFromLocalStorage, cart_previews, increment_quantity, decrement_quantity, remove_cart, add_cart_detail, clear_cart, total }
})