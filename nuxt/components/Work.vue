<template>
  <div class="Work-container">
    <h3>>{{dataArr[3][work]}}</h3>
    <h3>{{dataArr[4][work].txt}}</h3>
    <h3>&nbsp;</h3>
    <h3>&nbsp;</h3>
    <h3>&nbsp;</h3>
    <template v-for="(txt,i) in dataArr[4][work].desc">
      <h3>{{dataArr[4][work].desc[i]}}</h3>
      <h3>&nbsp;</h3>
    </template>
    <h3>&nbsp;</h3>
    <h3>&nbsp;</h3>
    <template v-for="(txt,i) in dataArr[4][work].links">
      <h3>
        {{dataArr[4][work].linksName[i]}} >&nbsp;
        <a v-if="dataArr[4][work].links[i].if==1" :href="'https://'+dataArr[4][work].links[i].link" target="_blank">{{dataArr[4][work].links[i].link}}</a>
        <h3 v-if="dataArr[4][work].links[i].if==0">{{dataArr[4][work].links[i].link}}</h3>
      </h3>
      <h3>&nbsp;</h3>
    </template>
    <h3>&nbsp;</h3>
    <h3>&nbsp;</h3>
    <h3>{{dataArr[4][work].year}}</h3>
    <h3>&nbsp;</h3>
    <h3>&nbsp;</h3>
    <h3>&nbsp;</h3>
    <div class="Work-img-grid">
      <img v-for="(txt,i) in dataArr[4][work].images" :src="'/images/'+dataArr[4][work].images[i]">
    </div>
  </div>
</template>

<script setup>
  import {useWork} from '~/store/work'
  import {storeToRefs} from 'pinia'
  const { data } = await useAsyncData('data', () => queryContent('/data').findOne())
  const dataArr = []
  data.value.body.forEach((item, i) => {
    dataArr.push(item)
  })
  const workStore = useWork()
  const {setWork} = workStore
  const {work} = storeToRefs(workStore)
</script>

<style lang="scss">
.Work-container {
  width: 100%;
  display: grid;
  grid-template: auto / 165px 1fr;
  img {
    width: 100%;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    &:hover {
      cursor: crosshair;
      filter: blur(0.4rem);
      color: rgb(0,255,0);
    }
  }
}
.Work-img-grid {
  width: 100%;
  display: grid;
  grid-template: auto / 70%;
  gap: 15px;
}
@media (max-width: 600px) {
}
</style>