<template>
  <div class="info-container">
    <NI />
    <div class="info-flex">
      <template  v-for="(index, i) in index">
        <template  v-for="(index, e) in menu">
          <template v-if="i < 5">
            <div>
              <h6 @click="goToPort()">{{menu[0]}}</h6>
            </div>
            <div>
              <h6 @click="goToIndex()">{{menu[1]}}</h6>
            </div>
            <div>
              <h6 @click="goToInfo()">{{menu[2]}}</h6>
            </div>
            <div>
              <h6 @click="goToDonate()">{{menu[3]}}</h6>
            </div>
          </template>
          <div>
            <h6>{{info[0]}}</h6>
            <h6>{{info[1]}}</h6>
          </div>
        </template>
        
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
  const menu = ['portfolio','index','info','donate']
  const info = ['admin@niklausiff.ch','copyleft']
  index.forEach((item, i) => {
    index[i].push(i)
  })
  function goToPort() {
    router.push({ path: "/portfolio" })
  }
  function goToIndex() {
    router.push({ path: "/indexx" })
  }
  function goToInfo() {
    router.push({ path: "/info" })
  }
  function goToDonate() {
    window.open('https://www.paypal.com/donate/?hosted_button_id=CRUUEFRRP2G78', '_blank', 'noreferrer')
  }
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
.info-container {
  width: 100%;
}
.info-flex {
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 1;
}
.info-flexm {
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
