<template>
  <div class="CV-container">
      <h3>>exhibition</h3>
      <div class="CV-grid-content">
        <template v-for="(txt,i) in dataArr[1]">
          <h3>{{txt[0]}}</h3>
          <h3>{{txt[1]}}</h3>
        </template>
      </div>
      <br>
      <h3>>education</h3>
      <div class="CV-grid-content">
        <template v-for="(txt,i) in dataArr[2]">
          <h3>{{txt[0]}}</h3>
          <h3>{{txt[1]}}</h3>
        </template>
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
  width: 100%;
}
.CV-grid-content {
  display: grid;
  width: 100%;
  grid-template: repeat(100, auto) 1fr / 165px 1fr;
}
@media (max-width: 600px) {
}
</style>