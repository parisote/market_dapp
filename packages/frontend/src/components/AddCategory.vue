<template>
  <div class="col-md-4 mx-auto">
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1 class="title">Agregar nueva categoria</h1>
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" >Nombre</label>
        <input class="form-control" type="text" v-model="category.nombre" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" >Descripcion</label>
        <input class="form-control" type="text" v-model="category.description" />
      </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" >Imagen</label>
        <input class="form-control" type="text" v-model="category.image" />
      </div>
      <button class="btn btn-primary" v-on:click="createCategory"> Enviar</button>
    </form>
  </div>
</template>

<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { ethers } from "ethers";
import { toast } from 'bulma-toast'

export default {
  name: "AddCategory",
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
     lista: [],
     category: { nombre:"", image:"" },
     mensajeError: "", 
    };
  },
  methods:{
    async createCategory(){
    try{
      await this.contract.newCategory(this.category.nombre, this.category.description, this.category.image, { gasLimit: 3000000 });
    } catch(error){
        let msg = error;
        toast({
          message: msg,
          type: "is-danger",
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: "bottom-right"
        })
      }
  }
  }
}; 
</script>