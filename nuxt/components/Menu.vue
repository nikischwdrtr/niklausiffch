<template>
  <div class="Menu-container">
    <div>
      <h1 @click="disableCV(),disableWork()">{{dataArr[0][0]}}</h1>
    </div>
    <div>
      <template v-for="(txt,i) in dataArr[0]">
        <h3 v-if="i>1&&i!=4&&i!=5&&i!=6&&i!=7&&i!=8">{{txt}};&nbsp;</h3>
        <h2 v-if="i==4" @click="openMail()">{{txt}};&nbsp;</h2>
        <h2 v-if="i==5" @click="openInsta()">{{txt}};&nbsp;</h2>
        <h2 v-if="i==6" @click="openGit()">{{txt}};&nbsp;</h2>
        <h2 v-if="i==7" @click="openArchive()">{{txt}};&nbsp;</h2>
        <h2 v-if="i==8" @click="openDonate()">{{txt}};&nbsp;</h2>
      </template>
    </div>
  </div>
</template>

<script setup>
  import {useCV} from '~/store/cv'
  import {useWork} from '~/store/work'
  import {storeToRefs} from 'pinia'
  const { data } = await useAsyncData('data', () => queryContent('/data').findOne())
  const dataArr = []
  data.value.body.forEach((item, i) => {
    dataArr.push(item)
  })
  const cvStore = useCV()
  const {disableCV} = cvStore
  const workStore = useWork()
  const {disableWork} = workStore
  function openMail() {
    window.location.href = "mailto:admin@niklausiff.ch"
  }
  function openInsta() {
    window.open('https://www.instagram.com/niklausiff/', '_blank', 'noreferrer')
  }
  function openGit() {
    window.open('https://github.com/nikischwdrtr', '_blank', 'noreferrer')
  }
  function openArchive() {
    window.open('https://niklausiff.rip/', '_blank', 'noreferrer')
  }
  function openDonate() {
    window.open('https://www.paypal.com/donate/?hosted_button_id=CRUUEFRRP2G78', '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.Menu-container {
  display: grid;
  grid-template: auto / 165px 1fr;
  width: 100%;
  row-gap: 36pt;
  h1 {
    position: absolute;
    z-index: 2;
  }
  img {
    position: absolute;
    z-index: 1;
    width: 40px;
    
  }
}
@media (max-width: 600px) {
  .Menu-container {
    grid-template: auto / 1fr;
  }
}
</style>