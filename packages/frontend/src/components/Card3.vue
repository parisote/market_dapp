<template>
<div class="col-sm-3">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src=image alt="Imagen">
        <div class="card-body">
            <h5 class="card-title bold">{{nombre}}</h5>
            <p class="card-text">{{descripcion}}</p>
            <div class="columns is-gapless">
            <div class="column">
              <i class="fab fa-ethereum"></i> {{price}}
            </div>
            </div>
            <!--<a :href="place" class="btn btn-primary">Reservar</a>-->
            <button type="button" class="button is-primary" v-if="this.address !== ''" @click="toPlace">
              Reservar {{ title }}
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { useStore } from "../store/store.js";
import { mapState, storeToRefs } from "pinia";
export default {
    props: ['id','index','category','nombre','descripcion','image','price','puntaje','cantDisponible'],
    name: "Card",
        setup() {
    const store = useStore();
    const { address } = storeToRefs(store);
    return {
      store,
      address
    };
  },
    methods: {
      toPlace() {
        this.$router.push({ path: '/LayoutPlace/' + this.index + '/' + this.category })
      }
    }
};
</script>

<style>

</style>