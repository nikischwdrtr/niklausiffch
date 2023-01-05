<template>
  <div class="error-container">
    <Error />
    <template  v-for="(index, i) in index">
      <section>
        <div class="error-col">
          <div class="error-cell">
            <h4>{{index.code}}</h4>
          </div>
          <div class="error-cell">
            <h4>{{index.name}}</h4>
          </div>
          <div class="error-cell">
            <h4>{{index.desc}}</h4>
          </div>
          <div class="error-cell">
            <h4>{{index.year}}</h4>
          </div>
        </div>
      </section>
    </template>
    <Footer />
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const route = useRoute()
  let currentPath = route.path
  const whichJSON = currentPath.slice(11)
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const indexAll = await JSON.parse(indexP.value)
  let whichData = 0
  let indexPort = []
  indexAll.forEach((item, i) => {
    indexAll[i].push(i)
  })
  indexAll.forEach((item, i) => {
    if (item[0].name == whichJSON) {
      indexPort.push(item)
    }
  })
  const indexNum = indexPort[0][5]+1
  const index = indexPort[0][4].port
  console.log()
</script>

<style lang="scss">
.error-col {
  display: grid;
  grid-template-columns: 7% 40% 30% 20%;
}
@media (max-width: 600px) {
  .error-col {
    grid-template-columns: 10% 35% 35% 20%;
  } 
}
</style>
