<!--  -->
<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="content" ref="scroll">
    <DetailSwiper class="swiper" :ban="banners"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailParamsInfo :paramsInfo='paramsInfo'></DetailParamsInfo>
    <DetailCommentsInfo :commentsInfo="commentsInfo"></DetailCommentsInfo>
    <GoodsList :goods="recommendInfo"></GoodsList>
    </Scroll>
  </div>
</template>

<style scoped>
.swiper {
  margin-top: 44px;
}
#detail{
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
</style>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailParamsInfo from  "./childComps/DetailParamsInfo";
import DetailCommentsInfo from  "./childComps/DetailCommentsInfo";
import GoodsList from  "@/components/contents/goods/GoodsList"

import Scroll from "@/components/common/scroll/Scroll"
import { getDetail,Shop,Goods,GoodsParam,getRecommond} from "network/detail.js";
import {debouce} from "common/utils"
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      banners: null,
      goods: {},
      shop: {},
      paramsInfo:{},  
      detailInfo:{},
      commentsInfo:{},
      recommendInfo:[]
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
    Scroll,

  },
  methods: {
  },
  created() {
    this.iid = this.$route.params.iid;
      
    getDetail(this.iid).then(res => {
      // 1、获取轮播图数据
      const data = res.result;
        console.log(data)
      this.banners = data.itemInfo.topImages;
      // 2、获取商品信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      // 3、创建店铺信息
      this.shop=new Shop(data.shopInfo);
      // 4、取出商品详情信息
      this.detailInfo=data.detailInfo
      // 5、商品参数
      this.paramsInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // 6、商品评论
      if(data.rate.cRate!=0){
        this.commentsInfo=data.rate.list[0];
        console.log(this.commentsInfo)
      } 
    });
    getRecommond().then(res=>{
      this.recommendInfo=res.data.list;
      console.log(res.data.list)
    })
  },
  mounted(){
    const refresh=debouce(this.$refs.scroll.refresh,500);
     this.itemListener=()=>{
      refresh()
    }
    this.$bus.$on('imgloadSuccess',this.itemListener)
  }
};
</script>