<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      環境:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        このセットアップ関数はNode.js上でのみ動作し、NodeのAPIにアクセスすることができます。
      </span>
      <span v-else>
        このセットアップ関数はクライアント側でのみ動作します。パッケージのインポート時にはブラウザの互換性を確認してください。
      </span>
    </div>
  </details>
</template>
