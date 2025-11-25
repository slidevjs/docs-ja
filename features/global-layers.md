---
tags: [遷移, レイアウト]
description: |
  スライド間で持続するカスタムコンポーネントを作成します。
---

# グローバルレイヤー

グローバルレイヤーを使用すると、スライド間で**持続する**カスタムコンポーネントを作成できます。これは、フッター、スライド間のアニメーション、グローバルエフェクトなどに役立ちます。

Slidev は 3 つのレイヤーを提供しています。プロジェクトルートに `global-top.vue`、`global-bottom.vue`、または `custom-nav-controls.vue` を作成すると、自動的に認識されます。

`slide-top.vue` と `slide-bottom.vue` は**各スライド**のレイヤーです。使用法はグローバルレイヤーと似ていますが、各スライドに適用されるため、複数のインスタンスが存在する可能性があります。

::: tip
`global-top.vue` または `global-bottom.vue` が現在の遷移状態に依存している場合、エクスポート時には `--per-slide` オプションを使用して、各スライドの状態が適用されるようにする必要があります。あるいは、代わりに `slide-top.vue` と `slide-bottom.vue` を使用することもできます。
:::

## レイヤーの関係

Z 軸上で、上から下に次の順序でレイヤーが配置されます:

- ナビゲーションコントロール
  - カスタマイズナビゲーション (`custom-nav-controls.vue`)
- グローバルトップ (`global-top.vue`) - 1 つのインスタンス
- スライドトップ (`slide-top.vue`) - 各スライドに 1 つのインスタンス
- スライドコンテンツ
- スライドボトム (`slide-bottom.vue`) - 各スライドに 1 つのインスタンス
- グローバルボトム (`global-bottom.vue`) - 1 つのインスタンス

## 例

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">あなたの名前</footer>
</template>
```

`あなたの名前` はすべてのスライドに表示されます。

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <div class="i-carbon:arrow-right" />
  </button>
</template>
```

ナビゲーションコントロールに `Next` ボタンが追加されます。

条件付きで有効にするには、<LinkInline link="guide/global-context" /> を使用できます

```html
<!-- 4 ページ目でフッターを隠す -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    あなたの名前
  </footer>
</template>
```

```html
<!-- "cover" レイアウトでフッターを隠す -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    あなたの名前
  </footer>
</template>
```

```html
<!-- ページ用のフッターの例 -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- プレゼンターモードでボタンを隠す -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <div class="i-carbon:arrow-right" />
  </button>
</template>
```
