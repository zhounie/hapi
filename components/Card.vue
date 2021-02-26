<template>
  <div class="w-18 h-36 mb-1 bg-gray-200 shadow-lg" @click="onClick">
    <div class="w-full h-20">
      <van-image
        class="h-full"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="message p-1">
      <h5 class="text-sm text-gray-800 van-multi-ellipsis--l2">
        31405张卫超袜子商行外贸内销零售批发一站式购物义乌好货秋冬新款婴儿保暖打底裤全棉加厚毛圈男女童连裤袜规格多样花型随机
      </h5>
      <div class="grid grid-cols-2 pt-1">
        <span class="text-xs text-red-600 text-left">￥60</span>
        <span class="text-xs text-gray-600 text-right">销量：800</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    onClick() {
      this.$router.push('/product')
    },
  },
})
</script>
