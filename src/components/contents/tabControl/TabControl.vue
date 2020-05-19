<template>
  <div class="tab-control">
      <div v-for="(item ,index) in titles" :key="index" class="tab-control-item" :class="{active:index===currentIndex}" @click="pickOptions(index)">
          <span :class="showLine">{{item}}</span>
      </div>
  </div>
</template>

<style scoped>
.tab-control{
    height:40px;
    line-height: 40px;
    display:flex;
    text-align: center;
    font-size:15px;
}
.tab-control-item{
    flex:1;
}
.active{
    color:var(--color-higt-text)
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>
<script>
export default {
    name:"TabControl",
  data() {
    return {
        currentIndex:0
    };
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      pickOptions(index){
          this.currentIndex=index;
      }
  }
};
</script>