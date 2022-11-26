<template>
  <div class="List-container">
    <div>
      <h6 @click="goHome()">{{listName}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
		return {
      listName: 'portfolio',
    };
	},
	methods: {
    goHome: function () {
      this.$router.push({ path: "/" });
    },
  },
}
</script>

<style lang="scss">
.List-container {
	position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%,-50%) scale(1,1);
  z-index: 20;
  filter: blur(0.4rem);
}
@media (max-width: 600px) {
  .List-container {
    width: 100%;
    filter: blur(0.2rem);
  } 
}
</style>
