import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    titNavbar:'NYSL',
    titFooter:'NorthSide Youth Soccer League',
    facebook:'https://web.facebook.com/NorthSideYouthSoccerLeague/?_rdc=1&_rdr',
    instagram:'https://www.instagram.com/northsidesoccerindy/',
    youtube:'https://www.youtube.com/watch?app=desktop&v=dQw4w9WgXcQ&list=PLJmvyRGClNKiEWKe-lJdfNxImgefHCfQJ&index=2',
    twitter:'https://twitter.com/northside_fc',
    moments:"The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and previous league members."
  },
  getters: {
    user(state){
      return state.user
    },
    titNavbar(state){
      return state.titNavbar
    },
    titFooter(state){
      return state.titFooter
    },
    facebook(state){
      return state.facebook
    },
    instagram(state){
      return state.instagram
    },
    youtube(state){
      return state.youtube
    },
    twitter(state){
      return state.twitter
    },
    moments(state){
      return state.moments
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});