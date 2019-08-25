<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                    <pre>
           ███▄    █  ▄▄▄      ▒███████▒  ▄████  █    ██  ██▓    
           ██ ▀█   █ ▒████▄    ▒ ▒ ▒ ▄▀░ ██▒ ▀█▒ ██  ▓██▒▓██▒    
          ▓██  ▀█ ██▒▒██  ▀█▄  ░ ▒ ▄▀▒░ ▒██░▄▄▄░▓██  ▒██░▒██░   
          ▓██▒  ▐▌██▒░██▄▄▄▄██   ▄▀▒   ░░▓█  ██▓▓▓█  ░██░▒██░    
          ▒██░   ▓██░ ▓█   ▓██▒▒███████▒░▒▓███▀▒▒▒█████▓ ░██████▒
          ░ ▒░   ▒ ▒  ▒▒   ▓▒█░░▒▒ ▓░▒░▒ ░▒   ▒ ░▒▓▒ ▒ ▒ ░ ▒░▓  ░
          ░ ░░   ░ ▒░  ▒   ▒▒ ░░░▒ ▒ ░ ▒  ░   ░ ░░▒░ ░ ░ ░ ░ ▒  ░
          ░   ░ ░   ░   ▒   ░ ░ ░ ░ ░░ ░   ░  ░░░ ░ ░   ░ ░   
              ░       ░  ░  ░ ░          ░    ░         ░  ░
					</pre>
					<h3>
						An ephemeral Atlantis-enabled fucking Proof-of-Work testnet for 
						Ethereum Classic and powered by the Whiteblock platform.
					</h3>
            </div><br><hr><br>
            <div class="row" v-for="currency in info" :key="currency.code">
            <div class="row">
                <div class="col-sm-4">
                   {{ currency.code }} 
                </div>
                <div class="col-sm-4">
                   <span v-html="currency.symbol"></span>
                </div>
                <div class="col-sm-4">
                    {{ currency.rate_float }}
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Jumbotron',
  data () {
    return {
      info: '' 
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  },
  filters: {
  currencydecimal (value) {
    return value.toFixed(2)
  }
},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Yantramanav&display=swap");
@import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");

.jumbotron {
    background-color: #33ff99 !important;
    font-family: 'Yantramanav', sans-serif;
    color: black;
}

.btn-connect {
    background-color: black !important;
    color: #33ff99 !important;
    margin-bottom: 15px;
}

.card {
    font-family: 'Inconsolata', monospace;
    color: #33ff99 !important;
    background-color: black !important;
}

.endpoint-link {
    color: red;
}
</style>
