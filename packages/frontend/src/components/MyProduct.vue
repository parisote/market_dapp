<template>
   <div class="container-fluid">
     <div class="listContainer">
        <Card
          v-for="item in items"
          :key="item.category"
          :category="item.category"
          :nombre="item.title"
          :descripcion="item.descripcion"
        />
      </div>
    </div>  
</template>

<script>
import Card from "@/components/Card.vue";
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useStore();
    const { address, contract } = storeToRefs(store);
    return {
      store,
      address,
      contract
    };
  },
  data(){
      return { items: [] };
  },
  async mounted(){
    
    const result = await this.contract.getMyPlaces()

    for (let i = 0; i < result.length; i++) {
      this.items.push({
        category: result[i].category,
        title: result[i].title,
        descripcion: result[i].description
      });
    }
    return this.items;
  }
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