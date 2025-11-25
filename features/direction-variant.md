---
relates:
  - UnoCSS Variants: https://unocss.dev/config/variants#variants
since: v0.48.0
tags: [遷移, スタイル]
description: |
  遷移の方向に基づいて異なるスタイルやアニメーションを適用します。
---

# 遷移方向に基づくスタイル

遷移するときに、進めるか戻るかで異なるクラスを適用したいときがあるかもしれません。`.slidev-nav-go-forward` または `.slidev-nav-go-backward` クラスを使うと、ナビゲーション時にスライドコンテナに適用され、異なるスタイルやアニメーションを適用できます:

```css
/* 例: 進めるときにのみ transition-delay を適用し、戻るときには適用しない */
.slidev-nav-go-forward .slidev-vclick-target {
  transition-delay: 500ms;
}
.slidev-nav-go-backward .slidev-vclick-target {
  transition-delay: 0;
}
```

より簡単に適用できるように、いくつかの [UnoCSS バリアント](https://github.com/slidevjs/slidev/blob/6adcf2016b8fb0cab65cf150221f1f67a76a2dd8/packages/client/uno.config.ts#L32-L38) も提供しています。`forward:` または `backward:` プレフィックスを任意の UnoCSS クラスに追加することで、特定の遷移方向でのみスタイルを有効にできます:

```html
<div v-click class="transition delay-300">要素</div> // [!code --]
<div v-click class="transition forward:delay-300">要素</div> // [!code ++]
```

上記の例では、アニメーションは進む方向に遷移するときにのみ `delay-300` が適用されます。
