<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props:{
      probeType:{
          type:Number,
          default:0
      },
      pullUpLoad:{
          type:Boolean,
          default:false
      }
  },

  components: {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
        })
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp',()=>{
        this.$emit("pullUpLoad");
        this.scroll.finishPullUp();
    })
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh(){
      this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll.y;
    }
  }
}

</script>
<style lang='less' scoped>
</style>