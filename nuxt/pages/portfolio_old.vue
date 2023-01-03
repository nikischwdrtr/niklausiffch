<template>
  <div class="port-container">
    <List />
    <template  v-for="(index, i) in index">
      <section>
        <div class="port-col" @click="goToLink(index.link)">
          <div class="port-cell">
            <h4>{{index.id}}</h4>
          </div>
          <div class="port-cell">
            <h4>{{index.name}}</h4>
          </div>
          <div class="port-cell">
            <h4>{{index.desc}}</h4>
          </div>
          <div class="port-cell">
            <h4>{{index.year}}</h4>
          </div>
        </div>
      </section>
    </template>
    <Footer />
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/data/portfolio.json')
  const index = JSON.parse(indexP.value)
  function goToLink(link,href) {
    if (link == 'false') {
      void(0)
    } else {
      if (href == 'blank') {
        window.open(link, '_blank', 'noreferrer')
      } else if (href == 'mail') {
        window.location.href = "mailto:admin@niklausiff.ch";
      } else {
        window.location.href = link
      }
    }
  }
</script>

<style lang="scss">
.port-col {
  display: grid;
  grid-template-columns: 7% 40% 30% 20%;
}
.port-col1 {
  top: 0;
  left: 0;
  width: 98%;
  position: fixed;
  display: grid;
  grid-template-columns: 7% 93%;
  z-index: 10;
}
@media (max-width: 600px) {
  .port-col {
    grid-template-columns: 10% 35% 35% 20%;
  } 
}
</style>
