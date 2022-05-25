<template>
<div class="card mb-2" style="width:400px">
        <div class="row">
            <div class="col-md-5" >
            <img :src= image class="img-fluid rounded-start tamanoFoto" alt="...">
            </div>
            <div class="col-md" style="text-align-left">
                <div class="card-body displey:flex">
                    <div class="flex row">
                        <div class="cell"> <b>{{nombre}}</b></div>
                    </div>
                    <div class="flex row">
                        <div class="card-text cell" style="height: 80px"><small class="text-muted">{{zona}}</small></div>
                    </div>              
                </div>
            </div>
            <div class="col-md-4"> 
                <div>
                    <button type="button" class="btn btn-primary position-absolute top-0 end-0">{{puntaje}}</button>
                </div>
                <div class="position-absolute bottom-0 end-0">
                    <div class="flex row">
                        <div><small>desde</small></div>
                    </div> 
                    <div class="flex row">
                        <div><b><small>${{price}}</small></b></div>
                    </div>
                    <div class="flex row">
                        <div><small>el día</small></div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['nombre','zona','image','price','puntaje','cantDisponible'],
    name: "Card"
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

.tamanoFoto{
    width: 150px;
    height: 150px;
}
</style>