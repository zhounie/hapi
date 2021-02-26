<template>
  <div class="bg-gray-100">
    <div class="layout_home">
      <Nuxt />
    </div>
    <van-tabbar route>
        <van-tabbar-item icon="home-o" replace to="/" >首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" replace to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" replace to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
    }
  }
})
</script>


<style lang="less" scoped>
.layout_home {
  height: calc(100vh - 1.5rem);
  overflow-y: scroll;
}
</style>
