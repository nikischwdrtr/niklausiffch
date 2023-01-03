<template>
  <div class="index-container">
    <List />
    <template  v-for="(index, i) in 3">
      <section>
        <div class="index-col" @click="goToPort()">
          <div class="index-cell">
            <h4>000</h4>
          </div>
          <div class="index-cell">
            <h4>portfolio</h4>
          </div>
          <div class="index-cell">
            <h4>last update</h4>
          </div>
          <div class="index-cell">
            <h4>dez 22</h4>
          </div>
        </div>
      </section>
    </template>
    <template  v-for="(index, i) in index">
      <section>
        <div class="index-col">
          <div class="index-cell" @click="goToLink(index[3].link,index[0].name)">
            <h4>{{i}}</h4>
          </div>
          <div class="index-cell" @click="goToLink(index[3].link,index[0].name)">
            <h4>{{index[0].nameDesc}}</h4>
          </div>
          <div class="index-cell" @click="goToListDesc(index[3].link,index[1].desc,index[0].name)">
            <h4>{{index[1].descDesc}}</h4>
          </div>
          <div class="index-cell" @click="goToListYear(index[3].link,index[2].year,index[0].name)">
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
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  const router = useRouter()
  function goToPort() {
    router.push({ path: "/portfolio" })
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
  function goToListDesc(link,desc,linkName) {
    if (link == '3') {
      window.open(linkName, '_blank', 'noreferrer')
    } else if (link == '4') {
      window.location.href = linkName
    } else {
      window.location.href = '/'+desc
    }
  }
  function goToListYear(link,year,linkName) {
    if (link == '3') {
      window.open(linkName, '_blank', 'noreferrer')
    } else if (link == '4') {
      window.location.href = linkName
    } else {
      window.location.href = '/'+year
    }
  }
  function getRandomArray(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  getRandomArray(index)
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
