<template>
  <div class="col-md-4 mx-auto">
    <div class="container" id="container">
      <div class="row">
        <div class="col-12" style="text-align: center; margin-top: 0.5em">
          <h1>Agregar nueva locacion</h1>
        </div>
      </div>
    </div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" >Nombre</label>
        <input class="form-control" type="text" v-model="location.nombre" />
      </div>
      <div class="mb-3">
        <label class="form-label">Descripción</label>
        <input class="form-control" type="text" v-model="location.descripcion"/>
      </div>
      <label class="form-label">Precio</label>
      <div class="input-group mb-3" >
        <span class="input-group-text">ETH</span>
        <span class="input-group-text">0.00</span>
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
        <select id="disabledSelect" class="form-select">
          <option>Cochera</option>
          <option>Escritorios Flex</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" >Imagen</label>
        <input class="form-control" type="text" v-model="location.image" />
      </div>
      <button type="submit" class="btn btn-primary" @click="createLocation"> Enviar</button>
    </form>
  </div>
</template>

<script>
import { useStore } from '../store/store.js';
import { storeToRefs } from 'pinia';

export default {
  name: "AddLocation",
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
     location: { nombre:"",descripcion:"",precio:0, image:"",size:0},
     mensajeError: "", 
    };
  },
  methods:{
    async createLocation(){
      //https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JFLB5IDXNFFF5AYDTZGDWMJHLA.jpg
     //  await this.contract.newPlace(1,this.location.precio,this.location.size,this.location.nombre,this.location.zona,this.location.image, { gasLimit: 300000, value: ethers.utils.parseEther("0.0001") })
    console.log(1,this.location.precio,this.location.size,this.location.nombre,this.location.descripcion,this.location.image)
    }
  },
  created: async function () {
    try {
      const rta = await this.contract.getCategory()
      this.lista = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  } 
}; 
</script>