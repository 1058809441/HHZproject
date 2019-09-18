import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlist: []
  },
  mutations: {
    clearWishList(state){
      state.wishlist = [];
    }
  }
})