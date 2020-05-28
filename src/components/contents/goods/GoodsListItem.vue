<!--  -->
<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="showImg" alt @load="imgload" />
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price left">{{goodsItem.price}}</span>
      <div class="left">
        <img src="~assets/imgs/common/collect.svg" alt class="left" />
        <span class="collect left">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  computed:{
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  components: {},
  methods: {
    imgload() {
      this.$bus.$emit("imgloadSuccess");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>
<style lang='less' scoped>
.goodsItem {
  padding-top: 40px;
  position: relative;
  width: 48%;
}
.goodsItem img {
  width: 100%;
  border-radius: 5px;
}
.goodsInfo {
  font-size: 12px;
  position: absolute;
  text-align: center;
  bottom: -26px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-block: 3px;
  }
  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  img {
    display: block;
    width: 10px;
    height: 10px;
  }
  .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    background: url("~assets/imgs/common/collect.svg") 0 0/14px 14px;
  }
}
</style>