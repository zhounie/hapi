<template>
    <div class="h-screen">
        <div class="bg-white">
            <van-search
                v-model="searchValue"
                shape="round"
                show-action
                placeholder="请输入搜索关键词"
            >
                <template #left>
                    <van-icon @click="handleClickLeft" name="arrow-left" />
                </template>
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div>

        <div class="bg-white p-1">
            <h4 class="text-base">历史搜索</h4>
            <ul class="flex flex-wrap space-x-1">
                <li>
                    <van-tag size="medium" color="#eee" text-color="#666" @click="handleClickTag">标签</van-tag>
                </li>
                <li>
                    <van-tag size="medium" color="#eee" text-color="#666" @click="handleClickTag">标签</van-tag>
                </li>
            </ul>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    onSearch() {
      this.$router.replace('/searchList')
    },
    handleClickLeft() {
        this.$router.back()
    },
    handleClickTag() {
        this.$router.replace('/searchList')
    }
  }
})
</script>