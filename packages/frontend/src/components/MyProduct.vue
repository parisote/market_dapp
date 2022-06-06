<template>
    <div>
        <h2>
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
    const { address, contract } = storeToRefs(store);
    return {
      store,
      address,
      contract
    };
  },
  data(){
      return this.address;
  },
  async mounted(){
    console.log(this.contract)
    console.log(await this.contract.getMyPlaces())
  }
};
</script>

<style>

</style>