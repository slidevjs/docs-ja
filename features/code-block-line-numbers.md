---
depends:
  - guide/syntax#code-block
tags: [コードブロック]
description: |
  すべてのコードブロックで、または個別に行番号を有効にできます。
---

# 行番号

すべてのコードブロックで行番号を有効にするには、ヘッドマターで `lineNumbers: true` を設定します。個別のコードブロックで有効にするには、`lines: true` を設定します。

`{startLine: number}` を使用して、各コードブロックの開始行を設定し、それに応じて行をハイライトすることもできます。デフォルトは 1 です。

````md
```ts {6,7}{lines:true,startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

`{*}` を使用して、<LinkInline link="features/line-highlighting" /> のプレースホルダーとして使用できます:

````md
```ts {*}{lines:true,startLine:5}
// ...
```
````
