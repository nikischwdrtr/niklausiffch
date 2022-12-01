<script setup>
  import { onMounted,ref} from 'vue'
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const col3Img = ref(null)
  const col3Div = ref(null)
  const route = useRoute()
  let currentPath = route.path
  const whichJSON = currentPath.slice(6)
  const pathToJSON = 'https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/work/'+whichJSON+'.json'
  const {data: indexP } = await useFetch(pathToJSON)
  const index = JSON.parse(indexP.value)
  onMounted(() => {
    let totalWidth = 0
    let newWidth = []
    let cont = col3Img.value
    let cont2 = col3Div.value
    for (let i = 0, len = cont.length; i < len; i++) {
      totalWidth = cont[i].offsetWidth
      newWidth[i] = totalWidth
      cont2[i].style.width = newWidth[i]+'px'
    }
  })
</script>

<template>
  <div class="work-container">
    <NIPort />
      <div class="work-col1">
        <h4 class="work-newh4">{{index.num}}</h4>
        <h4 class="work-newh4">{{index.name}}</h4>
      </div>
      <div class="work-col2-3">
        <div class="work-col2">
          <template  v-for="(img, i) in index.images">
            <template template v-if="index.images[i].ifr === '1'">
              <div class="work-img">
                <div class="work-ifr">
                  <iframe :src="index.images[i].link" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="dauer standort render"></iframe>
                </div>  
              </div>
            </template>
            <template template v-if="index.images[i].ifr === '0'">
              <div class="work-img" ref="col3Img">
                <img :src="index.images[i].link">
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
    min-width: 50vw;
    max-height: 90vh;
  }
}
.work-ifr {
  display: flex;
  position: relative;
  padding:56.25% 0 0 0;
  min-width: 100vw;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
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
@media (min-width: 1550px) {
  .work-col2 {
    margin-bottom: -5%;
  }
}
</style>