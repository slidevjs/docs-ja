<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      環境:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'both'">
        このセットアップ関数は、Node.js とクライアントの<b>両方</b>で実行されます。ランタイムエラーを防ぐために、Node.js や DOM の API の使用は避けてください。
      </span>
      <span v-else-if="type === 'node'">
        このセットアップ関数は、Node.js 環境でのみ実行されます。Node.js の API にアクセスできます。
      </span>
      <span v-else-if="type === 'client'">
        このセットアップ関数は、クライアント環境でのみ実行されます。パッケージをインポートする際はブラウザの互換性に注意してください。
      </span>
    </div>
  </details>
</template>
