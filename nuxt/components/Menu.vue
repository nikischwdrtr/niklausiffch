<template>
  <div class="Menu-container">
    <div class="Menu-grid-info"> 
      <div>
        <img src="~/assets/images/test.jpg" >
        <h1>>>under construction</h1>
      </div>
      <div>
        <h3>[niklaus iff];&nbsp;</h3>
        <h3>*1996;&nbsp;</h3>
        <h2 @click="goToMail()">admin@niklausiff.ch;&nbsp;</h2>
        <h3>zurigo;&nbsp;</h3>
      </div>
    </div>
    <div class="Menu-grid-links">
        <h2 @click="goToPort()">portfolio</h2>
        <p>>&nbsp;<a href="/niklausiff_portfolio23.pdf" target="_blank">https://niklausiff.ch/niklausiff_portfolio23.pdf</a></p>
        <h2 @click="goToInsta()">instagram</h2>
        <p>>&nbsp;<a href="https://www.instagram.com/niklausiff/" target="_blank">https://www.instagram.com/niklausiff/</a></p>
        <h2 @click="goToGit()">github</h2>
        <p>>&nbsp;<a href="https://github.com/nikischwdrtr" target="_blank">https://github.com/nikischwdrtr</a></p>
        <h2 @click="goToArchive()">archive</h2>
        <p>>&nbsp;<a href="https://niklausiff.rip/" target="_blank">https://niklausiff.rip/</a></p>
        <h2 @click="goToDonate()">donate</h2>
        <p>>&nbsp;<a href="https://www.paypal.com/donate/?hosted_button_id=CRUUEFRRP2G78" target="_blank">https://www.paypal.com/donate/?hosted_button_id=CRUUEFRRP2G78</a></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h3>copyleft</h3>
    </div>
  </div>
</template>

<script setup>
  const router = useRouter()
  const route = useRoute()
  function goToInsta() {
    window.open('https://www.instagram.com/niklausiff/', '_blank', 'noreferrer')
  }
  function goToGit() {
    window.open('https://github.com/nikischwdrtr', '_blank', 'noreferrer')
  }
  function goToDonate() {
    window.open('https://www.paypal.com/donate/?hosted_button_id=CRUUEFRRP2G78', '_blank', 'noreferrer')
  }
  function goToMail() {
    window.location.href = "mailto:admin@niklausiff.ch";
  }
  function goToPort() {
    window.open('/niklausiff_portfolio23.pdf', '_blank');
  }
  function goToArchive() {
    window.open('https://niklausiff.rip/', '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.Menu-container {
  overflow: hidden;
  position: absolute;
  width: 98%;
  height: 98%;
  margin: 1%;
}
.Menu-grid-info {
  position: absolute;
  top: 0;
  display: grid;
  grid-template: auto / 250px 1fr;
  img {
    position: absolute;
    width: 100px;
  }
  h1 {
    position: relative;
    z-index: 2;
  }
}
.Menu-grid-links {
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template: auto / 250px 1fr;
}
@media (max-width: 600px) {
  .Menu-container {
    width: 96%;
    height: 96%;
    margin: 2%;
  }
  .Menu-grid-info {
    grid-template: auto / 150px 1fr;
  }
  .Menu-grid-links {
    grid-template: auto / 150px 1fr;
  }
}
</style>