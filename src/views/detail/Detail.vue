<!--  -->
<template>
  <div id="detail">
    <DetailNavBar class="detail-nav" @getTitleTop="getTitleTop" ref="nav"></DetailNavBar>
    <Scroll class="content" ref="scroll" :probeType='3' @scroll="contentScroll">
      <ul>
        <li v-for="(item,index) in $store.state.cartList" :key="index">{{item}}</li>
      </ul>
      <DetailSwiper ref="swiper" class="swiper" :ban="banners" @swiperimgLoad='swiperimgLoad'></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailParamsInfo ref="params" :paramsInfo="paramsInfo"></DetailParamsInfo>
      <DetailCommentsInfo ref="comments" :commentsInfo="commentsInfo"></DetailCommentsInfo>
      <GoodsList ref="recommend" :goods="recommendInfo" class="recommends"></GoodsList>
    </Scroll>

    <BackTop @click.native="backTop" v-show="isShowBackUp"></BackTop>
    <DetailBottomNav @addCart="addToCart"></DetailBottomNav>
  </div>
</template>

<style scoped>
.swiper {
  margin-top: 44px;
}
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
.recommends{
  padding-bottom: 88px;
}
</style>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentsInfo from "./childComps/DetailCommentsInfo";
import DetailBottomNav from "./childComps/DetailBottomNav";
import GoodsList from "@/components/contents/goods/GoodsList";

import Scroll from "@/components/common/scroll/Scroll";
import {backTopMixin,itemListener} from "common/mixin"
import {
  getDetail,
  Shop,
  Goods,
  GoodsParam,
  getRecommond
} from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      banners: null,
      goods: {},
      shop: {},
      paramsInfo: {},
      detailInfo: {},
      commentsInfo: {},
      recommendInfo: [],
      themeTopYs:[],
      getThemeTopY:null
      // currentIndx:0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamsInfo,
    DetailCommentsInfo,
    GoodsList,
    DetailBottomNav,
    Scroll,
  },
  mixins: [itemListener,backTopMixin],
  methods: {
    getTitleTop(index) {
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    swiperimgLoad(){
      this.$refs.scroll.refresh();
      this.themeTopYs=[];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    },
    contentScroll(position){
      this.isShowBackUp=-position.y>1000
      const length=this.themeTopYs.length;
        for(let i=0;i<length;i++){
          if((i<length-1&&-position.y>this.themeTopYs[i]&&-position.y<this.themeTopYs[i+1])||(i==length-1&&-position.y>this.themeTopYs[i])){
            this.$refs.nav.currentIndex=i
          }
        }
    },
    addToCart(){
      console.log("enen")
      const product={};
      product.image=this.banners[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice
      product.iid=this.iid
      this.$store.commit("addCart",product)

    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      // 1、获取轮播图数据
      const data = res.result;
      this.banners = data.itemInfo.topImages;
      // 2、获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3、创建店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4、取出商品详情信息
      this.detailInfo = data.detailInfo;
      // 5、商品参数
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6、商品评论
      if (data.rate.cRate != 0) {
        this.commentsInfo = data.rate.list[0];
      }
    });
    getRecommond().then(res => {
      this.recommendInfo = res.data.list;
    });
    
  },
  destroyed() {
    this.$bus.$off("imgloadSuccess", this.itemListener);
  }
};
</script>