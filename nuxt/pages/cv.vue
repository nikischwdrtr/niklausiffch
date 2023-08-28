<template>
  <div class="cv-container">
    <div>
      <div>
        <h1>[exhibition]</h1>
        <h2 @click="goToCTM()">Cut The Mustard // Lullin + Ferrari Zurich // 2023</h2>
        <h2 @click="goToAIF()">All Inclusive Festival // HSLU Lucerne // 2023</h2>
        <h2 @click="goToWipk()">RACING FOR SERENITY please be kind // Unterführung Wipkingerplatz Zurich // 2022</h2>
        <h2 @click="goToTN()">Abschlussausstellung // Toni Areal Zurich // 2021</h2>
      </div>
      <div>
        <h1>[education]</h1>
        <h2 @click="goToKV()">Bachelor Bildende Kunst (Fine Arts) // HSLU Lucerne // 2022 - to date</h2>
        <h2 @click="goToPropi()">Propädeutikum // ZHdK Zurich // 2020 - 2021</h2>
      </div>
      <div>
        <h1>[press]</h1>
        <h2 @click="goToAkut()">Akut Mag // 2023</h2>
      </div>
      <div>
        <h1>[other]</h1>
        <h2 @click="goToTMOL()">The Meaning Of Life // Millers Theater Zurich // 2021</h2>
      </div>
      <div style="margin-top:80px;">
        <h3 @click="goHome">[home]</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
  console.log('%c ▄█████████████████▄','background: #ffffff; color: #00FF00')
  console.log('%c  ♕ niki is king ♕  ','background: #ffffff; color: #00FF00')
  console.log('%c ▀█████████████████▀','background: #ffffff; color: #00FF00')
  const router = useRouter()
  function goHome() {
    router.push({ path: "/" })
  }
  function goToCTM() {c
    window.open('https://www.instagram.com/p/Cv_3yilNo2A/?img_index=1', '_blank', 'noreferrer')
  }
  function goToAIF() {
    window.open('https://www.instagram.com/p/Cn69zGRN6hZ/?img_index=2', '_blank', 'noreferrer')
  }
  function goToWipk() {
    window.open('https://www.instagram.com/p/CfmBkv3NM0p/?img_index=1', '_blank', 'noreferrer')
  }
  function goToTN() {
    window.open('https://www.instagram.com/p/CX3apuctBRl/?img_index=1', '_blank', 'noreferrer')
  }
  function goToKV() {
    window.open('https://www.kannichallesdarfichalles.com/', '_blank', 'noreferrer')
  }
  function goToPropi() {
    window.open('https://propaedeutikum.zhdk.ch/', '_blank', 'noreferrer')
  }
  function goToAkut() {
    window.open('https://akutmag.ch/index-not-found/', '_blank', 'noreferrer')
  }
  function goToTMOL() {
    window.open('https://themeaningoflife.ch/', '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.cv-container {
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
}
@media (max-width: 600px) {
}
</style>