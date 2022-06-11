<template>
<div class="col-sm-3">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JFLB5IDXNFFF5AYDTZGDWMJHLA.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{nombre}}</h5>
            <p class="card-text">{{descripcion}}</p>
            <p class="card-text">ETH  {{price}}</p>
            <a :href="place" class="btn btn-primary">Reservar</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['id','index','category','nombre','descripcion','image','price','puntaje','cantDisponible'],
    name: "Card",
  computed: {
    place() {
      return "#/LayoutPlace/" + this.index + "/" + this.category
    }
  }
};
</script>

<style>

</style>