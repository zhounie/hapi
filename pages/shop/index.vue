<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
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
  layout: 'shop',
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
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

</style>
