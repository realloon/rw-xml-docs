import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'store',
  () => {
    const version = ref()
    const rels = ref()

    return { version, rels }
  },
  { persist: true }
)
