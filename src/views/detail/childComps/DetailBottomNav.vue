<!-- 底部工具栏 -->
<template>
  <div class="menuNav">
      <div class="act1">
        <div>
          <i class="icon service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="act2">
        <div class="addCart">加入购物车</div>
        <div class="buyNow">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBottomNav",
  data () {
    return {
    };
  },

  components: {},

}

</script>
<style lang='less' scoped>
.menuNav{
    display:flex;
    position: absolute;;
    bottom:44px;
    height: 49px;
    left:0;
    right:0;
    background:#fff;
}
.act1{
    flex:1;
    display: flex;
}
.act1>div{
  flex:1;
  display: flex;
  flex-direction: column;
}
.act2{
    flex:1;
    display: flex;
}
.act2>div{
  flex:1;
  color:#fff;
  line-height: 49px;
  text-align:center;
}
.addCart{
  background:yellow;
}
.buyNow{
  background: var(--color-tint);
}
.icon{
  display:block;
  width:22px;
  height: 22px;
  margin:6px auto 3px;
  background: url("~assets/imgs/detail/detail_bottom.png") no-repeat 0 0;
  background-size: 100%;
  font-size:12px;
}
.service{
  background-position: 0 -54px;
}
.shop{
  background-position: 0 -98px;
}
.text{
  text-align: center;
}
</style>