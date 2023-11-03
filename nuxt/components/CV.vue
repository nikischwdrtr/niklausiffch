<template>
  <div class="CV-container">
    <h3>>education</h3>
    <div>
      <h3 v-for="(txt,i) in dataArr[1]">{{txt}};&nbsp;</h3>
    </div>
    <h3>>exhibition</h3>
    <div>
      <h3 v-for="(txt,i) in dataArr[2]">{{txt}};&nbsp;</h3>
    </div>
  </div>
</template>

<script setup>
  const { data } = await useAsyncData('data', () => queryContent('/data').findOne())
  const dataArr = []
  data.value.body.forEach((item, i) => {
    dataArr.push(item)
  })
</script>

<style lang="scss">
.CV-container {
  display: grid;
  width: 100%;
  grid-template: auto / 165px 1fr;
}
@media (max-width: 600px) {
}
</style>