---
relates:
  - Vue's Scoped CSS: https://vuejs.org/api/sfc-css-features.html#scoped-css
  - UnoCSS directives: https://unocss.dev/transformers/directives
tags: [スタイリング, 構文]
description: |
  現在のスライドのみに適用されるスタイルを定義します。
---

# スライドスコープスタイル

Markdown の `<style>` タグを使用して、**現在のスライドのみに適用される**スタイルを定義できます。

```md
# これは赤です

<style>
h1 {
  color: red;
}
</style>

---

# 他のスライドには影響しません
```

Markdown の `<style>` タグは常に [スコープ付き](https://vuejs.org/api/sfc-css-features.html#scoped-css) です。そのため、子セレクタ（`.a > .b`）はそのままでは使用できません。詳細は前述のリンクを参照してください。グローバルスタイルを適用したい場合は、[カスタマイズセクション](/custom/directory-structure#style) を参照してください。

[UnoCSS](/custom/config-unocss) によって、ネストされた CSS や [ディレクティブ](https://unocss.dev/transformers/directives) を直接使用できます:

```md
# Slidev

> Hello **world**

<style>
blockquote {
  strong {
    --uno: 'text-teal-500 dark:text-teal-400';
  }
}
</style>
```
