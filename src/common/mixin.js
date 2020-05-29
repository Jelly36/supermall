import {debouce} from "./utils"
export default{
    data(){
        return{
            itemListener:null
        }
    },
    mounted() {
        const refresh=debouce(this.$refs.scroll.refresh,500);
        console.log("已经混入")
        this.itemListener=()=>{
          refresh()
        }
        this.$bus.$on('imgloadSuccess',this.itemListener)
    },
}