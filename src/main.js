import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyBl9brhnRbo69JLng4zQx6X4DlcKQRH0mk",
  authDomain: "e1m4t3.firebaseapp.com",
  projectId: "e1m4t3",
  storageBucket: "e1m4t3.appspot.com",
  messagingSenderId: "933850328843",
  appId: "1:933850328843:web:74b8b0099a46dfe5d77c0e",
  measurementId: "G-NS7Y6HG7TQ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();