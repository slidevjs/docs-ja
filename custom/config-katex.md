# KaTeX の設定

<Environment type="node" />

`./setup/katex.ts` を作成して、以下の内容を入力します:

```ts twoslash [setup/katex.ts]
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    maxExpand: 2000,
    /* ... */
  }
})
```

戻り値は KaTeX のカスタムオプションである必要があります。[KaTeX のドキュメント](https://katex.org/docs/options.html) または型定義で完全なオプションリストを参照してください。
