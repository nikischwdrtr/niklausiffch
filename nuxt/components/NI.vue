<template>
  <div class="List-container">
    <div>
      <h1 @click="goHome()">niklaus iff</h1>
    </div>
  </div>
</template>


<script setup>
  const router = useRouter()
  function goHome() {
    router.push({ path: "/" })
  }
</script>

<style lang="scss">
.List-container {
	position: fixed;
  top: 50%;
  left: 50%;
  border: solid rgb(0,255,0);
  border-radius: 50%;
  transform: translate(-50%,-50%);
  z-index: 20;
  line-height: .9;
  filter: blur(0.4rem);
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  color: rgb(0,255,0);
  &:hover {
    filter: blur(0.8rem);
  }
}
@media (max-width: 600px) {
  .List-container {
    width: 100%;
  } 
}
</style>
