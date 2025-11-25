---
relates:
  - Iconify: https://iconify.design/
  - Icones: https://icones.js.org/
  - unplugin-icons: https://github.com/antfu/unplugin-icons
tags: [コンポーネント]
description: |
  ほぼすべてのオープンソースアイコンセットのアイコンを、対応するパッケージをインストールするだけでマークダウン内で直接使用できます。
---

# アイコン

Slidev は、[`unplugin-icons`](https://github.com/antfu/unplugin-icons) と [Iconify](https://iconify.design/) を使用して、対応するパッケージをインストールするだけで、ほぼすべてのオープンソースアイコンセットに**直接**アクセスできます。

命名規則は [Iconify](https://iconify.design/) の `{collection-name}-{icon-name}` に従っています。例えば:

- `<mdi-account-circle />` - <mdi-account-circle /> [Material Design Icons](https://github.com/Templarian/MaterialDesign) から - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) から - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> [Unicons Monochrome](https://github.com/Iconscout/unicons) から - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> [Twemoji](https://github.com/twitter/twemoji) から - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> [SVG Logos](https://github.com/gilbarbara/logos) から - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- 他にもたくさん。

::: code-group

```bash [pnpm]
pnpm add @iconify-json/[the-collection-you-want]
```

```bash [npm]
npm install @iconify-json/[the-collection-you-want]
```

```bash [yarn]
yarn add @iconify-json/[the-collection-you-want]
```

```bash [bun]
bun add @iconify-json/[the-collection-you-want]
```

```bash [deno]
deno add jsr:@iconify-json/[the-collection-you-want]
```

:::

Slidev は [Iconify](https://iconify.design) をアイコンのデータソースとして使用しています。対応するアイコンセットを `dependencies` に `@iconify-json/*` パターンでインストールする必要があります。例えば、[Material Design Icons](https://materialdesignicons.com/) は `@iconify-json/mdi` パッケージ、[Tabler](https://tabler-icons.io/) は `@iconify-json/tabler` パッケージ、などです。利用可能なすべてのコレクションについては、[Icônes](https://icones.js.org/) または [Iconify](https://icon-sets.iconify.design/) を参照できます。

### アイコンにスタイルを適用する

他の HTML 要素と同様に、アイコンにスタイルを適用できます。例えば:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />
