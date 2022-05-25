<template>
  <div class="col-md-4 mx-auto">
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1>Agregar nueva locacion</h1>
        </div>
      </div>
    </div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Zona</label>
        <input class="form-control" />
      </div>
      <label class="form-label">Precio</label>
      <div class="input-group mb-3">
        <span class="input-group-text">ETH</span>
        <span class="input-group-text">0.00</span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Cantidad Disponible</label>
        <input class="form-control" />
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
  </div>
</template>

<script>
export default {
  name: "AddLocation",
};
</script>