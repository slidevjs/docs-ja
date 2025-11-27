---
aside: false
---

<script setup>
import ThemeGallery from '../.vitepress/theme/components/ThemeGallery.vue'
</script>

# テーマギャラリー

Slidev で利用可能な素晴らしいテーマをここで参照してください。

<LinkInline link="guide/theme-addon#use-theme" />でそれらを使用する方法について詳しく読み、<LinkInline link="guide/write-theme" />で独自のテーマを作成してください。

## 公式テーマ {#official-themes}

<ClientOnly>
  <ThemeGallery collection="official"/>
</ClientOnly>

## コミュニティテーマ {#community-themes}

これらはコミュニティによって厳選されたテーマです。

<!-- Edit in ./docs/.vitepress/themes.ts -->
<ClientOnly>
  <ThemeGallery collection="community"/>
</ClientOnly>

## その他のテーマ {#more-themes}

[NPM で利用可能なすべてのテーマ](https://www.npmjs.com/search?q=keywords%3Aslidev-theme) を見つけてください。
