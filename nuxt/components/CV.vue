<template>
  <div class="CV-container">
    <div class="CV-back">
      <p @click="goToPort()">←</p>
    </div>
    <div>
      <h6 >Exhibition</h6>
      <h5 style="margin-left:20px;" @click="goToAIF()">All Inclusive Festival // HSLU Lucerne // <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">2023</i></h5>
      <h5 style="margin-left:20px;" @click="goToWip()">RACING FOR SERENITY please be kind // Unterführung Wipkingerplatz Zurich // <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">2022</i></h5>
      <h5 style="margin-left:20px;" @click="goToTN()">Abschlussausstellung // Toni Areal Zurich // <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">2021</i></h5>
      <h6 >Education</h6>
      <h5>Bachelor Bildende Kunst (Fine Arts) // HSLU Lucerne // <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">2022 - to date</i></h5>
      <h5 style="margin-left:10px;">Propädeutikum // ZHdK Zurich // <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">2020 - 2021</i></h5>
      <h6 >Press</h6>
      <h5 style="margin-left:20px;" @click="goToAkut()">Akut Mag // <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">2023</i></h5>
      <h6 >Other</h6>
      <h5 style="margin-left:20px;" @click="goToTMOL()">The Meaning Of Life // Millers Theater Zurich // <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">2021</i></h5>
    </div>
  </div>
</template>

<script setup>
  const router = useRouter()
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  index.forEach((item, i) => {
    index[i].push(i)
  })
  function goToPort() {
    router.push({ path: "/" })
  }
  function goToAIF() {
    router.push({ path: "/salomon" })
  }
  function goToWip() {
    router.push({ path: "/9144meterswell" })
  }
  function goToTN() {
    router.push({ path: "/tngan" })
  }
  function goToAkut() {
    window.open('https://akutmag.ch/index-not-found/', '_blank', 'noreferrer')
  }
  function goToTMOL() {
    window.open('https://themeaningoflife.ch/', '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.CV-container {
  position: absolute;
  width: 60%;
  right: 1%;
  div {
    h6 {
      display: block;
      width: fit-content;
    }
  }
}
@media (max-width: 600px) {
  .CV-container {
    width: 98%;
  }
}
</style>