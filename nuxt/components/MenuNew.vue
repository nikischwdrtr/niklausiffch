<template>
  <div class="Menu-container">
    <div>
      <h1>[niklausiff]</h1>
    </div>
    <div class="Menu-links">
      <template v-for="(link, i) in links">
        <p>{{link}}</p>
      </template>
    </div>
    <div class="Menu-bottom">
      <div>
        <p>{{bottoms[0]}}</p>
      </div>
      <div>
        <h2>{{bottoms[1]}}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
  const links = [
    'portfolio',
    'archive',
    'donate',
    'admin@niklausiff.ch',
    'zurigo',
    'cv',
    'instagram',
    'github',
    'soundcloud'
  ]
  const bottoms = [
    'copyleft',
    '8212'
  ]
  const fonts = [
    'WerkHeavy',
    'WerkRegular',
  ]
  const blurs = [
    'blur(0.1rem)',
    'blur(0.1rem)'
  ]
  const font = [
    'WerkHeavy',
    'WerkRegular',
    'WerkRegular',
    'WerkHeavy',
    'WerkRegular',
    'WerkHeavy',
    'WerkRegular',
    'WerkHeavy',
    'WerkRegular',
  ]
  const blur = []
  for (let i=0;i<links.length;i++) { 
    blur.push(blurs[Math.floor(Math.random()*blurs.length)])
  }
</script>

<style lang="scss">
.Menu-container {
  position: fixed;
  width: 100%;
  top: 50%;
  transform: translate(0,-50%) scale(0.5);
  p {
    margin-top: -4%;
  }
}
.Menu-bottom {
  text-align: right;
  div {
    margin-bottom: -3%;
  }
}
@media (max-width: 600px) {
  .Menu-container {
    transform: scale(1);
    p {
      line-height: 120%;
    }
  }
}
</style>