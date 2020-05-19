<!--  -->
<template>
  <div id="home">
    <NavBar>
      <div slot="center" class="nav-center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommends :recommends="recommends"></HomeRecommends>
    <FeatureView></FeatureView>
    <TabControl :titles="['流行','新款','精选']" class="tab-control"></TabControl>
    <ul>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表一</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
      <li>列表二</li>
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
.tab-control{
  position: sticky;
  top:44px;
}
</style>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/contents/tabControl/TabControl";

import {getHomeMultidata ,getHomeGoods} from "@/network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommends from "./childComps/HomeRecommends";
import FeatureView from "./childComps/FeatureView";
export default {
  data() {
    return {
      banners:null,
      recommends:null,
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
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
    this.getHomeMultidata();
    this.getHomeGoods('pop')
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      // console.log(this.goods[type].page)
      // var page=this.goods[type].page+1;
      getHomeGoods(type,1).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
};
</script>