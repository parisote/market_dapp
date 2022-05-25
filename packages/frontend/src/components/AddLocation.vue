<template>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input  class="form-control">
  </div>
  <div class="mb-3">
    <label class="form-label">Zona</label>
    <input class="form-control">
  </div>
    <label class="form-label">Precio</label>
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>
    <div class="mb-3">
    <label class="form-label">Cantidad Disponible</label>
    <input class="form-control">
  </div>
  <div class="mb-3">
      <label for="disabledSelect" class="form-label">Categoría</label>
      <select id="disabledSelect" class="form-select">
        <option>Cochera</option>
         <option>Escritorios Flex</option>
      </select>
    </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
</template>

<script>
export default {
    name:"AddLocation"
};
</script>