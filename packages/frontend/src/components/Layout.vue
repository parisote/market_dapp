<template>
  <div>
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1>{{ $route.params.Categoria }}</h1>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="listContainer">
        <Card
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :nombre="item.title"
          :price="item.price"
          :puntaje="item.puntaje"
          :zona="item.image"
          :image="item.zona"
          :cantDisponible="item.cantDisponible"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { useStore } from "../store/store.js";
import { storeToRefs } from "pinia";
import { ethers } from "ethers";

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
    const result = await this.contract.getPlacesByCategory(1);
    for (let i = 0; i < result.length; i++) {
      this.items.push({
        id: result[i][0],
        title: result[i][4],
        price: ethers.utils.formatEther(result[i][2], "ethers"),
        puntaje: 0,
        image: "",
        zona: result[i][5],
        cantDisponible: result[i][1],
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