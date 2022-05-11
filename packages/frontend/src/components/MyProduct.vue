<template>
    <div>
        <h2>
            Mis productos
            {{ this.address }}
        </h2>
    </div>
</template>

<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useStore();
    const { address } = storeToRefs(store);
    return {
      store,
      address
    };
  },
  data(){
      return this.address;
  }
};
</script>

<style>

</style>