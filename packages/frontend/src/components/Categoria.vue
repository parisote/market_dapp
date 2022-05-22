<template>
    <div class="col-sm-4">
      <div class="card">
        <img
          id="image-muestra"
          class="card-img-top"
          :src= image
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">
            {{description}}            
          </p>
          <a href="#" class="btn btn-primary">Ver estacionamientos</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['title','description','image'],
  name: "Categoria"
};
</script>
