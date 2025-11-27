# ハイライターの設定

Slidev はコードハイライターとして [Shiki](https://github.com/shikijs/shiki) を使用します。これは TextMate Grammar を使用した構文ハイライター で、VS Code と同じくらい正確です。色付きトークンを生成するための、追加の CSS は不要です。Shiki には [多くの組み込みテーマ](https://shiki.style/themes) も付属しています。Slidev では、[TwoSlash](#twoslash-integration) サポートも提供しています。

## Shiki の設定

<Environment type="both" />

`./setup/shiki.ts` ファイルを作成して、以下の内容を入力します:

```ts twoslash [setup/shiki.ts]
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

カスタムテーマまたは言語 (JSON の TextMate grammar/テーマ) を追加する場合は、セットアップファイルにそれらをインポートできます:

<!-- eslint-disable import/first-->

```ts twoslash [setup/shiki.ts]
import { defineShikiSetup } from '@slidev/types'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customLanguage from './customLanguage.tmLanguage.json'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customTheme from './customTheme.tmTheme.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

[組み込み言語](https://shiki.style/languages) と [組み込みテーマ](https://shiki.style/themes) を確認し、詳細については [Shiki のドキュメント](https://shiki.style) を参照してください。

:::info
現在のところ、Shiki Magic Move はトランスフォーマーをサポートしていません。
:::

## Prism の設定

:::warning
Prism サポートは v0.50 以降削除されました。代わりに Shiki を使用してください。
:::
