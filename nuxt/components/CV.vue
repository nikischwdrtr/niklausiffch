<template>
  <div class="CV-container">
    <div>
      <h6 :style="{marginBottom: '20px'}">Exhibition</h6>
      <h5 style="margin-left:20px;" @click="goToAIF()">All Inclusive Festival // HSLU Lucerne // 2023</h5>
      <h5 style="margin-left:20px;" @click="goToWip()">RACING FOR SERENITY please be kind // Unterführung Wipkingerplatz Zurich // 2022</h5>
      <h5 style="margin-left:20px;margin-bottom:20px;" @click="goToTN()">Abschlussausstellung // Toni Areal Zurich // 2021</h5>
      <h6 :style="{marginBottom: '20px'}">Education</h6>
      <h5>Bachelor Bildende Kunst (Fine Arts) // HSLU Lucerne // 2022 - to date</h5>
      <h5 style="margin-left:10px;margin-bottom:20px;">Propädeutikum // ZHdK Zurich // 2020 - 2021</h5>
      <h6 :style="{marginBottom: '20px'}">Press</h6>
      <h5 style="margin-left:20px;margin-bottom:20px;" @click="goToAkut()">Akut Mag // 2023</h5>
      <h6 :style="{marginBottom: '20px'}">Other</h6>
      <h5 style="margin-left:20px;" @click="goToTMOL()">The Meaning Of Life // Millers Theater Zurich // 2021</h5>
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
  width: 100%;
  div {
    position: absolute;
    h6 {
      display: block;
      width: fit-content;
    }
  }
}
@media (max-width: 600px) {
  .CV-container {
    position: absolute;
  }
}
</style>