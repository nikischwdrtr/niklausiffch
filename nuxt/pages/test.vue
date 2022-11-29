<template>
  <div class="index-container">
    <NI />
    <p>{{index}}</p>
    <Footer />
  </div>
</template>

<script setup>
  const index = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/data/index.json')
</script>

<style lang="scss">
.index-col {
  display: grid;
  grid-template-columns: 7% 40% 30% 20%;
}
@media (max-width: 600px) {
  .index-col {
    grid-template-columns: 10% 35% 35% 20%;
  } 
}
</style>
