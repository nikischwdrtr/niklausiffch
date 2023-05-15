<template>
  <div class="Images-container">
    <template  v-for="(index,i) in index">
      <template v-if="index[4].portfolio === '1'">
        <div class="Images-desc">
          <div>
            <h6 :id="'work'+i" @click="goToWork(index[0].name)">{{index[0].nameDesc}}</h6>
          </div>
          <a :style="{marginLeft: '10px',marginBottom: '20px'}" @click="goToWork(index[0].name)">{{index[1].descDesc}}, {{index[2].yearDesc}}</a>
        </div>
        <div :id="'img'+i">
          <template v-for="(img,i) in index[4].port.images">
            <template v-if="i < 1">
            <template v-if="img.ifr === '0'">
              <img @click="goToWork(index[0].name)" :src="img.link">
            </template>
            <template v-if="img.ifr === '1'">
               <div class="embed-container"><iframe :src="img.link" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div> 
            </template>
            </template>
          </template>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup>
  const router = useRouter()
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  const t = ref('')
  const d = ref('')
  const de = ref('')
  index.forEach((item, i) => {
    index[i].push(i)
  })
  function goToWork(name) {
    router.push({path: "/"+name})
  }
  function goToLink(href) {
    window.open(href, '_blank', 'noreferrer')
  }
</script>

<style lang="scss">
.Images-container {
  position: absolute;
  display: initial;
  width: 60%;
  right: 1%;
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    gap: 5px;
    img {
      width: 100%;
      height: auto;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      margin-top: 10px;
      margin-bottom: 20px;
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
}
@media (max-width: 600px) {
  .Images-container {
    display: none;
    width: 98%;
    gap: 10px;
  }
}
</style>