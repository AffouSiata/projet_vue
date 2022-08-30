import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


 
// Vue.prototype.$http=axios;

createApp(App).use(store).use(router).prototype.$http.mount('#app')

// new Vue({
//     render: h => h(App),
//   }).$mount('#app')
 