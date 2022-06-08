<template>
    <div class="card text-center">
    <div class="card-header">
      {{this.item.price}}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ this.item.title }}</h5>
      <p class="card-text">{{ this.item.description }}</p>
      <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JFLB5IDXNFFF5AYDTZGDWMJHLA.jpg"/>
      <p/>
      <a @click="rentPlace" class="btn btn-primary">Reservar</a>
    </div>
    <div class="card-footer text-muted">
      {{ this.item.size }} disponibles
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/store.js";
import { storeToRefs } from "pinia";
import { ethers } from "ethers";

export default {  
  props: ['id'],
  name: "LayoutPlace",
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
    return { place: {} };
  },
  methods:{
    async rentPlace(){
      console.log(await this.contract.rentPlace(this.item.category,this.item.index, { gasLimit: 3000000, value: ethers.utils.parseEther("0.0001") }))
    }  
  },
  data(){
    return {item:{}}
  },
  async mounted(){
    try{
      const result = await this.contract.getPlaceById(this.$route.params.id,this.$route.params.category)
      this.item.index = result.index
      this.item.category = result.category;
      this.item.title = result.title;
      this.item.description = result.description;
      this.item.price = result.price;
      this.item.size = result.size;
      this.item.image = result.image;
    } catch(error){
      console.log(error)
    }
  }
};
</script>