<template>
  <div class="Images-container">
    <div class="Images-section">
      <div class="Images-archive">
        <div>
          <img src="/images/DSCF1511.jpg" loading="eager" />
        </div>
      </div>
    </div>
    <template  v-for="(inde, i) in index">
      <div class="Images-section">
        <div class="Images-archive">
          <div>
            <img :src="inde" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
  const index = [
    '/images/06.png',
    '/images/9144meterswell05.jpg',
    '/images/dataset.png',
    '/images/indexnotfound01.png',
    '/images/meterswe.jpg',
    '/images/safercyber.png',
    '/images/tn.jpg',
    '/images/tnGAN_rip01.jpg'
  ]
  getRandomArray(index)
  function getRandomArray(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
</script>

<style lang="scss">
.Images-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.Images-section {
  position: relative;
  width: 100%;
  height: 100%;
}
.Images-archive {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  div {
    position: fixed;
    display: block;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 90%;
    transform: translateZ(0) translateX(-50%) translateY(-50%);
    will-change: transform;
  }
  img {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    max-width: 100%;
    max-height: 90%;
  }
}
@media (max-width: 600px) {
  .Images-archive {
    div {
      width: 75%;
    }
  }
}
</style>