<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">  
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size:14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-bottom: 3px;
  vertical-align: middle;
}
</style>
<script>
export default {
  name: "TabBarItem",
  data() {
    return {
    };
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"#FF4466"
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(err=>{
        console.log(err);
      })
    }
  }
};
</script>