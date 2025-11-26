# グローバルコンテキスト

Slidev は高度なナビゲーション制御のためにいくつかのグローバルコンテキスト値を注入します。

## 直接使用 {#direct-usage}

スライドまたはコンポーネント内で直接アクセスできます。

```md [slides.md]
# ページ 1

現在のページは: {{ $nav.currentPage }}
```

```vue [Foo.vue]
<template>
  <div>タイトル: {{ $slidev.configs.title }}</div>
  <button @click="$nav.next">
    次のクリック
  </button>
  <button @click="$nav.nextSlide">
    次のスライド
  </button>
</template>
```

## コンポーザブルの使用方法 {#composable-usage}

> v0.48.0 以降で利用可能

プログラム的に（また型安全に）コンテキストを取得したい場合は、`@slidev/client` からコンポーザブルをインポートできます。

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter(() => { /* ... */ })
onSlideLeave(() => { /* ... */ })
// ...
</script>
```

> [!NOTE]
> 以前は、`import { isDark } from '@slidev/client/logic/dark.ts'` のようにネストされたモジュールをインポートする使用方法が見られる場合があります。これは内部実装であり、将来変更される可能性があるため、**推奨されません**。可能な限り `@slidev/client` から公開 API を使用してください。

::: warning 注意

ファイルで `useSlideContext` コンポーザブルを使用する場合、`$slidev` の自動注入は無効になります。`useSlideContext` 関数から `$slidev` オブジェクトを手動で取得する必要があります。

:::

<SeeAlso :links="['features/slide-hook']" />

## プロパティ {#properties}

### `$slidev` {#slidev}

グローバルコンテキストオブジェクト。

### `$frontmatter` {#frontmatter}

現在のスライドのフロントマターオブジェクト。<LinkInline link="features/global-layers" /> のようなスライド外のコンポーネントではこれは空。

### `$clicks` {#clicks}

`$clicks` は現在のスライド上のクリック数を保持します。クリックに応じて、異なるコンテンツを条件付きで表示するために使用できます。

```html
<div v-if="$clicks > 3">コンテンツ</div>
```

詳細は <LinkInline link="guide/animations" /> ガイドを参照してください。

### `$nav` {#nav}

スライドナビゲーションのプロパティとコントロールを保持するリアクティブオブジェクト。例えば:

```js
$nav.next() // 次のステップに進む
$nav.nextSlide() // 次のスライドに進む (クリックをスキップ)
$nav.go(10) // スライド #10 に進む

$nav.currentPage // 現在のスライド番号
$nav.currentLayout // 現在のレイアウト名
```

利用可能なその他のプロパティについては、[`SlidevContextNav` インターフェース](https://github.com/slidevjs/slidev/blob/main/packages/client/composables/useNav.ts) を参照してください。

### `$page` {#page}

`$page` は現在のページ番号を保持し、1 から始まります。

```md
ページ: {{ $page }}

現在のページはアクティブか: {{ $page === $nav.currentPage }}
```

> [!Note]
> `$nav.clicks` はグローバルの状態ですが、`$clicks` は各スライドの中でのクリック数です。

### `$renderContext` {#render-context}

`$renderContext` は現在のレンダリングコンテキストを保持し、`slide`、`overview`、`presenter`、または `previewNext` になります。

```md
<div v-if="['slide', 'presenter'].includes($renderContext)">
  このコンテンツは主なスライド表示でのみレンダリングされます
</div>
```

[`<RenderWhen>` コンポーネント](../builtin/components#renderwhen) も使用できます。

### `$slidev.configs` {#configs}

スライドプロジェクトの設定を保持するリアクティブオブジェクト。例えば:

```md
---
title: 初めての Slidev!
---

# ページ 1

---

# 任意のページ

{{ $slidev.configs.title }} // '初めての Slidev!'
```

### `$slidev.themeConfigs` {#theme-configs}

解析されたテーマ設定を保持するリアクティブオブジェクト:

```yaml
---
title: 初めての Slidev!
themeConfig:
  primary: '#213435'
---
```

その後、テーマはプライマリカラーに次のようにアクセスできます:

```md
{{ $slidev.themeConfigs.primary }} // '#213435'
```

## 型 {#types}

プログラム的に型を取得したい場合は、`@slidev/types` から `TocItem` などの型をインポートできます。

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
