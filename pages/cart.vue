<template>
    <div class="p-1">
        <div class="flex justify-between items-start">
            <div>
                <h5 class="text-xl">购物车</h5>
                <div class="text-sm text-gray-700">共102件宝贝</div>
            </div>
            <button class="text-base">管理</button>
        </div>

        <ul>
            <li v-for="(shop, index) in list" :key="index" class="bg-white rounded-md p-1">
                <div class="flex items-center">
                    <van-checkbox class="mr-1" v-model="shop.check" @click="handleShopCheckChange(shop)"></van-checkbox>
                    <van-icon name="shop-o" size="22px" />
                    <h4 class="text-base font-medium">{{shop.shopName}}</h4>
                </div>
                <ul>
                    <li v-for="(product) in shop.product" :key="product.id" class="flex space-y-1">
                        <van-checkbox class="mr-1" v-model="product.check" @change="handleProductCheckChange(shop)"></van-checkbox>
                        <van-image class="mr-1 rounded-sm overflow-hidden" width="80" height="80" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                        <div class="flex flex-col justify-between flex-1">
                            <h5 class="text-sm">{{product.name}}</h5>
                            <div class="flex justify-between">
                                <span class="text-red-600 text-sm">￥168</span>
                                <span class="text-gray-800 text-sm">x1</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
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
            id: 1,
            shopName: '卖酒店',
            check: false,
            product: [
                { id: 2, name: '红酒', check: false },
                { id: 3, name: '白酒', check: false },
                { id: 4, name: '黄酒', check: false },
            ]
          }, {
            id: 1,
            shopName: '卖酒店',
            check: false,
            product: [
                { id: 2, name: '红酒', check: false },
                { id: 3, name: '白酒', check: false },
                { id: 4, name: '黄酒', check: false },
            ]
          }
      ],
      ids: []
    }
  },
  mounted() {
  },
  methods: {
      handleShopCheckChange(shop: {check: boolean, product: [{check: boolean}]}) {
        shop.product.map(item => {
            item.check = shop.check
        })
      },
      handleProductCheckChange(shop: {check: boolean, product: [{check: boolean}]}) {
          let result = shop.product.find(item => !item.check)
          if (result) {
              shop.check = false
          } else {
              shop.check = true
          }
      }
  }
})
</script>