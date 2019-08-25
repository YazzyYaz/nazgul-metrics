<template>
  <div id="app" class="container-fluid">
    <Navbar/>
    <Jumbotron/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Jumbotron from './components/Jumbotron.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Jumbotron
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container-fluid {
  margin-top: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

</style>
