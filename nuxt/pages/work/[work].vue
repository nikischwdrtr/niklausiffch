<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const col3Img = ref(null)
  const col3Div = ref(null)
  const route = useRoute()
  let currentPath = route.path
  const whichJSON = currentPath.slice(6)
  const pathToJSON = 'https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json'
  const {data: indexP } = await useFetch(pathToJSON)
  const indexAll = await JSON.parse(indexP.value)
  let whichData = 0
  for (let i=0; i < indexAll.length; i++) {
    if (indexAll[i].linkName == whichJSON) {
      whichData = i
    }
  }
  const index = indexAll[whichData].port
  const { isLoading } = useImage({ src: index[0] })
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
onMounted(() => {
  watch(isLoading, (value) => {
    if (isLoading.value === false) {
      let totalWidth = 0
      let newWidth = []
      let cont = col3Img.value
      let cont2 = col3Div.value
      for (let i = 0, len = cont.length; i < len; i++) {
        totalWidth = cont[i].offsetWidth
        newWidth[i] = totalWidth
        cont2[i].style.width = newWidth[i]+'px'
      }
    }
  })
})
</script>

<template>
  <div class="work-container">
    <List />
      <div class="work-col1">
        <h4 class="work-newh4">00</h4>
        <!-- <h4 class="work-newh4">{{index.num}}</h4> -->
        <h4 class="work-newh4">{{index.name}}</h4>
      </div>
      <div class="work-col2-3">
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
            </template>
          </template>
        </div>
        <div class="work-col3">
          <template  v-for="(info, i) in index.info">
            <div class="work-col3-div" ref="col3Div">
              <h3>{{index.info[i].t}}</h3>
              <p>{{index.info[i].d}}</p>
              <p>{{index.info[i].de}}</p>
            </div>
          </template>
        </div>
      </div>
      <div class="work-col4">
        <template v-if="index.link" v-for="(links, i) in index.links">
          <a class="work-links" :href="index.links[i].href" target="_blank">{{index.links[i].name}}</a>
        </template>
      </div>
      <h4 class="work-newh4">{{index.txt}}</h4>
    <Footer />
    <div id="work-imgFull-div" @click="imgClose()"></div>
    <img id="work-imgFull" src="" @click="imgClose()">
  </div>
</template>

<style lang="scss">
.work-container {
  overflow: hidden;
}
.work-col1 {
  top: 0;
  left: 0;
  width: 98%;
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  z-index: 10;
}
.work-col2-3 {
  margin-top: -2%;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  z-index: 1;
}
.work-col2 {
  position: relative;
  display: flex;
  top: 3vh;
  width: 100%;
  gap: 6px;
  z-index: 1;
  img {
    display: flex;
    width: 50vw;
    height: 90vh;
    cursor: crosshair;
  }
}
.work-ifr {
  display: flex;
  position: relative;
  padding:56.25% 0 0 0;
  width: 50vw;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 90vh;
  }
}
.work-col3 {
  position: relative;
  display: inline-flex;
  margin-top: -10px;
  margin-bottom: 30px;
  line-height: 20%;
  top: 3vh;
  gap: 6px;
  z-index: 1;
  div {
    width: 50vw;
  }
}
.work-col4 {
  margin-bottom: 6px;
  line-height: 20%;
  width: 100%;
}
.work-newh4 {
  font-style: normal;
	overflow: visible;
	white-space: normal;
	text-overflow: initial;
}
h3 {
  &:hover {
	  cursor: text;
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