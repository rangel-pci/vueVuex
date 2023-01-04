import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'red'
  },
  getters: {
    counterSquared(state) {
      return state.counter ** 2;
    }
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter+= randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      state.counter-= randomNumber;
    },
    setColorCode(state, colorCode) {
      state.colorCode = colorCode;
    }
  },
  actions: {
    increaseCounter({ commit }) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then(res => {
        commit('increaseCounter', res.data);
      })
    },
    decreaseCounter({ commit }) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then(res => {
        commit('decreaseCounter', res.data);
      })
    },
    setColorCode({ commit }, colorCode) {
      commit('setColorCode', colorCode);
    }
  },
  modules: {
  }
})
