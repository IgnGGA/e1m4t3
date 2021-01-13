import Vue from 'vue'
import App from './App.vue'
import  firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyBOsC1nRpneZ9Zmo_RbNEZaAwu4C2D1POo",
  authDomain: "liga-login.firebaseapp.com",
  projectId: "liga-login",
  storageBucket: "liga-login.appspot.com",
  messagingSenderId: "8566205321",
  appId: "1:8566205321:web:ce5e91c31adda6e3d58f58"
};




// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')