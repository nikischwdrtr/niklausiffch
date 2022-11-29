<template>
  <div class="index-container">
    <NI />
    <template  v-for="(index, i) in index">
      <section>
        <div class="index-col" @click="goToLink(index.link,index.href)">
          <div class="index-cell">
            <h4>{{index.id}}</h4>
          </div>
          <div class="index-cell">
            <h4>{{index.name}}</h4>
          </div>
          <div class="index-cell">
            <h4>{{index.desc}}</h4>
          </div>
          <div class="index-cell">
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
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/data/index.json')
  const index = JSON.parse(indexP.value)
  function goToLink(link,href) {
    if (href == 'blank') {
      window.open(link, '_blank', 'noreferrer')
    } else if (href == 'mail') {
      window.location.href = "mailto:admin@niklausiff.ch";
    } else {
      window.location.href = link
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
