<template>
    <div>
        <div class="container" id="container">
            <div class="row">
              <div class="col-12" style="text-align:center; margin-top:0.5em">
                <h1>Nuestros mejores lugares</h1>
              </div>
            </div>
        </div>
        <div class="table">
            <Card v-for="item in items" :key="item.id" :nombre="item.title" :price="item.price" :puntaje="item.puntaje" :zona="item.zone" :image="item.image"/>
        </div>
    </div>

</template>

<script>
  // @ is an alias to /src
  import Card from "@/components/Card.vue";
  export default {
    name: "home",
    components: {
        Card
    },
    data(){
        return {items:[
          {id:0, title:"Cocheras", zone:"Reserve una cochera en alguno de nuestros complejos",price:"12.900",puntaje:"9.5",image:"https://ovacen.com/wp-content/uploads/2014/11/construccion-y-obras-de-oficinas.jpg"}
        ,{id:1, title:"Escritorios Flex",zone:"Reserve un escritorio o puesto de trabajo flexible",price:"10.000",puntaje:"7",image:"https://ovacen.com/wp-content/uploads/2014/11/construccion-y-obras-de-oficinas.jpg"}]}
    }
  };
</script>

<style scoped>
.table {  border-collapse: separate;
  border-spacing:  5px;
}
</style>