<template>
  <div>
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1 class="title">{{ $route.params.Categoria }}</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid row" style="margin-top:16px">
        <Card
          v-for="item in this.places"
          :key="item.id"
          :id="item.id"
          :index="item.index"
          :category="item.category"
          :nombre="item.title"
          :price="item.price"
          :puntaje="item.puntaje"
          :descripcion="item.descripcion"
          :image="item.image"
          :cantDisponible="item.cantDisponible"/>
      </div>
    </div>
</template>

<script>
import Card from "@/components/Card2.vue";
import { useStore } from "../store/store.js";
import { storeToRefs } from "pinia";
import { ethers } from "ethers";

const path = import.meta.env.VITE_IMAGE_PATH

export default {
  name: "Layout",
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const { places } = storeToRefs(store);
    const { initializePlaces } = store;
    return {
      store,
      places,
      initializePlaces
    };
  },
  data() {
    return { items: [] };
  },
  async created() {
    this.initializePlaces(this.$route.params.index)
  },
};
</script>

<style scoped>
.fixCol {
  width: 20%;
  height: 20%;
}
.listContainer {
  columns: 3 400px;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 8px;
}
</style>