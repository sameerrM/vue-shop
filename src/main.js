import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

import router from './router'
import store from './store'
import {fb} from './firebase'



Vue.use(VModal)

Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function(user){
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});




