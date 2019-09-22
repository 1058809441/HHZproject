import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlist: [11, 22],
    count: 100,

    // 登陆成功后将用户信息保存到仓库
    username: '',
    ifLogin: '',
    shoppingCar: [],
    allMessage: [],
    myMessage: [],

  },
  mutations: {  //修改状态，并且是同步的。在组件中使用$store.commit('',params)。
    clearWishList(state) {
      state.wishlist = [];
    },
    reduceCount(state, index) {
      if(state.shoppingCar[index].productCount>1 ){
        state.shoppingCar[index].productCount -= 1
        return
      }     
    },
    addCount(state, index) {
      state.shoppingCar[index].productCount += 1
      return
    },
    delShop(state, index){
      state.shoppingCar.splice(index,"")
      return
    },
    emptyCart(state){
      state.shoppingCar=[]
      return
    }
  }
})