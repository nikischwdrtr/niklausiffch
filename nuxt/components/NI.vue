<template>
  <div class="NI-container">
    <div>
      <h6 @click="goHome()">niklaus iff</h6>
    </div>
  </div>
</template>

<script>
export default {
	methods: {
    goHome: function () {
      this.$router.push({ path: "/" });
    },
  },
}
</script>

<style lang="scss">
.NI-container {
	position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%,-50%) scale(1,1);
  z-index: 20;
  filter: blur(0.4rem);
  line-height: .9;
}
@media (max-width: 600px) {
  .NI-container {
    width: 100%;
    filter: blur(0.2rem);
  }
}
</style>
