<template>
    <div>
        <h2>
            ReservApp
        </h2>
        <div>
            <Categoria />
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
    }
  };
</script>