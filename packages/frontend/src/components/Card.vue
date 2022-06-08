<template>
<div class="card mb-2" style="width:400px">
        <div class="row">
            <div class="col-md-5" >
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JFLB5IDXNFFF5AYDTZGDWMJHLA.jpg" class="img-fluid rounded-start">
            </div>
            <div class="col-md" style="text-align-left">
                <div class="card-body displey:flex">
                    <div class="flex row">
                        <div class="cell"><b><a class="nav-link" :href="place">{{nombre}}</a></b></div>
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
                        <div><b><small>ETH {{price}}</small></b></div>
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
    props: ['id','nombre','descripcion','image','price','puntaje','cantDisponible'],
    name: "Card",
  computed: {
    place() {
      return "#/LayoutPlace/" + this.id + "/" + 0
    }
  }
};
</script>

<style>
.card {
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    margin-top:10px;
    margin-bottom:10px;
    display: inline-block;
  }
</style>