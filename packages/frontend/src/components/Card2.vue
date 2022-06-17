<template>
<div class="column is-3">
<div class="box">

    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image" alt="image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{nombre}}</p>
          <p class="subtitle is-6"><i class="fab fa-ethereum"></i> {{price}}</p>
        </div>
      </div>
      <div class="content">
        {{descripcion}}
        <br>
        {{cantDisponible}} lugares libres restantes
        <p/>
        <button type="button" class="button is-primary" @click="toPlace">
          Reservar {{ title }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['id','index','category','nombre','descripcion','image','price','puntaje','cantDisponible'],
    name: "Card",
  methods: {
      toPlace() {
        this.$router.push({ path: '/LayoutPlace/' + this.index + '/' + this.category })
      }
  }
};
</script>

<style>
</style>