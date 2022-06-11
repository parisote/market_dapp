<template>
    <div class="card text-center">
    <div class="card-header">
      {{$route.params.price}}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ $route.params.nombre }}</h5>
      <p class="card-text">{{ $route.params.zona }}</p>
      <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JFLB5IDXNFFF5AYDTZGDWMJHLA.jpg"/>
      <p/>
      <a @click="rentPlace" class="btn btn-primary">Reservar</a>
    </div>
    <div class="card-footer text-muted">
      {{ $route.params.cantDisponible }} disponibles
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
     // console.log(await this.contract.rentPlace(0,0, { gasLimit: 3000000, value: ethers.utils.parseEther("0.0001") }))
      console.log("aca cargo el lugar a mis reservas")
      //window.alert("Reserva EXITOSA / ERROR en la reserva");
      if (window.confirm("Confirma la reserva?")) {
        //alert("Compruebo si pudo cargar")
        window.open("http://localhost:3000/#/MyProduct", "Thanks for Visiting!");
      } 
    }  
  }
};
</script>