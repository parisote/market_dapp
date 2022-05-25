<template>
    <div>
        <div class="container" id="container">
            <div class="row">
              <div class="col-12" style="text-align:center; margin-top:0.5em">
                <h1>{{$route.params.Categoria}}</h1>
              </div>
            </div>
        </div>
       <div class="container-fluid">
        <div class="row row-cols-3 row-cols-md-2 g-1 fixCol">
            <Card v-for="item in items" :key="item.id" :nombre="item.nombre" :price="item.price" :puntaje="item.puntaje" :zona="item.zona" :image="item.image" :cantDisponible="item.cantDisponible"/>
        </div>
    </div>

    </div>

</template>

<script>
  import Card from "@/components/Card.vue";

  export default {
    name: "Layout",
        components: {
        Card
    },
   data() {
        return {items:[{id:0, nombre:"Cochera 1",zona:"Recoleta",price:"12.900",puntaje:"",image:"",cantDisponible:"20"},
        {id:1,nombre:"Cochera 2",zona:"Caballito",price:"",puntaje:"",image:"",cantDisponible:"5"},
        {id:2, nombre:"Cochera 3",zona:"Palermo",price:"12.900",puntaje:"",image:"",cantDisponible:"12"},
        {id:3,nombre:"Cochera 4",zona:"Belgrano",price:"",puntaje:"",image:"",cantDisponible:"15"},
        {id:4, nombre:"Cochera 5",zona:"Lugano",price:"",puntaje:"",image:"",cantDisponible:"19"},
        {id:5,nombre:"Cochera 6",zona:"Retiro",price:"",puntaje:"",image:"",cantDisponible:"25"}
        ]}
   }
  };
</script>

<style scoped>
.fixCol {
  width: 20%;
}
</style>