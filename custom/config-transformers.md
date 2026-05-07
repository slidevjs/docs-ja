# トランスフォーマーの設定

<Environment type="node" />

このセットアップ関数を使用すると、**各スライド**の Markdown コンテンツ用のカスタムトランスフォーマーを定義できます。カスタム Markdown 構文を追加し、カスタムコードブロックをレンダリングする場合に便利です。開始するには、以下の内容で `./setup/transformers.ts` ファイルを作成します:

```ts twoslash [setup/transformers.ts]
import { defineCodeblockTransformer, defineMarkdownTransformer, defineTransformersSetup } from '@slidev/types'
import lz from 'lz-string'

const mySyntax = defineMarkdownTransformer((ctx) => {
  console.log('index in presentation', ctx.slide.index)
  ctx.s.replace(
    /^\[\[\[(.*)\]\]\]/gm,
    (full, content) => {
      return `...`
    },
  )
})

const myCodeblock = defineCodeblockTransformer((ctx) => {
  if (ctx.info.startsWith('myblock')) {
    console.log('index in presentation', ctx.slide?.index)
    return `<MyBlockRenderer code="${lz.compressToEncodedURIComponent(ctx.code)}" />`
  }
})

export default defineTransformersSetup(() => {
  return {
    // これは Markdown がパースされる前に、スライドごとに適用されます
    pre: [mySyntax],
    // これは Markdown のコードブロックごとに適用されます
    codeblocks: [myCodeblock],
  }
})
```

> [!NOTE]
> よりロバスト性をもたせるため、可能であれば markdown-it プラグインとして `pre` トランスフォーマーを実装してください。
