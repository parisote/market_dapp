<template>
    <div class="card" style="width:100%">
      <div class="row">
        <div class="col-md-4">
          <img src="data:image/png;base64,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" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body position-relative" ><a class="nav-link" :href="place">{{nombre}}</a>
            <h5 class="card-title" ><a class= "nav-link" :href="backToPlace" >{{title}}</a></h5>
            <h6 class="card-text">{{descripcion}}</h6>
          </div>
          <div>
              <button type="button" class="btn btn-danger position-absolute bottom-20 end-0" @click='quitarReserva'>Eliminar Reserva</button>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
export default {
    props: ['id','title','descripcion'],
    name: "CardMisReservas",
    computed:{
        backToPlace(){
            return "#/LayoutPlace/"+ this.id + "/Cocheras/" + this.nombre +'/'+ this.descripcion +"/"+ this.price +"/"+ this.puntaje +"/"+ this.cantDisponible
        }
    },
};
</script>

<style>

</style>