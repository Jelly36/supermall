import Vue from "vue"
import VueX from "vuex"
Vue.use(VueX)
const store=new VueX.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCart(state,payload){
            const oldProduct=state.cartList.find(function(item){
                return payload.iid===item.iid
            })
            if(oldProduct){
                oldProduct.count+=1
            }else{
                payload.count=1;
                state.cartList.push(payload)
            }
        }
    }
})

export default store