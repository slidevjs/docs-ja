---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/zoom-slide
tags: [レイアウト]
description: |
  一部の要素のサイズを拡大縮小するためのコンポーネント。
---

# `Transform` コンポーネント

`Transform` コンポーネントを使用すると、スライド上の要素のサイズを拡大縮小できます。

```md
<Transform :scale="0.5" origin="top center">
  <YourElements />
</Transform>
```

これは、スライド全体のレイアウトに影響を与えずに、スライド上の一部の要素のサイズを調整したい場合に便利です。

プレゼンテーション内のすべてのスライドを拡大縮小するには、スライドキャンバスのサイズを設定できます。

<LinkCard link="features/canvas-size" />

プレゼンテーション内のいくつかのスライドを拡大縮小するには、`zoom` オプションを使用できます。

<LinkCard link="features/zoom-slide" />
