<template>
  <forms>
    <div class="m-4">
      <div class="field">
        <label class="label">Descricao</label>
        <div class="control">
          <input class="input" type="text" placeholder="Descricao">
        </div>
      </div>
      <div class="field">
        <label class="label">Valor</label>
        <div class="control">
          <input class="input" type="number" placeholder="Valor" step="0.01">
        </div>
      </div>
      <div class="field">
        <label class="label">Data</label>
        <div class="control">
          <input class="input" type="Digite sua data">
        </div>
      </div>
      <div class="control">
        <label class="radio">
          <input type="radio" name="tipo">
          Receita
        </label>
        <label class="radio">
          <input type="radio" name="tipo" checked>
          Despesa
        </label>
      </div>
    <input type="submit" value=" + adicionar" class="button is-info is-fullwidth ">  
    </div>
    
  </forms>
</template>

<script>
export default {

}
</script>

<style>

</style>