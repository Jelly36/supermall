<!--  -->
<template>
  <div class="back-top">
    <img
      src="~assets/imgs/common/top.png"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
    };
  },

  components: {},

}

</script>
<style lang='less' scoped>
.back-top {
  position: fixed;
  right: 40px;
  bottom: 83px;
  img {
    display: block;
    width: 60px;
    height: 60px;
  }
}
</style>