<template>
    <div>
        <div class="container" id="container">
            <div class="row">
              <div class="col-12" style="text-align:center; margin-top:0.5em">
                <h1>Nuestros mejores lugares</h1>
              </div>
            </div>
        </div>
        <div class="row">
            <Categoria v-for="item in items" :key="item.id" :title="item.title" :description="item.description" :image="item.image"/>
        </div>
    </div>

</template>

<script>
  // @ is an alias to /src
  import Categoria from "@/components/Categoria.vue";

  export default {
    name: "home",
    components: {
        Categoria
    },
    data(){
        return {items:[{id:0, title:"Cocheras",description:"Reserve una cochera en alguno de nuestros complejos",image:"https://www.infobae.com/new-resizer/ND9m5UFOSJ_YX7Hemnahr4jNnMg=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QQ6QUG64AFE7RAIQQBDH3IEK3U.jpg"}
        ,{id:1, title:"Escritorios Flex",description:"Reserve un escritorio o puesto de trabajo flexible", image:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JFLB5IDXNFFF5AYDTZGDWMJHLA.jpg"}]}
    }
  };
</script>