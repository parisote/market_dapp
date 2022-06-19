<template>
   <div class="col-md-4 mx-auto">
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1 class="title">Login</h1>
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
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Imagen</label>
        <input type="file" class="form-control" @change="uploadFile"/>
      </div>
       <button type="submit" class="btn btn-success" @click="linkedPerson" :disabled="this.preImage === ''">Login</button>
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
     name: "Login",
  setup() {
    const store = useStore();
    const { contract, preImage, up } = storeToRefs(store);
    const { setContract,  } = store;    
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
     user: { nombre:"",apellido:"",email:"",image:"" },
     mensajeError: "", 
    };
  },
  methods:{
    async linkedPerson(){
      try{
        await this.contract.linkedPerson(this.user.nombre, this.user.apellido, this.user.email, this.preImage, { gasLimit: 3000000 })
      } catch(error){
        let msg = error.code;
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
