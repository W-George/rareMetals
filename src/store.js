import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    updata(state, data) {
      var bStop = true
      if (state.data.length === 0 ) {
        state.data.push(data)
      }else{
        state.data.map(item =>{
          if (item.name === data.name) {
            item.num ++
            bStop = false
          }
        })
        if (bStop) {
          state.data.push(data)
        }
      }
    },
  }
})