<template>
  <div>
    <h3>Produto</h3>
    <hr>
    <form action="">
      <label for="">Produto</label>
      <input type="text" id="prod" placeholder="Produtos">
      <br>
      <label for="">Preço</label>
      <input type="text" id="preco" placeholder="Preco">
      <br>
      <button>Enviar</button>
      <hr>
      Produto: {{nome}} - Preço: R$ {{preco}}
      <br>
      Produto:
      <p>{{produto.nome}} -  Preço: R$ 
        <strong v-if="mostraPreco === true">{{produto.preco}}</strong> 
        <strong v-else>Abaixo da média</strong>
      </p>


    </form>
  </div>
</template>

<script>
export default {
  props:{
    nome: String,
    preco: Number,
    produto: Object,
    mostraPreco: Boolean
  }
}
</script>


<style scoped>
  form{
    background-color: rgb(115, 233, 129);
  }
</style>