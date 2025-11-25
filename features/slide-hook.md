---
depends:
  - guide/global-context
tags: [client-api]
description: |
  スライドのライフサイクルを管理するためのフック。
---

# スライドフック

Slidev は、スライドのライフサイクルを管理するための一連のフックを提供しています:

```ts twoslash
import { onSlideEnter, onSlideLeave, useIsSlideActive } from '@slidev/client'

const isActive = useIsSlideActive()

onSlideEnter(() => {
  /* アクティブになったときに呼び出されます */
})

onSlideLeave(() => {
  /* 非アクティブになったときに呼び出されます */
})
```

<LinkInline link="guide/global-context" /> を使用して、他の便利なコンテキスト情報にアクセスすることもできます。

::: warning 注意

スライドコンポーネントでは、`onMounted` と `onUnmounted` フックは利用できません。なぜなら、スライドがアクティブでない場合でもコンポーネントインスタンスは保持されるからです。代わりに `onSlideEnter` と `onSlideLeave` を使用してください。

:::
