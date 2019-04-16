<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button>123</van-button>
    <van-cell>234</van-cell>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { Button, Cell } from 'vant'
Vue.use(Button).use(Cell)
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
