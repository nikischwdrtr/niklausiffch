<template>
  <div class="index-container">
    <NI />
    <template  v-for="(index, i) in index">
      <section>
        <div class="index-col" @click="goToLink(index.link,index.href)">
          <div class="index-cell">
            <h4>{{index.id}}</h4>
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

<script>
export default {
  mounted() {
    console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
    console.log('♕ niki is king ♕')
    console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
    this.indexP = queryContent('data')
      .only('index')
      .findOne()
    this.indexP.then((value) => {
      let howMany = value.index.length
      for (let x=0;x<howMany;x++) {
        this.index[x] = value.index[x]
      }
      this.getRandomArray(this.index);
    })
  },
	data() {
		return {
      indexP: [],
      index: [],
    };
	},
  computed: {},
	methods: {
    goToLink(link,href) {
      if (href == 'blank') {
        window.open(link, '_blank', 'noreferrer')
      } else if (href == 'mail') {
        window.location.href = "mailto:admin@niklausiff.ch";
      } else {
        this.$router.push({ path: link })
      }
    },
    getRandomArray: function(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    },
  },
}
</script>

<style lang="scss">
.index-col {
  display: grid;
  grid-template-columns: 7% 40% 30% 20%;
}
@media (max-width: 600px) {
  .index-col {
    grid-template-columns: 10% 35% 35% 20%;
  } 
}
</style>
