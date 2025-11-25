---
depends:
  - guide/syntax#code-block
tags: [コードブロック, レイアウト]
description: |
  コードブロックの最大の高さを設定し、スクロールを有効にします。
---

# 高さ制限

もしコードが 1 スライドに収まらない場合、`maxHeight` を使用して固定の高さを設定し、スクロールを有効にできます:

````md
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...大量のコード
const c = add(1, 2)
```
````

`{*}` を使用して、<LinkInline link="features/line-highlighting" /> のプレースホルダーとして使用できます:

````md
```ts {*}{maxHeight:'100px'}
// ...
```
````
