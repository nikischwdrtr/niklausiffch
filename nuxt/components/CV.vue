<template>
  <div class="CV-container">
    <div>
      <h6>Exhibition</h6>
      <h5 style="margin-left:-20px;" @click="goToAIF()">All Inclusive Festival // HSLU Lucerne // 2023</h5>
      <h5 @click="goToWip()">RACING FOR SERENITY please be kind // Unterführung Wipkingerplatz Zurich // 2022</h5>
      <h5 style="margin-left:20px;" @click="goToTN()">Abschlussausstellung // Toni Areal Zurich // 2021</h5>
      <h6>Education</h6>
      <h5>Bachelor Bildende Kunst (Fine Arts) // HSLU Lucerne // 2022 - to date</h5>
      <h5 style="margin-left:-20px;">Propädeutikum // ZHdK Zurich // 2020 - 2021</h5>
      <h6>Press</h6>
      <h5 style="margin-left:-20px;" @click="goToAkut()">Akut Mag // 2023</h5>
      <h6>Other</h6>
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
    let x,y
    let i = 1
    router.push({ path: "/" })
    setTimeout(() => {
      let newWork = document.getElementById('work'+i)
      let workBound = newWork.getBoundingClientRect()
      x = workBound.left+window.scrollX
      y = workBound.top+window.scrollY
      window.scrollTo(x, y)
    }, "200")
  }
  function goToWip() {
    let x,y
    let i = 2
    router.push({ path: "/" })
    setTimeout(() => {
      let newWork = document.getElementById('work'+i)
      let workBound = newWork.getBoundingClientRect()
      x = workBound.left+window.scrollX
      y = workBound.top+window.scrollY
      window.scrollTo(x, y)
    }, "200")
  }
  function goToTN() {
    let x,y
    let i = 0
    router.push({ path: "/" })
    setTimeout(() => {
      let newWork = document.getElementById('work'+i)
      let workBound = newWork.getBoundingClientRect()
      x = workBound.left+window.scrollX
      y = workBound.top+window.scrollY
      window.scrollTo(x, y)
    }, "200")
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
  width: 100%;
  div {
    position: absolute;
    width: 50%;
    top: 1%;
    left: 50%;
    transform: translate(-50%,0);
    h6 {
      display: block;
      width: fit-content;
    }
  }
}
@media (max-width: 600px) {
  .CV-container {
    div {
      left: 70%;
    }
  }
}
</style>