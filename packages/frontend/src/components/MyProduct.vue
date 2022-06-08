<template>
  <div>
    <h1 style="text-align: center"><b>Bienvenido a tus reservas!!</b></h1>
  </div>
  <div class='row todoElAncho'>
    <CardReservas 
      v-for="item in items"
          :key="item.id"  
          :title="item.title"
          :descripcion="item.descripcion"
    />
  </div>
</template>

<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import CardReservas from "@/components/CardMisReservas.vue";
import { ethers } from "ethers";

export default {
  components: {
    CardReservas,
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
  data(){
      return {
        address: this.address,
        items: [], 
      };
  },
  async mounted(){
    console.log(this.address)
    console.log(this.contract)
//    console.log(items = await this.contract.getMyPlaces())

    const result = await this.contract.getMyPlaces();

  for (let i = 0; i < result.length; i++) {
      this.items.push({
        title: result[i].title,
        descripcion: result[i].description,
      });
    } 
      console.log(result[0].title)
  },

};
</script>
<style>
.todoElAncho{
  margin-right: 100px;
  margin-left: 100px;
}
</style>