<template>
  <div class="license-container">
    <Menu class="license-menu" />
    <License />
  </div>
</template>

<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
</script>

<style lang="scss">
.license-container {
  width: 100%;
  overflow-x: hidden;
}
.flex-menu {
  display: none;
}
@media (max-width: 600px) {
  .license-menu {
    display: none;
  }
}
</style>
