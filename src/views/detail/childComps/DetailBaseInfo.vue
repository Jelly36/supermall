
<template>
  <div class="goodInfo">
    <div class="desc">{{goods.title}}</div>
    <div clas="price">
      <span class="basePrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span
        class="discountType"
        :style="{background:goods.discountBgColor}"
      >{{goods.discount}}</span>
    </div>
    <div class="colums">
      <div
        v-for="(item,index) in goods.columns"
        :key="index"
      >{{item}}</div>
    </div>
    <van-cell
      is-link
      @click="showPopup"
    >商品服务</van-cell>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '40%' }"
    >
      <div class="serviceTitle">
        服务
      </div>
      <div class="service">
        <div
          v-for="(item,index) in goods.services"
          :key="index"
        >
          <img
            :src="item.icon"
            alt
          />
          <span>{{item.name}}</span>
        </div>
      </div>
    </van-popup>

  </div>
</template>

<style scoped lang="less">
.goodInfo {
  padding: 10px;
}
.serviceTitle{
  color:var(--color-tint);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top:20px;
  margin-bottom: 20px;
}
.colums{
  display:flex;
  justify-content: space-between;
  padding:16px;
}
.desc {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 20px;
  color: #000;
}
.basePrice {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-tint);
  margin-right: 10px;
}
.oldPrice {
  font-size: 14px;
  text-decoration: line-through;
  color: #666;
  margin-right: 14px;
}
.discountType {
  display: inline-block;
  padding: 2px;
  color: #fff;
  border-radius: 6px;
  margin-bottom: 10px;
}
.price {
  margin-bottom: 16px;
  border-bottom: 2px solid #e6e6e6;
  height: 34px;
  line-height: 34px;
}
.price span {
  display: block;
  float: left;
  height: 100%;
}
.service {
  margin-left:20px;
  div{
      margin-bottom: 20px;
  }
  img {
    display: inline-block;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right:10px;
  }
}
</style>
<script>
import { Popup, Cell } from 'vant';
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    [Popup.name]: Popup,
    [Cell.name]: Cell

  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>