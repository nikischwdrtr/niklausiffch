<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
defineProps<{
  label: string;
}>();
const open = ref(false);
const trigger = ref<HTMLElement | null>(null);
let previousScroll = 0;
function toggle() {
  open.value = !open.value;
}
watch(open, async (val) => {
  if (!trigger.value) return;

  if (val) {
    previousScroll = window.scrollY;
    await nextTick();
    trigger.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    window.scrollTo({
      top: previousScroll,
      behavior: "smooth",
    });
  }
});
</script>

<template>
  <div class="relative">
    <span ref="trigger" @click="toggle" class="cursor-pointer select-none">
      {{ label }}
    </span>
    <Transition name="fade-slide">
      <div
        v-show="open"
        class="absolute z-50 top-full left-0 mt-2 w-[35vw] max-sm:top-0 max-sm:left-[6rem] max-sm:mt-0 max-sm:w-[calc(100vw-6rem)]"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
