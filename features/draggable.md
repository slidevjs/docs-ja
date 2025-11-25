---
tags: [レイアウト]
description: |
  マウスでドラッグして要素を移動、サイズ変更、回転できます。
---

# ドラッグ可能な要素

ドラッグ可能な要素は、マウスでドラッグして要素を移動、サイズ変更、回転する機能を提供します。これはスライド内で浮動要素を作成するのに便利です。

## ディレクティブの使い方

### フロントマターからのデータ

```md
---
dragPos:
  square: Left,Top,Width,Height,Rotate
---

<img v-drag="'square'" src="https://sli.dev/logo.png">
```

### ディレクティブの値からのデータ

::: warning 注意
Slidev は正規表現を使用して、スライドコンテンツ内の位置の値を更新します。問題が発生した場合は、代わりにフロントマターを使用して値を定義してください。
:::

```md
<img v-drag="[Left,Top,Width,Height,Rotate]" src="https://sli.dev/logo.png">
```

## コンポーネントの使い方

### フロントマターからのデータ

```md
---
dragPos:
  foo: Left,Top,Width,Height,Rotate
---

<v-drag pos="foo" text-3xl>
  <div class="i-carbon:arrow-up" />
  `v-drag` コンポーネントを使用して、ドラッグ可能なコンテナを作成します！
</v-drag>
```

### props からのデータ

```md
<v-drag pos="Left,Top,Width,Height,Rotate" text-3xl>
  <div class="i-carbon:arrow-up" />
  `v-drag` コンポーネントを使用して、ドラッグ可能なコンテナを作成します！
</v-drag>
```

## ドラッグ可能な要素の作成

ドラッグ可能な要素を新しく作成するとき、位置の値を指定する必要はありません（フロントマターを使用したい場合は位置の名前を指定する必要があります）。Slidev は自動的に初期位置の値を生成します。

## 高さの自動調整

`Height` を `NaN`（ディレクティブの場合）または `_`（コンポーネントの場合）に設定すると、ドラッグ可能な要素の高さはコンテンツの高さに自動的に調整されます。

## コントロール

- ダブルクリックしてドラッグを開始します。
- 矢印キーでも要素を移動できます。
- `Shift` キーを押しながらドラッグして、要素の縦横比を維持します。
- ドラッグ可能な要素の外側をクリックして、ドラッグを停止します。

## ドラッグ可能な矢印

`<v-drag-arrow>` コンポーネントは、ドラッグ可能な矢印を作成します。次のように使用します:

```md
<v-drag-arrow />
```

ドラッグ可能な矢印要素が表示されます。他の props は [the `Arrow` component](/builtin/components#arrow) と同じです。