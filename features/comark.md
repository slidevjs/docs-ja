---
relates:
  - Comark Syntax: https://comark.dev/syntax/markdown
  - '@comark/markdown-it': https://github.com/comarkdown/comark
since: v0.43.0
tags: [構文, スタイリング]
description: |
  強力な構文で、マークダウンコンテンツをコンポーネントやスタイルで拡張できます。
---

# Comark 構文

Slidev は [`@comark/markdown-it`](https://github.com/comarkdown/comark) によって提供される [Comark 構文](https://comark.dev/syntax/markdown) (旧 MDC, Markdown Components) をサポートしています。

有効にするには、マークダウンファイルのフロントマターに `comark: true` を追加します。

```mdc
---
comark: true
---

これは [赤い文字です]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
**default** のスロット
::
```

詳しくは、[Comark 構文](https://comark.dev/syntax/markdown) をご覧ください。
