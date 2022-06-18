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
        <label for="inputNombre" class="form-label" >Nombre</label>
        <input class="form-control" type="text" v-model="category.nombre" />
      </div>
      <div class="mb-3">
        <label for="inputDescription" class="form-label" >Descripcion</label>
        <input class="form-control" type="text" v-model="category.description" />
      </div>
      <div class="mb-3">
        <label for="inputImage" class="form-label" >Imagen</label>
        <input class="form-control" type="file" @change="uploadFile" />
      </div>
      <button class="btn btn-primary" v-on:click="createCategory" :disabled="this.preImage === ''"> Enviar</button>
    </form>
  </div>
</template>

<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
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
  name: "AddCategory",
  setup() {
    const store = useStore();
    const { contract, preImage } = storeToRefs(store);
    const { setContract } = store;    
    return {
      store,
      contract,
      preImage,
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
      await this.contract.newCategory(this.category.nombre, this.category.description, this.preImage, { gasLimit: 3000000 });
    }catch(error){
        let msg = error.code;
        toast({
          message: "Error al intentar cargar la categoria",
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