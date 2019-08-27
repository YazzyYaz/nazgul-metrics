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
            <div class="row">
                <h3>Total Blocks: {{ blocksCount }}</h3>
            </div>
            <div class="row">
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Metric</th>
                      <th scope="col">Max</th>
                      <th scope="col">Mean</th>
                      <th scope="col">Standard Deviation</th>
                    </tr>
                  </thead>
                  <tbody v-for="metric in info" :key="metric.stat">
                    <tr>
                      <th scope="row">{{ metric.stat }}</th>
                      <td>{{ metric.max }}</td>
                      <td>{{ Math.round(metric.mean * 100) / 100 }}</td>
                      <td>{{ Math.round(metric.standardDeviation * 100) / 100 }}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

export default {
  name: 'Jumbotron',
  data () {
    return {
     info: [],
     blocksCount: '', 
    }
  },
  mounted () {
    this.$JsonRpcVueClient.request('all_stats', {})
        .then((response) => {
            console.warn(response);
            this.blocksCount = response.blocks;
            this.blockTime = response.blockTime;
            this.blockTime['stat'] = 'Block Time';
            this.difficulty = response.difficulty;
            this.difficulty['stat'] = 'Difficulty';
            this.gasLimit = response.gasLimit;
            this.gasLimit['stat'] = 'Gas Limit';
            this.gasUsed = response.gasUsed;
            this.gasUsed['stat'] = 'Gas Used';
            this.totalDifficulty = response.totalDifficulty;
            this.totalDifficulty['stat'] = 'Total Difficulty';
            this.tps = response.tps;
            this.tps['stat'] = 'Transactions Per Second';
            this.transactionPerBlock = response.transactionPerBlock;
            this.transactionPerBlock['stat'] = 'Transactions Per Block';
            this.uncleCount = response.uncleCount;
            this.uncleCount['stat'] = 'Uncle Count';
            this.info = [];
            this.info.push(this.blockTime, this.difficulty, this.gasLimit, this.gasUsed, this.totalDifficulty, this.tps, this.transactionPerBlock, this.uncleCount);
        })
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
    background-color: #e06e5c !important;
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
