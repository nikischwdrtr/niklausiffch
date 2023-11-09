<template>
  <div class="index-container">
    <Menu />
    <h2 @click="setCV()">>>cv</h2>
    <CV v-if="cv"/>
    <Indx />
    <Work v-if="workOn"/>
  </div>
</template>

<script setup>
  import {useCV} from '~/store/cv'
  import {useWork} from '~/store/work'
  import {storeToRefs} from 'pinia'
  console.log('%c  ♕ niki is king ♕  ','background: #ffffff; color: #00FF00')
  const { data } = await useAsyncData('data', () => queryContent('/data').findOne())
  const dataArr = []
  data.value.body.forEach((item, i) => {
    dataArr.push(item)
  })
  const cvStore = useCV()
  const {setCV} = cvStore
  const {cv} = storeToRefs(cvStore)
  const workStore = useWork()
  const {workOn} = storeToRefs(workStore)
</script>

<style lang="scss">
.index-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 18pt;
  width: 100%;
}
@media (max-width: 600px) {
}
</style>