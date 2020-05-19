<!--  -->
<template>
  <div id="home">
    <NavBar>
      <div slot="center" class="nav-center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommends :recommends="recommends"></HomeRecommends>
    <FeatureView></FeatureView>
    <TabControl :titles="['流行','新款','精选']"></TabControl>
    <ul>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
    </ul>
  </div>
</template>

<style scoped>
#home{
  padding-top:44px;
}
.nav-center {
  text-align: center;
  color: #fff;
}
</style>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/contents/tabControl/TabControl";

import {getHomeMultidata} from "@/network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommends from "./childComps/HomeRecommends";
import FeatureView from "./childComps/FeatureView";
export default {
  data() {
    return {
      banners:null,
      recommends:null
    };
  },
  components:{
      NavBar,
      HomeSwiper,
      HomeRecommends,
      FeatureView,
      TabControl
  },
  created(){
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banners=res.banner.list;
      this.recommends=res.recommend.list;
    })
  }
};
</script>