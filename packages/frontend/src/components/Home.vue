<template>
  <div>
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1 class="title">Nuestros mejores lugares</h1>
        </div>
      </div>
    </div>
    <div
      class="row"
      style="margin-left: 10px display: flex; justify-content: center; margin-top:16px"
    >
      <Categoria
        v-for="item in this.categories"
        :key="item.index"
        :id="item.index"
        :title="item.name"
        :description="item.description"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Categoria from "@/components/Categoria.vue";
import { useStore } from "../store/store.js";
import { storeToRefs } from "pinia";

export default {
  name: "home",
  components: {
    Categoria,
  },
  setup() {
    const store = useStore();
    const { categories } = storeToRefs(store);
    const { intializeCategories } = store;
    return {
      categories,
      intializeCategories,
    };
  },
  async created() {
    this.intializeCategories();
  },
};
</script>
<style scoped>
.table {
  border-collapse: separate;
  border-spacing: 5px;
}
</style>
