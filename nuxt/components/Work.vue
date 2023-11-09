<template>
  <div class="Work-container">
    <div class="Work-header">
      <h3>>{{dataArr[3][work]}}</h3>
    </div>
    <h3 v-if="dataArr[4][work].txt">{{dataArr[4][work].txt}}</h3>
    <div class="Work-desc">
      <template v-for="(txt,i) in dataArr[4][work].desc">
        <h3>{{dataArr[4][work].desc[i]}}</h3>
      </template>
    </div>
    <div class="Work-links" v-if="dataArr[4][work].links">
      <template v-for="(txt,i) in dataArr[4][work].links">
        <h3>{{dataArr[4][work].linksName[i]}}</h3>
        <h3>>&nbsp;
          <a v-if="dataArr[4][work].links[i].if==1" :href="'https://'+dataArr[4][work].links[i].link" target="_blank">{{dataArr[4][work].links[i].link}}</a>
          <h3 v-if="dataArr[4][work].links[i].if==0">{{dataArr[4][work].links[i].link}}</h3>
        </h3>
      </template>
    </div>
    <h3>{{dataArr[4][work].year}}</h3>
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
  display: flex;
  flex-direction: column;
  gap: 18pt;
}
.Work-header {
  width: 100%;
  display: grid;
  grid-template: auto / 165px 1fr;
}
.Work-desc {
  width: 100%;
  display: grid;
  grid-template: auto / 1fr;
}
.Work-links {
  width: 100%;
  display: grid;
  grid-template: auto / 165px 1fr;
}
.Work-img-grid {
  width: 100%;
  display: grid;
  grid-template: auto / 1fr;
  gap: 9pt;
}
@media (max-width: 600px) {
}
</style>