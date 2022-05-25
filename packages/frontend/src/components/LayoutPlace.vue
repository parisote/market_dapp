<template>
    <div class="col-sm-4">
        <h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>
export default {
  props: ['id'],
  name: "LayoutPlace"
};
</script>