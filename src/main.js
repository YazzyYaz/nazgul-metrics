/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
var newHeaders = {
  'Authorization': 'Bearer ' + process.env.VUE_APP_WHITEBLOCK_SECRET,
};
library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import JsonRpcVueClient from 'vue-json-rpc-client-fetch-withcredentials'
Vue.use(JsonRpcVueClient, 'https://cors-anywhere.herokuapp.com/' + 'https://wb-etc-testnet.boxes.whiteblock.io:5001/rpc', 'omit', newHeaders);

dom.watch()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
