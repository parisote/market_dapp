<template>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img :src= image class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-4 ">
                <div class="card-body displey:flex ">
                    <div class="flex row">
                        <div class="cell"> <h4><b>{{nombre}}</b></h4></div>
                    </div>
                    <div class="flex row">
                        <div class="card-text cell" style="height: 80px"><small class="text-muted">{{zona}}</small></div>
                    </div> 
                    <div class="flex row">
                        <div class="cell" >desde</div>
                    </div> 
                    <div class="flex row">
                        <div class="cell" ><b>{{price}}</b></div>
                    </div>
                    <div class="flex row">
                        <div class="cell">esta noche</div>
                    </div>                        
                </div>
            </div>
            <div class="col-md-4"> 
                <div>
                    <button type="button" class="btn btn-primary position-absolute top-0 end-0">{{puntaje}}</button>
                </div>
                <div>
                    <button type="button" class="btn btn-dark position-absolute bottom-0 end-0">Leer más</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['nombre','zona','image','price','puntaje'],
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
</style>