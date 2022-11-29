<template>
  <div class="error-container">
    <Error />
     <template  v-for="(index, i) in index">
      <section>
        <div class="index-col">
          <div class="index-cell">
            <h4>{{index.code}}</h4>
          </div>
          <div class="index-cell">
            <h4>{{index.name}}</h4>
          </div>
          <div class="index-cell">
            <h4>{{index.desc}}</h4>
          </div>
          <div class="index-cell">
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
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/data/error.json')
  const index = JSON.parse(indexP.value)
</script>

<style lang="scss">
.error-container {

}
</style>