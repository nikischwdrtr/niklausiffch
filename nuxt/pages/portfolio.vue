<template>
  <div class="portfolio-container">
    <NI />
    <div class="portfolio-flex">
      <template  v-for="(index, i) in index">
        <div class="portfolio-flexm">
          <template template v-if="index[4].portfolio === '1'">
            <div>
              <h6 @click="goToLink(index[0].name)">{{getNumbers(index[5]+1)}}</h6>
              <h3 @click="goToLink(index[0].name)">{{index[0].nameDesc}}</h3>
              <h3 @click="goToLink(index[0].name)">{{index[1].descDesc}}</h3>
              <h3 @click="goToLink(index[0].name)">{{index[2].yearDesc}}</h3>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  const router = useRouter()
  index.forEach((item, i) => {
    index[i].push(i)
  })
  getRandomArray(index)
  function goToLink(link) {
    window.location.href = link
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
  function getNumbers(num, size) {
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
.portfolio-container {
  width: 100%;
}
.portfolio-flex {
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  z-index: 1;
}
.portfolio-flexm {
  position: relative;
  display: flex;
  width: 20%;
  flex-wrap: wrap;
  gap: 20px;
  h6 {
    display: block;
  }
}
@media (max-width: 600px) {
}
</style>
