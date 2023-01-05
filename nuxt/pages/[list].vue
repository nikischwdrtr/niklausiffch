<template>
  <div class="lst-container">
    <List />
    <template  v-for="(index, i) in index">
      <section>
        <div class="lst-col" @click="goToLink(index[3].link,index[0].name)">
          <div class="lst-cell">
            <h4>{{getNumbers(index[5]+1)}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{index[0].nameDesc}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{index[1].descDesc}}</h4>
          </div>
          <div class="lst-cell">
            <h4>{{index[2].yearDesc}}</h4>
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
  indexAll.forEach((item, i) => {
    indexAll[i].push(i)
  })
  let index = []
  if (whichJSON == 'portfolio') {
    indexAll.forEach((item, i) => {
      if (item[4].portfolio == '1') {
        index.push(item)
      }
    })
  } else {
    indexAll.forEach((item, i) => {
      if (item[2].year == whichJSON) {
        index.push(item)
      } else if (item[1].desc == whichJSON) {
        index.push(item)
      }
    })
  }
  function goToLink(link,linkName) {
    if (link == '0') {
      void(0)
    } else if (link == '1') {
      window.location.href = '/portfolio/'+linkName
    } else if (link == '2') {
      window.location.href = '/work/'+linkName
    } else if (link == '3') {
      window.open(linkName, '_blank', 'noreferrer')
    } else if (link == '4') {
      window.location.href = linkName
    }
  }
  function getNumbers(num) {
    let s = ''
    let numS = num.toString()
    if (numS.length <= 1) {
      s = '00' + numS
    } else if (numS.length <= 2) {
      s = '0' + numS
    } else {
      s = numS
    }
    return s
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
