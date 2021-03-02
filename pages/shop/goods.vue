<template>
  <div>
    <!-- <van-sticky offset-top="1.2rem">
      <div class="bg-white leading-4">
        <ul class="text-sm text-gray-800 flex space-x-4 ml-4">
          <li class="text-orange-500">综合</li>
          <li>銷量</li>
          <li>新品</li>
        </ul>
      </div>
    </van-sticky> -->
    <div class="list bg-gray-200">
      <List />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isLoading: false,
      activeName: 'a',
    }
  },
  layout: 'shop',
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  },
})
</script>

<style lang="less" scoped>
.layout_shop {
  background-image: url('~@/assets/images/jiu.jpg');
}
</style>
