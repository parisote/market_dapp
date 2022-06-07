<template>
   <div class="col-md-4 mx-auto">
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1>Login</h1>
        </div>
      </div>
    </div>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
         <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
         <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword">
    </div>
      </div>
       <button type="submit" class="btn btn-primary" @click="createUser">Login</button>
    </form>
  </div>
</template>  

<!--
<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { ethers } from "ethers";

export default {
     name: "Login",
  setup() {
    const store = useStore();
    const { contract } = storeToRefs(store);
    const { setContract } = store;    
    return {
      store,
      contract,
      setContract
    };
  },
  data() {
    return {
     mensajeError: "", 
    };
  },
  methods:{
    async createUser(){    
    console.log(await this.contract.createUser() }))
    },
  created: async function () {
    try {
      const rta = await this.contract.getUser()
      this.lista = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  } 
  };
}
</script>

-->