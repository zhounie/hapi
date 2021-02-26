<template>
  <div class="login pt-6">
    <h4 class="text-2xl text-center">登录</h4>
    <van-form @submit="onSubmit" label-width="50px">
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="m-2">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="m-2">
      <span class="text-xs float-right">注册</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {},
    }
  },
  methods: {
    onSubmit() {
      localStorage.setItem('islogin', '1')
      this.$router.push({
        path: '/',
      })
    },
  },
})
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: #fff;
}
</style>
