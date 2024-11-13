<script setup lang="ts">
  const { data } = await useAsyncData(() => queryContent('menu').findOne())
  const dataVal = data.value.body
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] gap-40">
    <NuxtLink to="/" class="text-black no-underline not-italic block"><h1>{{ dataVal[0] }}</h1></NuxtLink>
    <div>
      <template v-for="(data, index) in dataVal">
        <template v-if="index > 0">
          <p>{{ data }}; </p>
        </template>
      </template>
    </div>
  </div>
</template>