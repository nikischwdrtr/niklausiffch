<script setup lang="ts">
console.log("%c ♕ niki is king ♕", "background: #00FF00; color: #ffffff");
function refresh() {
  window.location.reload();
}
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center max-sm:items-start max-sm:justify-start"
  >
    <div class="flex gap-2 items-center max-sm:flex-col max-sm:items-start">
      <h1 @click="refresh()">niklaus iff</h1>
      <p>*1996</p>
      <Dropdown label="cv" class="max-sm:raw-trigger">
        <CV class="max-sm:raw-drop" />
      </Dropdown>
      <a href="niklausiff_selectedworks.pdf" target="_blank">
        selected works
      </a>
      <Dropdown label="statement" class="max-sm:raw-trigger">
        <Statement class="max-sm:raw-drop raw-overlap" />
      </Dropdown>
      <a href="mailto:admin@niklausiff.ch">mail</a>
      <a href="https://www.instagram.com/niklausiff/" target="_blank">
        instagram
      </a>
      <a href="https://soundcloud.com/jebemtimaiku" target="_blank">
        soundcloud
      </a>
      <a href="https://archive.niklausiff.rip" target="_blank">archive</a>
    </div>
  </div>
</template>
