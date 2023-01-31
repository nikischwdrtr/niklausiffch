<template>
  <div class="index-container">
    <List />

    <!-- <Header /> -->


    <div class="index-flex">
      <template  v-for="(index, i) in index">
        <p>portfolio</p>
        <div class="index-flexm">
          <template template v-if="index[4].portfolio === '1'">
            <div>
              <img :src="index[4].port.images[0].link" @click="goToLink(index[0].name)">
            </div>
          </template>
        </div>
      </template>
    </div>


    <!-- <Footer /> -->
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  const router = useRouter()
  const menu = ['portfolio','index','info','donate']
  index.forEach((item, i) => {
    index[i].push(i)
  })
  getRandomArray(index)
  function goToLink(link) {
    window.location.href = '/work/'+link
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
</script>

<style lang="scss">
.index-container {
  width: 100%;
}
.index-flex {
  position: absolute;
  display: flex;
  // top: 10%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 1;
}
.index-flexm {
  position: relative;
  display: flex;
  width: 20%;
  flex-wrap: wrap;
  gap: 20px;
  img {
    width: 100%;
    filter: invert(1) blur(0);
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    &:hover {
      cursor: crosshair;
      filter: invert(0) blur(0.4rem);
    }
  }
}
@media (max-width: 600px) {
}
</style>
