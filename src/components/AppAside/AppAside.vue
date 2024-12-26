<script setup lang="ts">
import { computed, ref } from 'vue'
import emitter from '@/utils/emitter'

const props = defineProps<{
  tags: Array<string>
}>()

const keyword = ref<string>('')
const filtered = computed(() =>
  props.tags.filter(tag => tag.includes(keyword.value))
)
</script>

<template>
  <aside>
    <h1>XML Docs</h1>
    <form>
      <input type="search" v-model="keyword" />
    </form>
    <nav>
      <li @click="$router.push(`/docs/${tag}`)" v-for="tag in filtered">{{ tag }}</li>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  flex-basis: 320px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  padding: 24px 16px;
  background-color: #202329;
}

h1 {
  margin: 0;
}

nav {
  font-size: 1rem;
  font-family: var(--mono);

  li {
    line-height: 2;
    list-style: none;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
