<template>
  <div class="Err-container">
    <div>
      <h6 @click="goHome()">error</h6>
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
.Err-container {
	position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%,-50%) scale(1,1);
  z-index: 20;
  filter: blur(0.4rem);
}
@media (max-width: 600px) {
  .Err-container {
    width: 100%;
    filter: blur(0.2rem);
  } 
}
</style>
