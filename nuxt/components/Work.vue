<template>
  <div class="Work-container">
    <div class="Work-back">
      <p @click="goToPort()">←</p>
    </div>
    <template  v-for="(index,i) in indexNew">
      <template v-if="index[4].portfolio === '1'">
        <div class="Work-desc">
          <div>
            <h6 :id="'work'+i">{{index[0].nameDesc}}</h6>
          </div>
          <h5 v-if="!!index[4].port.txt">{{index[4].port.txt}}</h5>
          <a>{{index[1].descDesc}}, {{index[2].yearDesc}}</a>
          <div>
            <a @click="goToLink(index[4].port.links[0].href)" :style="{textDecoration: 'underline'}">{{index[4].port.links[0].name}}</a>
          </div>
        </div>
        <div>
          <template v-for="(img,i) in index[4].port.images">
            <template v-if="img.ifr === '0'">
              <img @click="imgFull(img.link,index[4].port.info[i])" :src="img.link">
            </template>
            <template v-if="img.ifr === '1'">
               <div class="embed-container"><iframe :src="img.link" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div> 
            </template>
          </template>
        </div>
      </template>
    </template>
    <div id="work-imgFull-div" @click="imgClose()"></div>
    <img id="work-imgFull" src="" @click="imgClose()">
    <div id="work-imgFull-txt" @click="imgClose()">
      <h3>{{t}}</h3>
      <h3 style="margin-left:10px;">{{d}}</h3>
      <h3 style="margin-left:-10px;">{{de}}</h3>
    </div>
  </div>
</template>

<script setup>
  const router = useRouter()
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  const t = ref('')
  const d = ref('')
  const de = ref('')
  const route = useRoute()
  let currentPath = route.path
  const whichJSON = currentPath.slice(1)
  let indexNew = []
  index.forEach((item, i) => {
    if (item[0].name == whichJSON) {
      indexNew.push(item)
    }
  })
  function goToPort() {
    router.push({ path: "/" })
  }
  function imgFull(link,info) {
    t.value = info.t
    d.value = info.d
    de.value = info.de
    let img = document.getElementById('work-imgFull')
    let bg = document.getElementById('work-imgFull-div')
    let txt = document.getElementById('work-imgFull-txt')
    img.src = link
    img.style.transform = 'translate(-50%,-50%) scale(1)'
    bg.style.display = 'initial'
    txt.style.opacity = '1'
  }
  function imgClose() {
    let img = document.getElementById('work-imgFull')
    let bg = document.getElementById('work-imgFull-div')
    let txt = document.getElementById('work-imgFull-txt')
    img.style.transform = 'translate(-50%,-50%) scale(0)'
    bg.style.display = 'none'
    txt.style.opacity = '0'
  }
  function goToLink(href) {
    window.open(href, '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.Work-container {
  position: absolute;
  width: 60%;
  right: 1%;
  div {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      margin-top: 10px;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      &:hover {
        cursor: crosshair;
		    filter: blur(0.4rem);
      }
    }
    iframe {
      margin-top: 10px;
    }
  }
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .embed-container iframe,.embed-container object,.embed-container embed { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
  }
  .Work-desc {
    width: 100%;
    display: block;
    text-align: left;
    h5 {
      margin-left: 10px;
      text-align: left;
    }
    div {
      text-align: left;
      display: inline-block;
    }
  }
  #work-imgFull-div {
    position: fixed;
    display: none;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px);
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    z-index: 29;
    &:hover {
      cursor: crosshair;
    }
  }
  #work-imgFull {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: scale(0);
    transform: translate(-50%,-50%) scale(0);
    max-width: 98vw;
    max-height: 98vh;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    z-index: 30;
    &:hover {
      cursor: crosshair;
    }
  }
  #work-imgFull-txt {
    bottom: 2%;
    left: 6%;
    opacity: 0;
    display: block;
    position: fixed;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    z-index: 31;
    &:hover {
      cursor: crosshair;
    }
  }
}
@media (max-width: 600px) {
  .Work-container {
    width: 98%;
  }
}
</style>