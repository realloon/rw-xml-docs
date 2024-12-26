<script setup lang="ts">
import AppAside from './components/AppAside';
import { useStore } from '@/stores/store'
const store = useStore()

// Init.
if (!store.version) {
  console.log('FETCH: "@/assets/db.json"')

  import('@/assets/db.json?raw')
    .then(res => res.default)
    .then(JSON.parse)
    .then(db => {
      store.version = db.version
      store.rels = db.rels
    })
}

const tags = Object.keys(store.rels).sort()
</script>

<template>
  <AppAside :tags="tags"/>

  <RouterView />
</template>
