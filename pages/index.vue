<template>
  <div>
    <div class="">
      <van-search
        @click="handleClick"
        v-model="searchValue"
        shape="round"
        placeholder="请输入搜索关键词"
      ></van-search>
    </div>
    <div class="hot m-1 bg-white rounded p-1">
      <div class="title text-lg pb-1">市场爆款</div>
      <ul class="flex flex-wrap justify-between">
        <li class="w-8" v-for="(item, index) in list" :key="index">
          <div class="w-full h-8">
            <van-image class="h-full" fit="cover" :src="item.img" />
          </div>
          <div class="text-red-600 p-1 text-sm">￥{{ item.price }}</div>
        </li>
      </ul>
    </div>
    <div class="guess">
      <p class="text-base text-center text-gray-700">猜你喜欢</p>
      <List />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  data() {
    return {
      list: [
        {
          img: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          price: '25',
        },
        {
          img: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          price: '25',
        },
        {
          img: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          price: '25',
        },
        {
          img: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          price: '25',
        },
      ],
      searchValue: '',
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/search')
    },
  },
})
</script>

<style></style>
