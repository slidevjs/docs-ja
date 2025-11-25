---
depends:
  - guide/syntax#code-block
  - guide/animations
tags: [コードブロック, アニメーション]
description: |
  コードブロック中の特定の行を、クリックをもとにハイライトできます。
---

# 行のハイライト

特定の行をハイライトするには、単に波括弧 `{}` 内に行番号を追加します。行番号はデフォルトで 1 からカウントされます。

````md
```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

## 動的なハイライト

複数回のクリックでハイライトを変更するには、`|` を使って各段階を区切ります。

````md
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

これは最初に `a: Ref<number> | number` と `b: Ref<number> | number` をハイライトし、1 回クリックすると `return computed(() => unref(a) + unref(b))` がハイライトされ、最後にブロック全体がハイライトされます。

行番号に `hide` を設定するとコードブロックを非表示にし、`none` を設定すると行をハイライトしません:

````md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

::: tip
詳しくは、[クリックアニメーションガイド](/guide/animations#positioning) をご覧ください。
:::
