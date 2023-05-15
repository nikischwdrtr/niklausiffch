<template>
  <div class="Menu-container">
    <div id="Menu-menu">
      <div>
        <h6 @click="goToPort()">niklaus iff</h6>
      </div>
      <template v-for="(index, i) in index">
        <template v-if="index[4].portfolio === '1'">
          <div>
            <h5 @click="goToWork(index[0].name)">{{index[4].port.name}} <i :style="{color:'rgb(0,255,0)',fontStyle:'normal'}">{{index[1].descDesc}}, {{index[2].yearDesc}}</i></h5>
          </div>
        </template>
      </template>
      <div>
        <h6 @click="goToCV()">{{menu[4]}}</h6>
      </div>
      <div>
        <h6 @click="goToArchive()">{{menu[1]}}</h6>
      </div>
      <div>
        <h6 @click="writeMail()">admin@niklausiff.ch</h6>
      </div>
      <div>
        <h5 @click="goToLicense()">copyleft</h5>
      </div>
      <div>
        <h5 @click="goTo8212()">8212</h5>
      </div>
      <div>
        <h5 @click="goToGithub()">github</h5>
      </div>
      <div>
        <h5 @click="goToInstagram()">instagram</h5>
      </div>
      <div>
        <h5 @click="goToSoundcloud()">soundcloud</h5>
      </div>
      <div>
        <h6 @click="goToDonate()" :style="{color: 'rgb(0,255,0)'}">{{menu[3]}}</h6>
      </div>
      <!-- <div class="Menu-bio" :style="{marginTop: '20px'}">
        <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</h5>
      </div> -->
    </div>
  </div>
</template>

<script setup>
  const router = useRouter()
  const menu = ['portfolio','archive','info','donate','cv']
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  index.forEach((item, i) => {
    index[i].push(i)
  })
  function openMenu() {
    let menu = document.getElementById('Menu-menu')
    if (menu.style.display == 'none') {
      menu.style.display = 'initial'
    } else {
      menu.style.display = 'none'
    }
  }
  function goToPort() {
    router.push({ path: "/" })
  }
  function goToWork(name) {
    router.push({path: "/"+name})
  }
  function goToCV() {
    router.push({ path: "/cv" })
  }
  function goToArchive() {
    window.open('https://niklausiff.rip/', '_blank', 'noreferrer')
  }
  function goToInfo() {
    router.push({ path: "/info" })
  }
  function goToLicense() {
    router.push({ path: "/license" })
  }
  function goToDonate() {
    window.open('https://www.paypal.com/donate/?hosted_button_id=CRUUEFRRP2G78', '_blank', 'noreferrer')
  }
  function writeMail() {
    window.location.href = "mailto:admin@niklausiff.ch";
  }
  function goTo8212() {
    window.open('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Neuhausen_am_Rheinfall-coat_of_arms.svg/1200px-Neuhausen_am_Rheinfall-coat_of_arms.svg.png', '_blank', 'noreferrer')
  }
  function goToGithub() {
    window.open('https://github.com/nikischwdrtr', '_blank', 'noreferrer')
  }
  function goToInstagram() {
    window.open('https://www.instagram.com/niklausiff/', '_blank', 'noreferrer')
  }
  function goToSoundcloud() {
    window.open('https://soundcloud.com/jebemtimaiku', '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.Menu-container {
  position: fixed;
  width: 30%;
}
.Menu-bio {
  display: inline-block;
}
#Menu-btn {
  display: none;
  position: fixed;
}
@media (max-width: 600px) {
  .Menu-container {
    width: 94%;
  }
  .Menu-bio {
    display: none;
  }
}
</style>