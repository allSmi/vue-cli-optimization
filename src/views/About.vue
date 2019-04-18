<template>
  <div class="about" slot="about">
    <h1 @click="back">This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <h1>This is an about page</h1>
    <van-button>xxx</van-button>
    <van-icon name="close" />
  </div>
</template>
<script>
import Vue from 'vue';
import { Button, Icon } from 'vant';
Vue.use(Button).use(Icon);
let count = 0;
export default {
    name: 'about',
    data () {
        return {
            aaa: 1212
        };
    },
    activated () {
        console.log('activated');

        console.log(count++);

        this.$parent.$children.forEach((item) => {
            if (item.$options.name === 'home') {
                item.a = '222';
            }
        });
    },
    mounted () {
        console.log(count++);
        console.log(this.aaa++);
    },
    destroyed () {
        console.log('destroyed');
    // count=99
    },
    methods: {
        back () {
            this.$router.go(-1);
        }
    }
};
</script>
