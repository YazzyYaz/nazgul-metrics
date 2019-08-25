/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import axios from 'axios';
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { faCoffee} from '@fortawesome/free-solid-svg-icons'
//import { faGithub, faTwitter, faMedium, faDiscord } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

Vue.component('font-awesome-icon', FontAwesomeIcon)

dom.watch()
/*new Vue({
  el: '#app',
  render: h => h(App),
  data () {
    return {
      info: '' 
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
   }
})*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
