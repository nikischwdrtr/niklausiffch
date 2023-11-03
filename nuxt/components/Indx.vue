<template>
  <div class="Indx-container">
    <h2 @click="disableWork()">>>index</h2>
    <div>
      <h2 v-for="(txt,i) in dataArr[3]" @click="showWork(i),setWork(i)">{{txt}};&nbsp;</h2>
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
  const {showWork} = workStore
  const {disableWork} = workStore
  const {work} = storeToRefs(workStore)
  const {workOn} = storeToRefs(workStore)
</script>

<style lang="scss">
.Indx-container {
  width: 100%;
  display: grid;
  grid-template: auto / 165px 1fr;
}
@media (max-width: 600px) {
}
</style>