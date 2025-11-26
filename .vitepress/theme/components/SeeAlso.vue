<script setup lang="ts">
defineProps<{
  links: string[]
}>()
</script>

<template>
  <div class="op-90 mb--1">
    参照:
  </div>
  <LinkCard v-for="link in links" :key="link" :link="link" />
</template>
