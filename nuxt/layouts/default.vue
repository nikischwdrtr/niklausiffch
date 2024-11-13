<template>
  <Menu />
  <slot />
</template>

<script setup>
import "@unocss/reset/normalize.css";
console.log("%c  ♕ niki is king ♕  ", "background: #ffffff; color: #00FF00");
</script>

<style>
html,
body {
  margin: 0;
  padding: 5px;
  overflow-x: hidden;
  font-family: monospace;
}
h1 {
  display: inline;
  font-size: 16px;
  font-family: monospace;
  margin: 0 0 0 0;
  font-weight: normal;
  line-height: 22px;
  -webkit-text-stroke: 0.4pt rgb(0,255,0);
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
h1:hover {
	cursor: pointer;
	filter: blur(0.4rem);
	color: rgb(0,255,0);
}
p {
  display: inline;
  font-size: 16px;
  margin: 0 0 0 0;
  font-weight: normal;
  line-height: 22px;
}
a {
  display: inline;
  font-size: 16px;
  margin: 0 0 0 0;
  font-weight: normal;
  line-height: 22px;
  font-style: italic;
  overflow-wrap: anywhere;
  color: rgb(0, 255, 0);
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
a:hover {
  cursor: pointer;
  filter: blur(0.4rem);
  color: rgb(0, 255, 0);
}
@media (max-width: 600px) {
  h1:hover {
    filter: blur(0);
    color: rgb(0,0,0);
  }
  a:hover {
    filter: blur(0);
  }
}
</style>
