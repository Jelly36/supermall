<!--  -->
<template>
  <div id="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="wrapRecommend">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
#recommend{
  display:flex;
  border-bottom: 8px solid #eee;
}
  .wrapRecommend{
    text-align: center;
    flex:1;
    padding:10px 0 30px 0;
    img{
        width:70px;
      height:70px;
    }
    div{
      margin-top:8px;
    }
  }
</style>
<script>
export default {
  name: "HomeRecommends",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>