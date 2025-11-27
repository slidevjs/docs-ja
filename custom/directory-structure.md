# ディレクトリ構造

Slidev は、設定対象領域を最小限に抑え、機能拡張を柔軟かつ直感的にするため、いくつかのディレクトリ構造の慣例を採用しています。

通常のディレクトリ構造は以下のとおりです:

```bash
your-slidev/
  ├── components/       # custom components
  ├── layouts/          # custom layouts
  ├── public/           # static assets
  ├── setup/            # custom setup / hooks
  ├── snippets/         # code snippets
  ├── styles/           # custom style
  ├── index.html        # injections to index.html
  ├── slides.md         # the main slides entry
  └── vite.config.ts    # extending vite config
```

すべて任意です。

## コンポーネント

パターン: `./components/*.{vue,js,ts,jsx,tsx,md}`

<LinkCard link="guide/component" />

## レイアウト

パターン: `./layouts/*.{vue,js,ts,jsx,tsx}`

<LinkCard link="guide/layout" />

## Public

パターン: `./public/*`

このディレクトリのアセットは開発中にルートパス `/` で提供され、dist ディレクトリのルートにそのままコピーされます。詳細は [アセットの処理](../guide/faq#assets-handling) を確認してください。

## スタイル

パターン: `./style.css` | `./styles/index.{css,js,ts}`

この規約に従うファイルはアプリルートに注入されます。複数の CSS エントリをインポートする必要がある場合は、次の構造を作成し、インポート順序を自分で管理できます。

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

スタイルは [UnoCSS](https://unocss.dev/) と [PostCSS](https://postcss.org/) で処理されるため、CSS ネストと [at-directives](https://unocss.dev/transformers/directives#apply) とネストされた CSS をそのまま使用できます。例えば:

<!-- eslint-skip -->

```css
.slidev-layout {
  --uno: px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    --uno: select-none;
  }

  pre, code {
    --uno: select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

構文についての詳細は [こちら](https://unocss.dev/transformers/directives#apply) を確認してください。

## `index.html`

パターン: `index.html`

`index.html` は、メイン `index.html` にメタタグおよび / またはスクリプトを注入する機能を提供します

たとえば、次のカスタム `index.html` の場合:

```html [index.html]
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

最終的にホストされる `index.html` は:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## グローバルレイヤー

パターン: `global-top.vue` | `global-bottom.vue` | `custom-nav-controls.vue` | `slide-top.vue` | `slide-bottom.vue`

<LinkCard link="features/global-layers" />
