import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

import router from './router'
import store from './store'
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'


import Swal from 'sweetalert2'

window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

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




