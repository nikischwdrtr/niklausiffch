import { defineStore } from 'pinia'
export const useCV = defineStore('cv', () => {
  const cv = ref(false)
  function setCV() {
    if (cv.value == false) {
      cv.value = true
    } else {
      cv.value = false
    }
  }
  function disableCV() {
    cv.value = false
  }
  return {setCV, disableCV, cv}
})