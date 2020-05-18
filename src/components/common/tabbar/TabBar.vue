<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
#tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px 1px rgba(100, 100, 100, 0.2);
}
</style>
