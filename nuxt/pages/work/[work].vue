<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
</script>

<template>
  <div class="work-container">
    <NI />
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
  // height: 90vh;
  gap: 6px;
  z-index: 1;
  img {
    display: flex;
    width: 50vw;
    max-height: 90vh;
  }
  iframe {
    display: flex;
    min-width: 100vw;
    min-height: 50vw;
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