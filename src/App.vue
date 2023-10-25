<template>
  <navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import navbar from '../src/components/navbar.vue'

import { useProductStore } from './store/product'
const product_store = useProductStore()


</script>


<style lang="scss" scoped>

</style>