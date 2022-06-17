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
          v-for="item in items"
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
      <!--<div class="listContainer">
        <Card
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :nombre="item.title"
          :price="item.price"
          :puntaje="item.puntaje"
          :descripcion="item.descripcion"
          :image="item.image"
          :cantDisponible="item.cantDisponible"
        />-->
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
    const { address, contract } = storeToRefs(store);
    const { addAddress, setContract } = store;
    return {
      store,
      address,
      contract,
      addAddress,
      setContract,
    };
  },
  data() {
    return { items: [] };
  },
  async created() {    
    const result = await this.contract.getPlacesByCategory(this.$route.params.index);
    for (let i = 0; i < result.length; i++) {
      this.items.push({
        id: result[i].id,
        index: result[i].index,
        category: result[i].category,
        title: result[i].title,
        price: ethers.utils.formatEther(result[i].price, "ethers"),
        puntaje: 9,
        image: path + result[i].image,
        descripcion: result[i].description,
        cantDisponible: result[i].size
      });
    }
    return this.items;
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