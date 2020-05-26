<template>
  <div id="home">
    <NavBar>
      <div
        slot="center"
        class="nav-center"
      >购物街</div>
    </NavBar>
    <TabControl
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"
        :class="{fixed:isFixed}"
      ></TabControl>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load='true' @pullUpLoad="loadMore">
      <HomeSwiper :banners="banners" @swiperimgLoad='swiperimgLoad'></HomeSwiper>
      <HomeRecommends :recommends="recommends"></HomeRecommends>
      <FeatureView></FeatureView>
      <TabControl
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"
        :class="{fixed:isFixed}"
      ></TabControl>
      <GoodsList :goods="goods[currentType].list" />
    </Scroll>
    <BackTop @click.native="backTop" v-show="isShowBackUp"></BackTop>
  </div>
</template>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-center {
  text-align: center;
  color: #fff;
}
.tab-control {
  top: 44px;
}
.fixed{
  position: fixed; 
}
.content {
  position: absolute; 
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/contents/tabControl/TabControl";
import GoodsList from "@/components/contents/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/contents/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommends from "./childComps/HomeRecommends";
import FeatureView from "./childComps/FeatureView";

import {debouce} from "common/utils"
export default {
  data() {
    return {
      banners: null,
      recommends: null,
      loading: false,
      currentType: 'pop',
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      isShowBackUp:false,
      isFixed:false,
      tabOffsetTop:null
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommends,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    tabClick(index) {
      // console(index);
      switch (index) {
        case 0: this.currentType = 'pop';
          break
        case 1: this.currentType = "new";
          break
        case 2: this.currentType = "sell";
      }
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list) // 视图发生改变
        this.goods[type].page += 1;
      }).catch(err => {
        console.log(err);
      })
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
    contentScroll(position){
      this.isShowBackUp=-position.y>1000
      this.isFixed=-position.y>this.tabOffsetTop
    },
    // 上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
      
    },
    swiperimgLoad(){
      this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
      
      }
  },
  mounted(){
    const refresh=debouce(this.$refs.scroll.refresh,500);
    this.$bus.$on('imgloadSuccess',()=>{
      refresh()
    })

   
    
  }
};
</script>