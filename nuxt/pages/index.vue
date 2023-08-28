<template>
  <div class="index-container">
    <pre>
  ▄██▄    ▄██▄  ▄██▄ ▄██▄   ▄██▄ ▄██▄       ▄███████▄  ▄██▄   ▄██▄  ▄███████▄
 ██████▄  █████ ████ ████ ▄████▀ ████      ████▀▀▀████ ████   ████ ████▀ ▀████
 ████████▄█████ ████ ████████▀   ████      ████▄▄▄████ ████   ████ ▀█████▄▄
 █████▀████████ ████ ████████▄   ████  ▄██ ███████████ ████   ████    ▀▀█████▄
 █████  ▀██████ ████ ████ ▀████▄ █████████ ████   ████ ███████████ ████▄ ▄████
  ▀██▀    ▀██▀  ▀██▀ ▀██▀   ▀██▀ ▀████████ ▀██▀   ▀██▀  ▀███████▀   ▀███████▀
                          ▄██▄ ▄█████████▄ ▄█████████▄
                          ████ ████    ▀▀▀ ████    ▀▀▀
                <p @click="goToZurigo">8004</p>      ████ ████▄▄▄▄    ████▄▄▄▄       <p @click="goTo8212">8212</p>
               <p @click="goToZurigo">zurigo</p>     ████ ████▀▀▀▀    ████▀▀▀▀     <p @click="goToLicense">copyleft</p>
                          ████ ████        ████
                          ▀██▀ ▀██▀        ▀██▀

-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

                       <p @click="goToInsta">instagram</p>/<p @click="goToGit">github</p>/<p @click="goToSoundcloud">soundcloud</p>/<p @click="goToDonate">donate</p>
                              <p @click="goToMail">admin@niklausiff.ch</p>
        <a @click="goToPort">[portfolio]</a>                <p @click="goToPort">portfolio</p>                <a @click="goToPort">[portfolio]</a>
                                    <p @click="goToArchive">archive</p>
                                       <p @click="goToCV">cv</p>
    </pre>
  </div>
</template>

<script setup>
  console.log('%c ▄█████████████████▄','background: #ffffff; color: #00FF00')
  console.log('%c  ♕ niki is king ♕  ','background: #ffffff; color: #00FF00')
  console.log('%c ▀█████████████████▀','background: #ffffff; color: #00FF00')
  const router = useRouter()
  function goToZurigo() {
    window.open('https://goo.gl/maps/o9RwKvwKPfkicm4dA', '_blank', 'noreferrer')
  }
  function goTo8212() {
    window.open('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Neuhausen_am_Rheinfall-coat_of_arms.svg/1200px-Neuhausen_am_Rheinfall-coat_of_arms.svg.png', '_blank', 'noreferrer')
  }
  function goToLicense() {
    window.open('https://github.com/nikischwdrtr/niklausiffch/tree/main', '_blank', 'noreferrer')
  }
  function goToInsta() {
    window.open('https://www.instagram.com/niklausiff/', '_blank', 'noreferrer')
  }
  function goToGit() {
    window.open('https://github.com/nikischwdrtr', '_blank', 'noreferrer')
  }
  function goToSoundcloud() {
    window.open('https://soundcloud.com/jebemtimaiku', '_blank', 'noreferrer')
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
  function goToCV() {
    router.push({ path: "/cv" })
  }
</script>

<style lang="scss">
.index-container {
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
@media (max-width: 600px) {
}
</style>