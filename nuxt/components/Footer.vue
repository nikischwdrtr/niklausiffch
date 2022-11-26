<template>
  <div class="Footer-container">
    <div>
    </div>
    <div>
      <a href="https://github.com/nikischwdrtr" target="_blank">github</a>
      <a href="https://www.instagram.com/niklausiff/" target="_blank">instagram</a>
      <a href="https://soundcloud.com/jebemtimaiku" target="_blank">soundcloud</a>
    </div>
    <div>
      <a href="https://goo.gl/maps/E5dJJQvibnJyJBme7" target="_blank">züri</a>
      <a href="https://www.paypal.com/donate/?hosted_button_id=CRUUEFRRP2G78" target="_blank">donate</a>
      <a href="https://niklausiff.ch/license" target="_blank">all rights outgoing</a>
    </div>
    <div>
      <a href="https://de.wikipedia.org/wiki/Neuhausen_am_Rheinfall" target="_blank">8212</a>
      <a href="https://niklausiff.ch/license" target="_blank">copyleft</a>
      <a href="mailto:admin@niklausiff.ch">admin@niklausiff.ch</a>
    </div>
    <div>
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
.Footer-container {
  display: grid;
  width: 100%;
  height: 10vh;
  grid-template-columns: 7% 40% 30% 20%;
  a {
    display: block;
  }
}
@media (max-width: 600px) {
  .Footer-container {
    height: 10vh;
    grid-template-columns: 10% 35% 35% 20%;
  }
}
</style>
