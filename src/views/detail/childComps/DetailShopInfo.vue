<!--  -->
<template>
  <div class="shopInfo">
    <div class="shopName">
      <img :src="shop.logo" alt class="left" />
      <span class="left">{{shop.name}}</span>
    </div>
    <div class="detaiInfo">
      <div class="shopLeft">
        <div class="sale">
          <div>{{shop.sells}}</div>
          <div>总销量</div>
        </div>
        <div class="QTY">
          <div>{{shop.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shopRight">
        <div v-for="(item,index) in shop.score" :key="index">
          <span class="desc">{{item.name}}</span>
          <span class="score" :class="{'score-better':item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{'better-more':item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="goShop">
      进店逛逛
    </div>
  </div>
</template>

<style scoped lang="less">
.shopInfo {
  padding: 16px;
}
.shopName {
  height: 80px;
  line-height: 80px;
  img {
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 10px 20px 0 0;
    vertical-align: middle;
  }
}
.detaiInfo {
  margin-top: 10px;
  display: flex; 
   height: 100px;
}
.shopLeft {
  display: flex;
  justify-content: space-around;
  flex: 1;
  .sale {
    display: flex;
    flex-direction: column;
  }
  .QTY {
    display: flex;
    flex-direction: column;
  }
}
.shopRight {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.desc {
  margin-right: 2px;
}
.score {
  margin-right: 2px;
  color: #5ea732;
}
.score-better{
  color: #f13e3a;
}
.better {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.better-more{
  background-color: #f13e3a;
}
.goShop{
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: #e6e6e6;
  margin-bottom: 30px;
}
</style>
<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {}
};
</script>