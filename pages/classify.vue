<template>
  <div>
    <van-tree-select
      :items="items"
      :main-active-index.sync="activeIndex"
    >
        <template #content>
          <div class="p-1 pt-2" v-for="(classify, index) in classifyList" :key="index">
            <div class="pb-2 text-base font-semibold">{{classify.label}}</div>
            <ul class="flex flex-wrap justify-between">
              <li class="w-7 text-center pb-1" v-for="(item) in classify.list" :key="item.name">
                <img :src="item.img" alt="">
                <span class="text-xs">{{item.name}}</span>
              </li>
            </ul>
          </div>
        </template>
    </van-tree-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  data() {
    return {
      items: [
        {
          text: '热门推荐'
        }, {
          text: '手机数码'
        }, {
          text: '电脑办公'
        }
      ],
      activeIndex: 0,
      classifyList: [
        {
          label: '热门分类',
          list: [
            {
              img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=344980376,2069530317&fm=26&gp=0.jpg',
              name: '小米'
            }, {
              img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=344980376,2069530317&fm=26&gp=0.jpg',
              name: '空调'
            }, {
              img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=344980376,2069530317&fm=26&gp=0.jpg',
              name: '空调'
            }, {
              img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=344980376,2069530317&fm=26&gp=0.jpg',
              name: '空调'
            }
          ]
        }
      ]
    }
  }
})
</script>

<style>
</style>
