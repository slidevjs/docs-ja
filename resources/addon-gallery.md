---
aside: false
---

<script setup>
import AddonGallery from '../.vitepress/theme/components/AddonGallery.vue'
</script>

# アドオンギャラリー

Slidev で利用可能な素晴らしいアドオンをここで参照してください。

<LinkInline link="guide/theme-addon#use-addon" />でそれらを使用する方法について詳しく読み、<LinkInline link="guide/write-addon" />で独自のアドオンを作成してください。

## 公式アドオン

<ClientOnly>
  <AddonGallery collection="official"/>
</ClientOnly>

## コミュニティアドオン

これらはコミュニティによって厳選されたアドオンです。

<!-- Edit in ./docs/.vitepress/addons.ts -->
<ClientOnly>
  <AddonGallery collection="community"/>
</ClientOnly>

## その他のアドオン

[NPM で利用可能なすべてのアドオン](https://www.npmjs.com/search?q=keywords%3Aslidev-addon) を見つけてください。
