<!--  -->
<template>
  <div>
    <DetailNavBar></DetailNavBar>
    <DetailSwiper class="swiper" :ban="banners"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
  </div>
</template>

<style scoped>
.swiper {
  margin-top: 44px;
}
</style>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import { getDetail,Shop,Goods} from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      banners: null,
      goods: {},
      shop: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  methods: {},
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
      this.shop=new Shop(data.shopInfo)
          
    });
  }
};
</script>