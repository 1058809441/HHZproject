import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlist: [11, 22],
    count: 100,

    allProduct:[],
    Product1:[],
    Product2:[],

    // 登陆成功后将用户信息保存到仓库
    userData: {},
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
      if (state.shoppingCar[index].productCount > 1) {
        // state.shoppingCar[index].productCount -= 1

        var newArr = [...state.shoppingCar]
        newArr[index].productCount -= 1
        state.shoppingCar=newArr
        return
      }
    },
    addCount(state, index) {
      state.shoppingCar[index].productCount += 1
      return
    },
    delShop(state, index) {
      state.shoppingCar.splice(index, 1)
      return
    },
    emptyCart(state) {
      state.shoppingCar = []
      return
    },
    addToShoppingCar(state,a){
      state.shoppingCar.push(a);
      window.console.log(a);
      return
    }
  }
})