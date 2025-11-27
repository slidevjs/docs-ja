# Vue アプリの設定

<Environment type="client" />

Slidev は [Vue 3](https://v3.vuejs.org/) を使用してクライアント側でアプリケーションをレンダリングします。カスタムプラグインまたは設定を追加することでアプリを拡張できます。

`./setup/main.ts` を作成して、以下の内容を入力します:

<!-- eslint-disable import/first -->

```ts twoslash [setup/main.ts]
import type { Plugin } from 'vue'

declare const YourPlugin: Plugin
// ---cut---
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

これはアプリが開始される前に初期化を行うための Slidev アプリの主な入り口として使用することもできます。

詳細: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component).
