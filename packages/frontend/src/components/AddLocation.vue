<template>
  <div class="col-md-4 mx-auto">
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1 class="title">Agregar nueva locacion</h1>
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input class="form-control" type="text" v-model="location.nombre" />
      </div>
      <div class="mb-3">
        <label class="form-label">Descripción</label>
        <input class="form-control" type="text" v-model="location.descripcion"/>
      </div>
      <label class="form-label">Precio</label>
      <div class="input-group mb-3" >
        <span class="input-group-text">ETH</span>
        <span class="input-group-text">0.</span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
          v-model="location.precio"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Cantidad Disponible</label>
        <input class="form-control" v-model="location.size" />
      </div>
      <div class="mb-3">
        <label for="disabledSelect" class="form-label">Categoría</label>
        <select id="disabledSelect" class="form-select" v-model="location.category">
          <option v-for="item in this.categories" :value="item.index">{{ item.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" >Imagen</label>
        <input class="form-control" type="file" @change="uploadFile" />
      </div>
      <button id="btnSend" class="btn btn-primary" v-on:click="createLocation" :disabled="this.preImage === ''">Enviar</button>
    </form>
  </div>
</template>

<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { ethers } from "ethers";
import { toast } from 'bulma-toast'
import { Upload } from "upload-js"

let upload = new Upload({apiKey: import.meta.env.VITE_PUBLIC_IMAGE})
let uploadFile = upload.createFileInputHandler({
  onUploaded: ({ fileUrl, fileId }) => {
    const s = useStore()
    const { setPreImage } = s; 
    const p = fileUrl.split('/')[3]
    setPreImage(p)
  }
});

export default {
  name: "AddLocation",
  setup() {
    const store = useStore();
    const { contract, categories, preImage } = storeToRefs(store);
    const { setContract } = store;    
    return {
      store,
      contract,
      categories,
      preImage,
      setContract
    };
  },
   data() {
    return {
     lista: [],
     location: { category: 0, nombre:"",descripcion:"",precio:0, image:"",size:0},
     mensajeError: "", 
    };
  },
  methods:{
    async createLocation(){
    try{
      console.log()
      await this.contract.newPlace(this.location.category,ethers.utils.parseEther("0."+this.location.precio),this.location.size,this.location.nombre,this.location.descripcion,this.preImage, { gasLimit: 3000000, value: ethers.utils.parseEther("0.0001") });
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
    },
    uploadFile
  }
}; 
</script>