<!--  -->
<template>
  <NavBar class="navbar">
          <div slot="left" class="backTo" @click='backClick'>
              <img src="~assets/imgs/common/back.svg" alt="">
          </div>
          <div slot='center' class="title">
              <div v-for='(item,index) in titles' :key="index" :class='{isActive:index===currentIndex}' @click="pickTitles(index)">{{item}}</div>
          </div>
      </NavBar>
</template>

<style scoped>
.navbar{
    background:#fff;
    border-bottom: 1px solid #e6e6e6;
}
.title{
    display:flex;
}
.title div{
    flex:1;
    color:#333;
    text-align: center;
}
.navbar .isActive{
    color:var(--color-tint);
}
.backTo{
    display:flex;
    justify-content: center;
}
.backTo img{
    margin-top:10px;
   
}
</style>
<script>
import NavBar from "@/components/common/navbar/NavBar"
export default {
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    };
  },
  components:{
      NavBar
  },
  methods:{
      pickTitles(index){
          this.currentIndex=index;
          console.log(index)
      },
      backClick(){
          this.$router.go(-1);
      }
  },
  created() {
    
  }
};
</script>