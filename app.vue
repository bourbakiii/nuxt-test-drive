<template>
  <NuxtLayout/>
  <div class="btn-group">
    <!-- <NuxtPage /> -->
    <div class="btn btn-success">Success</div>
    <div class="btn btn-danger">Danger</div>
    <div class="btn btn-warning">Warning</div>
  </div>
</template>

<script setup>

const runtime = useRuntimeConfig();
console.log(runtime);
</script>
