<template>
  <div>
    user
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'home',
  created() {
    this.$router.replace({
      path: '/login'
    })
  },
  data() {
    return {
      
    }
  }
})
</script>

<style>
</style>
