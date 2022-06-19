<template>
  <div>
    <h1 class="title" style="text-align: center">Bienvenido a tus reservas!!</h1>
  </div>
  <div class='row todoElAncho'>
    <CardMisReservas 
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
import CardMisReservas from "@/components/CardMisReservas.vue";

export default {
  components: {
    CardMisReservas,
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
  async created(){
    const result = await this.contract.getMyPlaces();

    for (let i = 0; i < result.length; i++) {
        this.items.push({
          title: result[i].title,
          descripcion: result[i].description,
        });
      } 
  },

};
</script>
<style>
.todoElAncho{
  margin-right: 100px;
  margin-left: 100px;

}
</style>