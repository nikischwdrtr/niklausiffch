<template>
  <div class="Images-container">
    <template  v-for="(index,i) in index">
      <template v-if="index[4].portfolio === '1'">
        <div class="Images-desc">
          <h6 :id="'work'+i">{{index[0].nameDesc}}</h6>
          <h5 v-if="!!index[4].port.txt">{{index[4].port.txt}}</h5>
          <div>
            <a @click="goToLink(index[4].port.links[0].href)">{{index[4].port.links[0].name}}</a>
          </div>
        </div>
        <div>
          <template v-for="(img,i) in index[4].port.images">
            <template v-if="img.ifr === '0'">
              <img @click="imgFull(img.link,index[4].port.info[i])" :src="img.link">
            </template>
            <template v-if="img.ifr === '1'">
               <iframe :src="img.link" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> 
            </template>
          </template>
        </div>
      </template>
    </template>
    <div id="images-imgFull-div" @click="imgClose()"></div>
    <img id="images-imgFull" src="" @click="imgClose()">
    <div id="images-imgFull-txt" @click="imgClose()">
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
  // let t,d,de = ''
  index.forEach((item, i) => {
    index[i].push(i)
  })
  function imgFull(link,info) {
    t.value = info.t
    d.value = info.d
    de.value = info.de
    let img = document.getElementById('images-imgFull')
    let bg = document.getElementById('images-imgFull-div')
    let txt = document.getElementById('images-imgFull-txt')
    img.src = link
    img.style.transform = 'translate(-50%,-50%) scale(1)'
    bg.style.display = 'initial'
    txt.style.opacity = '1'
  }
  function imgClose() {
    let img = document.getElementById('images-imgFull')
    let bg = document.getElementById('images-imgFull-div')
    let txt = document.getElementById('images-imgFull-txt')
    img.style.transform = 'translate(-50%,-50%) scale(0)'
    bg.style.display = 'none'
    txt.style.opacity = '0'
  }
  function goToLink(href) {
    window.open(href, '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.Images-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  div {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    gap: 5px;
    img {
      margin: 20px;
      width: 60%;
      height: auto;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      &:hover {
        cursor: crosshair;
		    filter: blur(0.4rem);
      }
    }
    iframe {
      margin: 20px;
    }
  }
  .Images-desc {
    width: 70%;
    display: block;
    text-align: right;
    h5 {
      margin-right: 10px;
      text-align: left;
    }
    div {
      text-align: right;
      display: inline-block;
    }
  }
  #images-imgFull-div {
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
  #images-imgFull {
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
  #images-imgFull-txt {
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
  .Images-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 10px;
    div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 5px;
      img {
        margin: 20px;
        width: 100%;
        height: auto;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        &:hover {
          cursor: crosshair;
          filter: blur(0.4rem);
        }
      }
      iframe {
        margin: 20px;
      }
    }
    .Images-desc {
      width: 100% !important;
    }
  }
}
</style>