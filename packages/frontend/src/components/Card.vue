<template>
<div class="container-fluid " id="background-head">
    <h1> Hoteles baratos, habitaciones de lujo y mucho más</h1>
    <h4> Encuentra el lugar en tu lugar por Dapp.com</h4>
</div>
<li v-for="lista in listaLugares" :key="lista.nombre">
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="https://ovacen.com/wp-content/uploads/2014/11/construccion-y-obras-de-oficinas.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-4 ">
                <div class="card-body displey:flex ">
                    <div class="flex row">
                        <div class="cell"> <h4><b>{{lista.nombre}}</b></h4></div>
                    </div>
                    <div class="flex row">
                        <div class="card-text cell" style="height: 80px"><small class="text-muted">{{lista.zona}}</small></div>
                    </div> 
                    <div class="flex row">
                        <div class="cell" >desde</div>
                    </div> 
                    <div class="flex row">
                        <div class="cell" ><b> $12.900</b></div>
                    </div>
                    <div class="flex row">
                        <div class="cell">esta noche</div>
                    </div>                        
                </div>
            </div>
            <div class="col-md-4"> 
                <div>
                    <button type="button" class="btn btn-primary position-absolute top-0 end-0">9.5</button>
                </div>
                <div>
                    <button type="button" class="btn btn-dark position-absolute bottom-0 end-0">Leer más</button>
                </div>
            </div>
        </div>
    </div>
</li>

{{ mensajeError }}
</template>


<script>
import lugarServices from '../../services/lugaresServices.js';

export default {
    data() {
    return {
      lista: [],
      lugar: { nombre: "", zona: "" },
      mensajeError: "",
    };
  },
  created: async function () {
    try {
      const rta = await lugarServices.getLugares(); // ejemplo placeHolder.getDatos()
      this.lista = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  },
};
</script>

<style>
/* Backgrounds */
#background-head {
  background: #adb5bd;
}
/*Cambio de tamaño a los container*/

.container-fluid {
  height: 200px;
}
</style>