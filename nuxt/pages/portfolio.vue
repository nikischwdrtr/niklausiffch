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

<script>
export default {
  mounted() {
    console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
    console.log('♕ niki is king ♕')
    console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
    this.indexP = queryContent('data')
      .only('portfolio')
      .find()
    this.indexP.then((value) => {
      let howMany = value[2].portfolio.length
      for (let x=0;x<howMany;x++) {
        this.index[x] = value[2].portfolio[x]
      }
    });
  },
	data() {
		return {
      indexP: [],
      index: [],
    };
	},
  computed: {},
	methods: {
    goToLink(link) {
      this.$router.push({ path: link });
    },
  },
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
