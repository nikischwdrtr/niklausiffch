<template>
  <div class="work1-container">
    <Menu class="work1-menu" />
    <Work />
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
</script>

<style lang="scss">
.work1-container {
  width: 100%;
  overflow-x: hidden;
}
.work1-menu {
  display: flex;
}
@media (max-width: 600px) {
  .work1-menu {
    display: none;
  }
}
</style>
