# Mermaid の設定

<Environment type="client" />

`./setup/mermaid.ts` を作成して、以下の内容を入力します:

```ts twoslash [setup/mermaid.ts]
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

戻り値は [Mermaid](https://mermaid.js.org/) のカスタム設定である必要があります。[Mermaid のドキュメント](https://mermaid.js.org/config/schema-docs/config.html) または型定義で完全な設定リストを参照してください。

## カスタムテーマ / スタイル

カスタム Mermaid テーマまたはスタイルを作成する場合は、次の例のように `themeVariables` を定義することでこれを行うことができます:

```ts twoslash
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // General theme variables
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Sequence diagram variables
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    }
  }
})
```

すべてのテーマ変数は [Mermaid テーマ設定](https://mermaid.js.org/config/theming.html) のページで見つけることができます。
