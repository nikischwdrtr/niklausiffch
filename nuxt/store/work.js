import { defineStore } from 'pinia'
export const useWork = defineStore('work', () => {
  const work = ref()
  const workOn = ref(false)
  function showWork(currentWork) {
    if (workOn.value == false) {
      workOn.value = true
    } else if (currentWork == work.value) {
      workOn.value = false
    }
  }
  function disableWork() {
    workOn.value = false
  }
  function setWork(getWork) {
    work.value = getWork
  }
  return {setWork, showWork, disableWork, work, workOn}
})