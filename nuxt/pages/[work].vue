<template>
  <div class="work-container">
    <NI />

    <div>
      <h6 class="work-newh4">{{getNumbers(indexNum)}}</h6>
      <h3 class="work-newh4">{{index.name}}</h3>
    </div>
    <div class="work-flex">
      <div class="work-flexm">
        <template  v-for="(img, i) in index.images">
          <div>
            <img :src="index.images[i].link" :id="index.images[i].link"  @click="imgFull(index.images[i].link)">
            <!-- <h3>{{index.info[i].t}}</h3>
            <p>{{index.info[i].d}}</p>
            <p>{{index.info[i].de}}</p> -->
          </div>
        </template>
      </div>
    </div>



    <!-- <div class="work-col2-3">
      <div class="work-col2">
        <template  v-for="(img, i) in index.images">
          <template template v-if="index.images[i].ifr === '1'">
            <div class="work-img" ref="col3Img">
              <div class="work-ifr">
                <iframe :src="index.images[i].link" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="dauer standort render"></iframe>
              </div>  
            </div>
          </template>
          <template template v-if="index.images[i].ifr === '0'">
            <div class="work-img" ref="col3Img">
              <img :src="index.images[i].link" :id="index.images[i].link"  @click="imgFull(index.images[i].link)">
            </div>
              <div class="work-col3-div" ref="col3Div">
                <h3>{{index.info[i].t}}</h3>
                <p>{{index.info[i].d}}</p>
                <p>{{index.info[i].de}}</p>
              </div>
          </template>
        </template>
      </div>
      <div class="work-col3">
        
      </div>
    </div> -->


    <!-- <div class="work-col4">
      <template v-if="index.link" v-for="(links, i) in index.links">
        <a class="work-links" :href="index.links[i].href" target="_blank">{{index.links[i].name}}</a>
      </template>
    </div> -->


    <h2 class="work-newh4">{{index.txt}}</h2>
    <div id="work-imgFull-div" @click="imgClose()"></div>
    <img id="work-imgFull" src="" @click="imgClose()">
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const col3Img = ref(null)
  const col3Div = ref(null)
  const route = useRoute()
  let currentPath = route.path
  const whichJSON = currentPath.slice(1)
  const pathToJSON = 'https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json'
  const {data: indexP } = await useFetch(pathToJSON)
  const indexAll = await JSON.parse(indexP.value)
  let whichData = 0
  let indexPort = []
  indexAll.forEach((item, i) => {
    indexAll[i].push(i)
  })
  indexAll.forEach((item, i) => {
    if (item[0].name == whichJSON) {
      indexPort.push(item)
    }
  })
  const indexNum = indexPort[0][5]+1
  const index = indexPort[0][4].port
  function imgFull(link) {
    let img = document.getElementById('work-imgFull')
    let bg = document.getElementById('work-imgFull-div')
    img.src = link
    img.style.transform = 'translate(-50%,-50%) scale(1)'
    bg.style.display = 'initial'
  }
  function imgClose() {
    let img = document.getElementById('work-imgFull')
    let bg = document.getElementById('work-imgFull-div')
    img.style.transform = 'translate(-50%,-50%) scale(0)'
    bg.style.display = 'none'
  }
  function getNumbers(num) {
    let s = ''
    let numS = num.toString()
    if (numS.length <= 1) {
      s = '00' + numS
    } else if (numS.length <= 2) {
      s = '0' + numS
    } else {
      s = numS
    }
    return s
  }
</script>

<style lang="scss">
.work-container {
  width: 100%;
}
.work-flex {
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 1;
}
.work-flexm {
  position: relative;
  display: flex;
  width: 20%;
  flex-wrap: wrap;
  gap: 20px;
  img {
    width: 100%;
    filter: invert(0) blur(0);
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    &:hover {
      cursor: crosshair;
      filter: invert(1) blur(0.4rem);
    }
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
}
@media (max-width: 600px) {
  .work-col1 {
    grid-template-columns: 10% 80%;
  }
  .work-col2 {
    img {
      width: 98vw;
      max-height: 70vh;
    }
  }
  .work-col3 {
    margin-bottom: 5%;
    div {
      width: 100vw;
    }
  }
  h3 {
    font-size: 3vw;
  }
  h4 {
    font-size: 4vw;
  }
}
</style>