<template>
  <div class="tab-control">
      <div v-for="(item ,index) in titles" :key="index" class="tab-control-item">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<style scoped>
.tab-control{
    height:40px;
    line-height: 40px;
    display:flex;
    text-align: center;
}
.tab-control-item{
    flex:1;
}
</style>
<script>
export default {
    name:"TabControl",
  data() {
    return {};
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>