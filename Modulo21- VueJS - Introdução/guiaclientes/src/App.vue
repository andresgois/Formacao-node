<template>
  <div id="app">
    <Cliente />
    <Produto />
  </div>
</template>

<script>
import Cliente from './components/Cliente.vue'
import Produto from './components/Produto.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Cliente,
    Produto
  }
}
</script>

<style>
#app {
}
</style>

