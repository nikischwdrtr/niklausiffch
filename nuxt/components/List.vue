<template>
  <div class="List-container">
    <div>
      <h6 @click="goHome()">{{listName}}</h6>
    </div>
  </div>
</template>


<script setup>
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  console.log('♕ niki is king ♕')
  console.log('♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱')
  const route = useRoute()
  const router = useRouter()
  let currentPath = route.path
  let listName = ''
  if (currentPath == '/') {
    listName = 'niklaus iff'
  } else if (currentPath.indexOf('/portfolio/') > -1) {
    listName = 'niklaus iff'
  } else if (currentPath.indexOf('/work/') > -1) {
    listName = 'niklaus iff'
  } else {
    listName = currentPath.replace('/', '');
  }
  function goHome() {
    if (currentPath != '/') {
      router.back()
    } else if (currentPath.indexOf('/portfolio/') > -1) {
      router.push({ path: "/portfolio" })
    } else {
      router.push({ path: "/" })
    }
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
  line-height: .9;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    filter: blur(0.8rem);
  }
}
@media (max-width: 600px) {
  .List-container {
    width: 100%;
    filter: blur(0.2rem);
  } 
}
</style>
