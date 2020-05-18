<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar/>
  </div>
</template>

<script>
import mainTabBar from "@/components/contents/mainTabBar/MainTabBar";
export default {
  name: 'App',
  components: {
    mainTabBar
  }
}
</script>

<style lang="less">
  @import "~assets/css/base.css";
</style>
