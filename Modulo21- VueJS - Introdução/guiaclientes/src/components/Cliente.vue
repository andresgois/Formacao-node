<template>
  <div>
    <h2>Nome Cliente: {{nome}}</h2>
    <hr>
    <p>Descrção: {{descricao}}</p>
    <hr>

    <input type="text" :value="nome">
    <br>
    <input type="text" :value="descricao">
    <hr>
    <input type="text" v-model="nome">
    <br>
    <input type="text" v-model="descricao">
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  data(){
    return{
      nome: "Andre",
      descricao: "Lorem ipsum dolor"
    }
  }
}
</script>


<!-- STYLE -->
<style scoped>
  h2{
    color: 00ff80;
    background-color: rgb(221, 203, 225);
  }
  p{
    letter-spacing: 1cm;
  }
</style>