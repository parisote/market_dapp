<template>
    <!--<div class="col-sm-4">
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
          <a :href="reservar" class="btn btn-primary">Reservar {{title}}</a>
        </div>
      </div>
    </div>-->
<div class="col-sm-4">
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src=image alt="Imagen">
    </figure>
  </div>

  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{title}}</p>
        <p class="subtitle is-6">{{description}} </p>
      </div>
    </div>

    <div class="content">
      <button type="button" class="button is-primary" @click="toCategory">
            Reservar {{ title }}
      </button>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  props: ['id','title','description','image'],
  name: "Categoria",
  methods: {
    toCategory() {
      this.$router.push({ path: '/Layout/' + this.id + '/' + this.title })
    }
  }
};
</script>
