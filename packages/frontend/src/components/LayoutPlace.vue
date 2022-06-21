<template>
<div style="display: flex; justify-content: center; margin-top:16px">
  <div class="card card-shadow sizeCard">

    <header class="card-header">
    <p class="card-header-title">
      {{ this.item.price }}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fab fa-ethereum"></i>
      </span>
    </button>
  </header>

    <div class="card-image">
      <figure class="image is-16by9">
        <img :src=this.item.image width="600" height="500" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ this.item.title }}</p>
          <p class="subtitle is-6">{{ this.item.description }}</p>
          <p class="subtitle is-7">{{ this.sizeRent }} lugares libres</p>
        </div>
      </div>
    </div>
      <footer class="card-footer">
      <a @click="rentPlace" class="card-footer-item">Reservar</a>
    </footer>
  </div>
</div>
</template>

<script>
import { useStore } from "../store/store.js";
import { mapState, storeToRefs } from "pinia";
import { ethers } from "ethers";
import { toast } from "bulma-toast"

export default {  
  props: ['id'],
  name: "LayoutPlace",
    setup() {
    const store = useStore();
    const { address, contract, sizeRent } = storeToRefs(store);
    const { addAddress, setContract, setSizeRent } = store;
    return {
      store,
      address,
      contract,
      sizeRent,
      addAddress,
      setContract,
      setSizeRent
    };
  },
  methods:{
    async rentPlace(){
      try{
        await this.contract.rentPlace(this.item.category,this.item.index, { gasLimit: 3000000, value: ethers.utils.parseEther(this.item.price) })
        this.setSizeRent(this.sizeRent-1)
      } catch(error){
        let msg = error.code;
        console.log(error)
        toast({
          message: "Error al rentar lugar",
          type: "is-danger",
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: "bottom-right"
        })
      }
    }  
  },
  data(){
    return {item:{}}
  },
  async created(){
    try{
      const result = await this.contract.getPlaceById(this.$route.params.category,this.$route.params.index)
      this.item.index = result.index
      this.item.category = result.category;
      this.item.title = result.title;
      this.item.description = result.description;
      this.item.price = ethers.utils.formatEther(result.price, "ethers");
      this.item.size = result.size;
      this.item.image = 'https://upcdn.io/'+result.image;

      this.setSizeRent(result.size)
    } catch(error){
      console.log(error)
    }
  }
};
</script>

<style scoped>
.sizeCard{
  height: 550px;
  width: 500px;
}
</style>