<template>
  <div class="cv-container">
    <Menu class="cv-menu" />
    <CV />
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
</script>

<style lang="scss">
.cv-container {
  width: 100%;
  overflow-x: hidden;
}
.cv-menu {
  display: flex;
}
@media (max-width: 600px) {
  .cv-menu {
    display: none;
  }
}
</style>
