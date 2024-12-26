<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/stores/store'
const route = useRoute()
const store = useStore()

const tag = computed(() => route.params.tag as string)
const rel = computed(() => store.rels[tag.value])

console.log(rel.value)
</script>

<template>
  <article>
    <header>
      <h1><{{ tag }}></h1>
    </header>

    <div class="wrapper">
      <section v-show="rel.parents.length > 0">
        <h2>Parent</h2>
        <form>
          <input type="search" />
        </form>
        <ul>
          <li
            @click="$router.push(`/docs/${item}`)"
            class="link"
            v-for="item in rel.parents"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <section v-show="rel.children.length > 0">
        <h2>Children</h2>
        <form>
          <input type="search" />
        </form>
        <ul>
          <li
            @click="$router.push(`/docs/${item}`)"
            class="link"
            v-for="item in rel.children"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <section v-show="rel.values.length > 0">
        <h2>Values</h2>
        <form>
          <input type="search" />
        </form>
        <ul>
          <li v-for="item in rel.values">
            {{ item }}
          </li>
        </ul>
      </section>

      <section v-show="Object.keys(rel.attributes).length > 0">
        <h2>Attributes</h2>
        <form>
          <input type="search" />
        </form>
        <details v-for="[attr, values] in Object.entries(rel.attributes)">
          <summary>{{ attr }}</summary>
          <ul>
            <li v-for="value in values">{{ value }}</li>
          </ul>
        </details>
      </section>
    </div>
  </article>
</template>

<style scoped>
article {
  box-sizing: border-box;
  height: 100vh;
  margin-left: 6rem;
  padding-block: 24px;
  overflow: auto;
  flex-grow: 1;
}

header {
  display: flex;
  align-items: center;
  height: 48px;
  /* position: sticky;
  top: 0; */

  h1 {
    line-height: 1;
  }
}

h1 {
  font-family: var(--mono);
}

.wrapper {
  display: flex;
  gap: 5rem;

  h2 {
    font-family: serif;
  }

  ul {
    padding-inline-start: 0;
    font-family: var(--mono);
  }
}

.link:hover {
  text-decoration: underline;
  cursor: pointer;
}

li {
  line-height: 2;
}
</style>
