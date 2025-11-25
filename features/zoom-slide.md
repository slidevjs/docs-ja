---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/transform-component
tags: [レイアウト]
description: |
  スライドの内容を特定のスケールにズームします。
---

# スライドをズームする

プレゼンテーションの中には、スライドの内容が広すぎたり、逆に詰まりすぎていると感じることがあります。Slidev では、各スライドに対して `zoom` オプションを設定することで、スライドの内容をスケール調整できます。

```md
---
zoom: 0.8
---

# たくさんのコンテンツがあるスライド

---

# 他のスライドには影響しません
```

すべてのスライドのスケールを調整するには、スライドキャンバスのサイズを設定できます。

<LinkCard link="features/canvas-size" />

スライド上の一部の要素のサイズを調整するには、`Transform` コンポーネントを使用できます。

<LinkCard link="features/transform-component" />
