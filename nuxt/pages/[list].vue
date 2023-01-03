<template>
  <div class="lst-container">
    <List />
    <!-- <template  v-for="(index, i) in index">
      <section>
        <div class="lst-col" @click="goToLink(index.link)">
          <div class="lst-cell">
            <h4>{{index.id}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{index.name}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{index.desc}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{index.year}}</h4>
          </div>
        </div>
      </section>
    </template> -->
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
  // console.log(whichJSON)
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const indexAll = await JSON.parse(indexP.value)
  let whichData = []
  indexAll.forEach((item, index) => {
    console.log(item)
    if (item == whichJSON) {
      console.log(item)
    }

    // item.forEach((elem, index2) => {
    //   if (elem == whichJSON) {
    //     whichData[i] = i
    //   }
    //   item[index].tags = 
    // })
  })
  // for (let i=0; i<indexAll.length; i++) {
  //   for (let i=0; i<)
  //   if (indexAll[i]. == whichJSON) {
  //     whichData[i] = i
  //   }
  // }
  // const index = indexAll[whichData].port
</script>

<style lang="scss">
.port-col {
  display: grid;
  grid-template-columns: 7% 40% 30% 20%;
}
.port-col1 {
  top: 0;
  left: 0;
  width: 98%;
  position: fixed;
  display: grid;
  grid-template-columns: 7% 93%;
  z-index: 10;
}
@media (max-width: 600px) {
  .port-col {
    grid-template-columns: 10% 35% 35% 20%;
  } 
}
</style>
