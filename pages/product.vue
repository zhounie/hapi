<template>
  <div>
    <div
      class="z-50 nav_bar w-screen h-5 bg-white fixed flex justify-between items-center pl-1 pr-1 transition duration-150"
      :class="barOpacity"
    >
      <div
        class="w-4 h-4 flex items-center justify-center rounded-full"
        :class="{
          'bg-gray-800 bg-opacity-75': isReverse,
        }"
        @click="$router.back()"
      >
        <van-icon name="arrow-left" :color="isReverse ? '#fff' : '#000'" />
      </div>
      <div class="content">
        <!-- <nav :class="{
                    'invisible': isReverse,
                    'visible': !isReverse
                }">
                    <a href="javascript:;">
                        <span class="text-sm pl-1 pr-1">商品</span>
                    </a>
                    <a href="javascript:;">
                        <span class="text-sm pl-1 pr-1">详情</span>
                    </a>
                </nav> -->
      </div>

      <van-popover
        v-model="showPopover"
        trigger="click"
        :actions="actions"
        placement="bottom-end"
        @select="onSelect"
      >
        <template #reference>
          <div
            class="w-4 h-4 flex items-center justify-center rounded-full"
            :class="{
              'bg-gray-800 bg-opacity-75': isReverse,
            }"
          >
            <van-icon name="ellipsis" :color="isReverse ? '#fff' : '#000'" />
          </div>
        </template>
      </van-popover>
    </div>

    <div @scroll="handleScroll" class="product_wrap">
      <Swiper>
        <SwiperSlide>
          <van-image
            height="9rem"
            fit="cover"
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870521716,857441283&fm=26&gp=0.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <van-image
            height="9rem"
            fit="cover"
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1542609117,2286902976&fm=26&gp=0.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <van-image
            height="9rem"
            fit="cover"
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1731472669,4215674773&fm=26&gp=0.jpg"
            alt=""
          />
        </SwiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </Swiper>
      <div class="product_message p-2 bg-white">
        <div class="price text-red-600 text-base font-semibold">
          ￥<span class="text-2xl">116</span>.00
        </div>
        <div class="product_title text-lg font-semibold">
          网易严选 天然食品级豆腐猫砂快速结团宠物猫咪用品 绿茶味 2.6kg*4包整箱装
        </div>
      </div>

      <div class="product_store bg-white rounded mt-2 mb-2 p-2">
        <div class="store_name flex items-center">
          <div class="w-4 h-4 rounded-sm bg-white overflow-hidden">
            <van-image
              fit="cover"
              width="100%"
              height="100%"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <h5 class="text-sm ml-1">网易严选京东自营旗舰店</h5>
        </div>
        <div class="flex justify-center pt-2 pb-1">
          <div class="text-center pr-6 van-hairline--right">
            <h6 class="text-sm">13万</h6>
            <span class="text-xs text-gray-500">粉丝人数</span>
          </div>
          <div class="text-center pl-6">
            <h6 class="text-sm">81</h6>
            <span class="text-xs text-gray-500">全部商品</span>
          </div>
        </div>
        <div class="flex justify-around">
          <van-button plain round size="small" icon="star-o"
            >关注店铺</van-button
          >
          <van-button plain round size="small" icon="shop-o"
            >进入店铺</van-button
          >
        </div>
      </div>

      <div class="product_detail bg-white rounded mt-2">
        <van-tabs v-model="activeName">
          <van-tab title="商品介绍" name="a">
            <van-image
              src="https://cdnimg.chinagoods.com/jpg/2020/07/31/a59bca31b32e0ac451e207f744deb274.jpg"
            />
            <van-image
              src="https://cdnimg.chinagoods.com/jpg/2020/07/31/a59bca31b32e0ac451e207f744deb274.jpg"
            />
            <van-image
              src="https://cdnimg.chinagoods.com/jpg/2020/07/31/a59bca31b32e0ac451e207f744deb274.jpg"
            />
            <van-image
              src="https://cdnimg.chinagoods.com/jpg/2020/07/31/a59bca31b32e0ac451e207f744deb274.jpg"
            />
          </van-tab>
          <van-tab title="售后保障" name="b">售后保障</van-tab>
        </van-tabs>
      </div>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      activeName: 'a',
      barOpacity: 'bg-opacity-0',
      isReverse: true,
      showPopover: false,
      actions: [
        { text: '首页', path: '/', icon: 'wap-home-o' },
        { text: '分类搜索', path: '/classify', icon: 'apps-o' },
        { text: '个人中心', path: '/user', icon: 'friends-o' },
      ],
    }
  },
  mounted() {},
  methods: {
    onClickLeft() {},
    onClickRight() {},
    handleScroll(e: Event) {
      if (e.target) {
        let target: EventTarget = e.target
        let scrollTop = (target as any).scrollTop
        let barOpacity = 'bg-opacity-'
        if (scrollTop < 50) {
          this.isReverse = true
        } else {
          this.isReverse = false
        }
        if (scrollTop < 50) {
          barOpacity += '0'
        } else if (scrollTop < 100) {
          barOpacity += '25'
        } else if (scrollTop < 150) {
          barOpacity += '50'
        } else if (scrollTop < 200) {
          barOpacity += '75'
        } else {
          barOpacity += '100'
        }
        this.barOpacity = barOpacity
      }
    },
    onSelect({ path }: { path: string }) {
      this.$router.push(path)
    },
  },
})
</script>

<style lang="less" scoped>
.product_wrap {
  height: calc(100vh - 1.5rem);
  overflow-y: scroll;
}
/deep/.swiper-slide {
  height: 9rem;
}
.product_detail {
  /deep/.van-image {
    display: block;
  }
}
</style>
