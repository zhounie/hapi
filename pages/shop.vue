<template>
  <div class="pb-6">
    <van-sticky offset-top="-2.8rem">
      <div class="layout_shop w-full h-16 z-10">
        <div class="model"></div>
        <van-search
          shape="round"
          show-action
          background="transparent"
          placeholder="请输入搜索关键词"
        >
          <template #left>
            <van-icon @click="handleClickLeft" name="arrow-left" color="#fff" />
          </template>
          <!-- <template #action>
            <div @click="onSearch">搜索</div>
          </template> -->
        </van-search>
        <div class="flex justify-between px-1 items-center">
          <div class="flex">
            <van-image
              round
              fit="cover"
              width="1.2rem"
              height="1.2rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="ml-1 flex flex-col">
              <h4 class="text-xl text-white">小米专卖店</h4>
              <div class="flex space-x-1 items-center">
                <van-rate :value="4" size="6" gutter="6" readonly />
                <span class="text-xs text-white">52.6万人关注</span>
              </div>
            </div>
          </div>
          <van-button round type="primary" icon="like-o" size="mini">关注</van-button>
        </div>
        
        <ul v-if="path === '/shop/goods'" class="text-sm text-white flex justify-around h-5 pt-1 items-center">
          <li class="text-red-600 bg-white rounded-full px-2 h-3 leading-3">综合</li>
          <li>銷量</li>
          <li>新品</li>
        </ul>
        <ul v-else-if="path !== '/shop/classify'" class="text-white text-sm flex justify-around leading-4 pt-1">
            <nuxt-link tag="li" to="/shop">精选</nuxt-link>
            <nuxt-link tag="li" to="/shop/activity">活动</nuxt-link>
            <nuxt-link tag="li" to="/shop/new">上新</nuxt-link>
        </ul>
      </div>
    </van-sticky>
    <nuxt-child />
    <van-tabbar route>
      <van-tabbar-item icon="home-o" replace to="/shop">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" replace to="/shop/goods"
        >全部商品</van-tabbar-item
      >
      <van-tabbar-item icon="apps-o" replace to="/shop/classify"
        >分类</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      activeName: 'a'
    }
  },
  computed: {
    path() {
      return this.$route.path
    }
  },
  methods: {
    handleClose() {
      this.$router.back()
    },
    handleClickLeft() {
      this.$router.back()
    },
  },
  components: {
  }
})
</script>

<style lang="less" scoped>
.layout_shop {
  background-image: url('~@/assets/images/jiu.jpg');
  position: relative;
}
.model {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(0, 0, 0, .25);
}


</style>
