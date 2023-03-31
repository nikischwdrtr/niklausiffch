<template>
  <div class="Menu-container">
    <div @click="openMenu()" id="Menu-mobile-menu">
      <h6>Menu</h6>
    </div>
    <div id="Menu-menu">
      <div>
        <h6 @click="goToPort()">{{menu[0]}}</h6>
      </div>
      <template v-for="(index, i) in index">
        <template v-if="index[4].portfolio === '1'">
          <div>
            <h5 @click="goToWork(i)">{{index[4].port.name}}</h5>
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
        <h6 @click="goToInfo()">info</h6>
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
        <h6 @click="goToDonate()">{{menu[3]}}</h6>
      </div>
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
  function goToWork(i) {
    let x,y
    let work = document.getElementById('work'+i)
    if (work==null) {
      router.push({ path: "/" })
      setTimeout(() => {
        let newWork = document.getElementById('work'+i)
        let workBound = newWork.getBoundingClientRect()
        x = workBound.left+window.scrollX
        y = workBound.top+window.scrollY
        window.scrollTo(x, y)
      }, "200")
    } else {
      let workBound = work.getBoundingClientRect()
      x = workBound.left+window.scrollX
      y = workBound.top+window.scrollY
      window.scrollTo(x, y)
    }
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
}
#Menu-mobile-menu {
  display: none;
}
@media (max-width: 600px) {
  #Menu-menu {
    display: none;
    h6 {
      font-size: x-large;
    }
    h5 {
      font-size: large;
    }
  }
  #Menu-mobile-menu {
    display: initial;
    color: rgb(0,255,0);
    margin-left: 20px;
    h6 {
      font-size: x-large;
    }
  }
}
</style>