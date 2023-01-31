<template>
  <div class="Header-container">
    <div>
      <h6 @click="goHome()">niklaus iff</h6>
    </div>
    <div>
      <h6 @click="goToPort()">portfolio</h6>
      <h6 @click="goToIndex()">index</h6>
      <h6 @click="goToInfo()">info</h6>
    </div>
  </div>
</template>


<script setup>
  const router = useRouter()
  function goHome() {
    router.push({ path: "/" })
  }
  function goToPort() {
    router.push({ path: "/portfolio" })
  }
  function goToIndex() {
    router.push({ path: "/indexx" })
  }
  function goToInfo() {
    router.push({ path: "/info" })
  }
</script>

<style lang="scss">
.Header-container {
	position: fixed;
  width: 100%;
  height: 8%;
  display: grid;
  grid-template-columns: 80% 20%;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  z-index: 20;
  div {
    display: flex;
    gap: 10px;
  }
}
@media (max-width: 600px) {
}
</style>
