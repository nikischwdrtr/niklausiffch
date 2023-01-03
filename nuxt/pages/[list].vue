<template>
  <div class="lst-container">
    <List />
    <template  v-for="(hallo, fuck) in index">
      <section>
        <div class="lst-col" @click="goToLink(index.link)">
          <div class="lst-cell">
            <h4>{{fuck}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{hallo[0].nameDesc}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{hallo[1].descDesc}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{hallo[2].yearDesc}}</h4>
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
  const whichJSON = currentPath.slice(1)
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const indexAll = await JSON.parse(indexP.value)
  let whichData = []
  let index = []
  if (whichJSON == 'portfolio') {
    indexAll.forEach((item, index) => {
      if (item[4].portfolio == '1') {
        whichData[index-1] = index
      }
    })
    whichData.forEach((item, i) => {
      index.push(indexAll[whichData[i]])
    })



  } else {
    indexAll.forEach((item, i) => {
      if (item[2].year == whichJSON) {
        whichData[i] = i
        index.push(item)
      }
    })
  }
</script>

<style lang="scss">
.lst-col {
  display: grid;
  grid-template-columns: 7% 40% 30% 20%;
}
.lst-col1 {
  top: 0;
  left: 0;
  width: 98%;
  position: fixed;
  display: grid;
  grid-template-columns: 7% 93%;
  z-index: 10;
}
@media (max-width: 600px) {
  .lst-col {
    grid-template-columns: 10% 35% 35% 20%;
  } 
}
</style>
