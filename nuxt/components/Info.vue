<template>
  <div class="Info-container">
    <div>
      <h6>get well soon</h6>
      <img src="/images/well.jpg">
    </div>
  </div>
</template>

<script setup>
  const router = useRouter()
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  index.forEach((item, i) => {
    index[i].push(i)
  })
</script>

<style lang="scss">
.Info-container {
  width: 100%;
  div {
    position: absolute;
    width: 50%;
    top: 1%;
    left: 50%;
    transform: translate(-50%,0);
    h6 {
      display: block;
      width: fit-content;
    }
    img {
      margin-left: 20px;
      width: 40%;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      &:hover {
        cursor: crosshair;
		    filter: blur(0.4rem) invert(1);
      }
    }
  }
}
@media (max-width: 600px) {
  .Info-container {
    div {
      left: 70%;
      img {
        width: 90%;
      }
    }
  }
}
</style>