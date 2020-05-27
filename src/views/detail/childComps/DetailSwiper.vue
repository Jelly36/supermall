<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in ban" :key="index">
      <img :src="item" alt class="bannerImg" />
    </van-swipe-item>
  </van-swipe>
</template>

<style scoped>
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 180px;
}
.bannerImg {
  display: block;
  height: 300px;
  width: 100%;
}
</style>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "DetailSwiper",
  props: {
    ban: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  created() {},
  methods: {
    // imgLoad(){
    //   if(!this.isLoad){
    //     this.$emit('swiperimgLoad')
    //       }
    //   this.isLoad=true;
    // }
  }
};
</script>