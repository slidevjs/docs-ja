# ルートの設定

<Environment type="client" />

Slidev アプリにカスタムページを追加します。

## 使用方法

`./setup/routes.ts` ファイルを以下の内容で作成します:

```ts twoslash [./setup/routes.ts]
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      // ---cut-start---
      // @ts-expect-error missing types
      // ---cut-end---
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

ルートについて、詳しくは [Vue ルーターのドキュメント](https://router.vuejs.org/) をご覧ください。
