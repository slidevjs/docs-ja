---
relates:
  - Nuxt's MDC Syntax: https://content.nuxt.com/docs/files/markdown#mdc-syntax
  - markdown-it-mdc: https://github.com/antfu/markdown-it-mdc
since: v0.43.0
tags: [構文, スタイリング]
description: |
  強力な構文で、マークダウンコンテンツをコンポーネントやスタイルで拡張できます。
---

# MDC 構文

Slidev は [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc) によって提供されるオプションの [MDC (Markdown Components) 構文](https://content.nuxt.com/docs/files/markdown#mdc-syntax) をサポートしています。

有効にするには、マークダウンファイルのフロントマターに `mdc: true` を追加します。

```mdc
---
mdc: true
---

これは [赤い文字です]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
**default** のスロット
::
```

詳しくは、[MDC 構文](https://content.nuxt.com/docs/files/markdown#mdc-syntax) をご覧ください。