<template>
  <div id="app">
    <Cliente />
    <Produto nome="Rapadura" preco="4.50" />
    <Produto :produto="prod1" :mostraPreco="prod1.preco > 2.0" />
  </div>
</template>

<script>
import Cliente from './components/Cliente.vue'
import Produto from './components/Produto.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      prod1:{
        nome: 'Sabão',
        preco: 5
      }
    }
  },
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

