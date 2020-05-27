<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="" class="bannerImg" @load="imgLoad">
          </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 180px;
  text-align: center;
  background-color: #39a9ed;
}
.bannerImg{
    display: block;
    height:180px;
    width:100%;
}
</style>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "HomeSwiper",
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data() {
    return {
      isLoad:false
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  created() {
   
  },
  methods:{
    imgLoad(){
      
      if(!this.isLoad){
        this.$emit('swiperimgLoad')
          }
      this.isLoad=true;
    }
  }
};
</script>