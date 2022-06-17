<template>
   <div class="col-md-4 mx-auto">
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1>Login</h1>
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
         <label class="col-sm-2 col-form-label">Nombre</label>
         <div class="col-sm-10">
        <input class="form-control" v-model="user.nombre" />
    </div>
      </div>
      <div class="mb-3">
         <label class="col-sm-2 col-form-label">Apellido</label>
         <div class="col-sm-10">
        <input class="form-control" v-model="user.apellido" />
    </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="user.email" />
      </div>
       <button type="submit" class="btn btn-primary" @click="linkedPerson">Login</button>
    </form>
  </div>
</template>  


<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';

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
     lista: [],
     user: { nombre:"",apellido:"",email:"" },
     mensajeError: "", 
    };
  },
  methods:{
    async linkedPerson(){    
    console.log(await this.contract.linkedPerson(this.user.nombre, this.user.apellido, this.user.email) )}
    }
  };
</script>
