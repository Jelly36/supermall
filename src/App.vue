<template>
  <div id="app">
    <keep-alive exclude="Detail">
        <router-view></router-view>
    </keep-alive>
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
