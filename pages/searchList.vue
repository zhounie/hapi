<template>
  <div>
    <div class="bg-white">
      <van-search
        @click="handleClick"
        shape="round"
        placeholder="请输入搜索关键词"
      >
        <template #left>
          <van-icon @click="handleClickLeft" name="arrow-left" />
        </template>
      </van-search>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <ul>
      <li>
        <van-card
          @click="handleClickItem"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
        </van-card>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
        </van-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      value1: 0,
      value2: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [],
    }
  },
  methods: {
    handleClickLeft() {
      this.$router.back()
    },
    handleClick() {
      this.$router.replace('/search')
    },
    handleClickItem() {
      this.$router.push('/product')
    },
  },
})
</script>
