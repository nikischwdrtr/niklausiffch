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

<script>
export default {
  mounted() {
    this.indexP = queryContent('data')
      .only('error')
      .find()
    this.indexP.then((value) => {
      let howMany = value[0].error.length
      for (let x=0;x<howMany;x++) {
        this.index[x] = value[0].error[x]
      }
    });
  },
	data() {
		return {
      indexP: [],
      index: [],
    };
	},
}
</script>

<style lang="scss">
.error-container {

}
</style>