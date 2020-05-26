<!--  -->
<template>
  <div class="goods">
      <GoodsListItem v-for='(item,index) in goods' :key="index" :goodsItem="item"/>
  </div>
</template>
 
<script>
import GoodsListItem from "@/components/contents/goods/GoodsListItem";
export default {
name:"GoodsList",
  data () {
    return {
    };
  },
  props:{
      goods:{
          type:Array,
          default(){
              return [];
          }
      }
  },
created(){
    // console.log(this.goods);
},
  components: {
      GoodsListItem
  },

}

</script>
<style lang='less' scoped>
.goods{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding:2px;
}
</style>