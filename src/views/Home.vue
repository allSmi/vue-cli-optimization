<template>
  <div class="home" slot="home">
    {{a}}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button>123</van-button>
    <van-cell>234</van-cell>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { Button, Cell } from 'vant';
Vue.use(Button).use(Cell);
export default {
    name: 'home',
    data () {
        return {
            a: 111
        };
    },
    components: {
        HelloWorld
    },
    created () {
        console.log('created');
    },
    destroyed () {
        console.log('destroyed');
    },
    deactivated () {
        console.log('deactive');
    },
    activated () {
        console.log('activated');

        console.log(this.$parent);

        console.log(this.$router);

        console.log(this.$route);
    },
    mounted () {
        console.log('mounted');
    }
};
</script>
