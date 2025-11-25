---
depends:
  - guide/animations
relates:
  - Rough Notation: https://github.com/slidevjs/rough-notation
since: v0.48.0
tags: [描画, アニメーション]
description: |
  Rough Notation を統合して、スライド内の要素にマークやハイライトを付けることができます。
---

# Rough Markers

Slidev は [Rough Notation](https://github.com/slidevjs/rough-notation) を統合して、スライド内の要素にマークやハイライトを付けることができます。

---

### `v-mark` ディレクティブ

Rough Notation の統合には `v-mark` ディレクティブが付属しています。

#### 種類

`v-mark.underline` を使うと下線マーク、`v-mark.circle` を使うと円マークなどが付きます（デフォルトは `underline` です）。

#### 色

`v-mark.red` はマークを赤色にします。UnoCSS の組み込みカラーテーマがサポートされています。カスタムカラーを使用する場合は、オブジェクト構文 `v-mark="{ color: '#234' }"` を使用してください。

#### クリック

`v-mark` は `v-click` と同様に動作し、クリック後にトリガーされます。`v-click` と同様に、`v-mark="5"` や `v-mark="'+1'"` のようにカスタムクリック値を渡すことができます。

#### オプション

オプションとして、`v-mark` にオブジェクトを渡してオプションを指定することもできます。例えば:

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
Important text
</span>
```

#### プレビュー

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>
