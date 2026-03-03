# Mermaid レンダラー の設定

<Environment type="client" />

1. 使用したい Mermaid ライブラリをインストールします。 例) `npm install beautiful-mermaid`
2. `./setup/mermaid-renderer.ts` を作成して、以下の内容を入力します:

```ts
// setup/mermaid-renderer.ts
import { defineMermaidRendererSetup } from '@slidev/types'
// 例. https://github.com/lukilabs/beautiful-mermaid?tab=readme-ov-file#readme
import { renderMermaid } from 'beautiful-mermaid'

export default defineMermaidRendererSetup(() => {
  return (code, _options) => renderMermaid(code)
})
```

この設定はサードパーティ製の Mermaid ライブラリを使用できるようにします。`renderMermaid()` はライブラリのレンダリング関数に置き換えてください。
