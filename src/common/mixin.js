import {debouce} from "./utils"
import BackTop from "@/components/contents/backtop/BackTop";
export const itemListener={
    data(){
        return{
            itemListener:null
        }
    },
    mounted() {
        const refresh=debouce(this.$refs.scroll.refresh,500);
        this.itemListener=()=>{
          refresh()
        }
        this.$bus.$on('imgloadSuccess',this.itemListener)
        console.log("okok")
    },
}
export const backTopMixin={
    data(){
        return{
            isShowBackUp:false,
        }
    },
    methods: {
        backTop(){
            this.$refs.scroll.scrollTo(0,0);
          },
    },
    components:{
        BackTop
    },

}