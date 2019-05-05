import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carData:[],
    carNum:0
  },
  mutations: {
    updata(state, data) {
      var bStop = true
      state.carNum += data.num
      if (state.carData.length === 0 ) {
        state.carData.push(data)
      }else{
        state.carData.map(item =>{
          state.carNum += item.num
          if (item.name === data.name) {
            item.num ++
            bStop = false
          }
        })
        if (bStop) {
          state.carData.push(data)
        }
      }
    },
    reduceShop(state,data){
      state.carNum = 0
      state.carData.map(item =>{
        state.carNum += item.num
        if (item.name === data.name) {
          item.num --
        }
      })
    },
    deletShop(state,data){
      state.carNum = 0
      state.carData.map((item,key) =>{
        if (item.name === data.name) {
          state.carData.splice(key,1)
        }
        state.carNum += item.num
      })
    }
  }
})