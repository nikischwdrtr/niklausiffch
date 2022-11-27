<script setup>
  import { onMounted } from 'vue'

  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')

  onMounted(() => {
    let totalWidth = 0
    let newWidth = []
    let cont = document.getElementsByClassName('work-img')
    let cont2 = document.getElementsByClassName('work-col3-div')
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
    <ContentDoc />
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
  position: absolute;
  display: grid;
  grid-template-columns: 7% 93%;
  z-index: 10;
}
.work-col2-3 {
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
  margin-top: -2%;
  margin-bottom: 2%;
  line-height: 20%;
  top: 3vh;
  gap: 6px;
  z-index: 1;
  div {
    width: 50vw;
  }
}
.work-col4 {
  margin-top: -1%;
  line-height: 20%;
  width: 100%;
}
@media (max-width: 600px) {
  .work-col1 {
    grid-template-columns: 10% 80%;
  }
  .work-col2 {
    img {
      width: 100vw;
    }
  }
  .work-col3 {
    margin-bottom: 5%;
    div {
      width: 100vw;
    }
  }
}
</style>