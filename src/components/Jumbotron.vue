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
                <h3>Total Blocks: {{ info.blocks }}</h3>
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
                  <tbody>
                    <tr>
                      <th scope="row">Block Time</th>
                      <td>{{ info.blockTime.max }}</td>
                      <td>{{ info.blockTime.mean }}</td>
                      <td>{{ info.blockTime.standardDeviation }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Difficulty</th>
                      <td>{{ info.difficulty.max }}</td>
                      <td>{{ info.difficulty.mean }}</td>
                      <td>{{ info.difficulty.standardDeviation }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Gas Limit</th>
                      <td>{{ info.gasLimit.max }}</td>
                      <td>{{ info.gasLimit.mean }}</td>
                      <td>{{ info.gasLimit.standardDeviation }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Gas Used</th>
                      <td>{{ info.gasUsed.max }}</td>
                      <td>{{ info.gasUsed.mean }}</td>
                      <td>{{ info.gasUsed.standardDeviation }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Difficulty</th>
                      <td>{{ info.totalDifficulty.max }}</td>
                      <td>{{ info.totalDifficulty.mean }}</td>
                      <td>{{ info.totalDifficulty.standardDeviation }}</td>
                    </tr>
                    <tr>
                      <th scope="row">TPS</th>
                      <td>{{ info.tps.max }}</td>
                      <td>{{ info.tps.mean }}</td>
                      <td>{{ info.tps.standardDeviation }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Transaction Per Block</th>
                      <td>{{ info.transactionPerBlock.max }}</td>
                      <td>{{ info.transactionPerBlock.mean }}</td>
                      <td>{{ info.transactionPerBlock.standardDeviation }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Uncle Count</th>
                      <td>{{ info.uncleCount.max }}</td>
                      <td>{{ info.uncleCount.mean }}</td>
                      <td>{{ info.uncleCount.standardDeviation }}</td>
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
     info: '' 
    }
  },
  mounted () {
    this.$JsonRpcVueClient.request('all_stats', {})
        .then(response => (this.info = response))
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
