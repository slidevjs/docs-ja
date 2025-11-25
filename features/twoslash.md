---
depends:
  - guide/syntax#code-block
relates:
  - TwoSlash: https://twoslash.netlify.app/
since: v0.46.0
tags: [コードブロック]
description: |
  TypeScript の型情報をホバーやインラインで表示できる強力なツールです。
---

# TwoSlash 統合

[TwoSlash](https://twoslash.netlify.app/) は、TypeScript のコードブロックに型情報をホバーやインラインで表示できる強力なツールです。JavaScript/TypeScript 関連のトピックのスライド作成に非常に便利です。

TwoSlash を使用するには、コードブロックの言語識別子に `twoslash` を追加します:

````md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
````

これは、次のようにレンダリングされます:

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```

<!-- ポップアップが下のコンテンツと重ならないように -->
<div class="py-20" />
