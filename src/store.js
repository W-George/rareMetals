import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carData:[],
    carNum:0,
    userinfo:null
  },
  mutations: {
    signin(state,data){
      state.userinfo = data
      state.carData = JSON.parse(localStorage.getItem(data)) || []
    },
    logout(state){
      localStorage.setItem(state.userinfo,JSON.stringify(state.carData))
      state.userinfo = null
      state.carData = []
      state.carnum = 0
    },
    updata(state, data) {
      var bStop = true
      var num = 0
      if (state.carData.length === 0 ) {
        num += 1
        state.carData.push(data)
      }else{
        state.carData.map(item =>{
          if (item.name === data.name) {
            item.num ++
            bStop = false
          }
          num += item.num
        })
        if (bStop) {
          state.carData.push(data)
          num += 1
        }
      }
      state.carNum = num
    },
    reduceShop(state,data){
      let num  = 0
      state.carData.map(item =>{
        if (item.name === data.name) {
          item.num --
        }
        num += item.num
      })
      state.carNum = num
    },
    deletShop(state,data){
      let num  = 0
      state.carData.map((item,key) =>{
        if (item.name === data.name) {
          state.carData.splice(key,1)
        }else{
          num += item.num
        }
      })
      state.carNum = num
    }
  }
})