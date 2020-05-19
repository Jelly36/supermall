<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  background-color:var(--color-tint);
  position: fixed;
  left:0;
  top:0;
  right:0;
  z-index:9;
}
.left {
  width: 60px;
}
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>