---
depends:
  - guide/syntax#importing-slides
  - features/importing-slides
tags: [構文]
description: |
  複数の Markdown ファイルからフロントマターを結合します。
---

# フロントマターの統合

エントリーポイントと外部の Markdown ページの両方からフロントマターを提供できます。重複するキーがある場合、**エントリーポイントのものが優先されます**。例えば:

::: code-group

```md [./slides.md]
---
src: ./cover.md
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---
```

```md [./cover.md]
---
layout: cover
background: https://sli.dev/foo.png // [!code highlight]
---

# Cover

カバーページ
```

:::

それらは最終的に次のページと同等になります:

```md
---
layout: cover
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---

# Cover

カバーページ
```
