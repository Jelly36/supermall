<!--  -->
<template>
  <div>
    <NavBar>
      <div slot="center" class="nav-center">购物街</div>
    </NavBar>
  </div>
</template>

<style scoped>
.nav-center {
  text-align: center;
  color: #fff;
}
</style>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home"
export default {
  data() {
    return {
      banners:null,
      recommends:null
    };
  },
  components:{
      NavBar
  },
  created(){
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banners=res.banner.list;
      this.recommends=res.recommend.list;
    })
  }
};
</script>