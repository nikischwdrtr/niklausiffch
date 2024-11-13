<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="flex flex-col">
    <p>error {{ error.statusCode }}</p>
    <NuxtLink to="/">back home </NuxtLink>
  </div>
</template>