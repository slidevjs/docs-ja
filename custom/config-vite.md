# Vite とプラグインの設定

<Environment type="node" />

Slidev は、内部で [Vite](https://vitejs.dev/) を使用しています。これは Vite の優れたプラグインシステムを活用して、スライドをさらにカスタマイズできることを意味しています。

`vite.config.ts` がある場合、Slidev、テーマ、アドオンが提供する Vite 設定とマージされます。

## 内部プラグインの設定

Slidev は Vite に以下のプラグインを内部的に追加します:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/unplugin/unplugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

上記の組み込みプラグインを設定するには、以下の内容で `vite.config.ts` を作成します。Slidev にはこれらのプラグイン用の [デフォルト設定](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/vite/index.ts) があることに注意してください。この使用法はそれらの一部をオーバーライドし、アプリを破壊する可能性があります。**高度な機能**として扱い、設定する前に何をしているのかを確認してください。

<!-- eslint-disable import/first -->

```ts twoslash [vite.config.ts]
/// <reference types="@slidev/types" />
import type MarkdownIt from 'markdown-it'

declare const MyPlugin: (md: any) => void
// ---cut---
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(MyPlugin)
      },
    },
    /* options for other plugins */
  },
})
```

[型宣言](https://github.com/slidevjs/slidev/blob/main/packages/types/src/vite.ts#L11) でさらに多くのオプションを参照してください。

::: warning
Slidev によって内部的に使用されたプラグインを再度追加することは許可されていません。例えば、以下のような形は避けてください

```ts twoslash
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue({
      /* vue options */
    })
  ],
})
```

この代わりに、Vue オプションを `slidev.vue` フィールドに渡してください
:::

## スライドデータに基づいてカスタムプラグインを追加する

通常、`vite.config.ts` に Vite プラグインを追加できます (上記を参照)。
ただし、スライドデータに基づいてプラグインを追加する場合は、以下の内容で `./setup/vite-plugins.ts` を追加する必要があります:

```ts twoslash
import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup((options) => {
  return [
    // Your plugins here
    // Slide data is available as options.data.slides
  ]
})
```
