---
relates:
  - features/monaco-write
  - features/monaco-editor
since: v0.47.0
tags: [コードブロック, 構文]
description: |
  既存のファイルからコードスニペットをインポートしてスライドに挿入します。
---

# コードスニペットのインポート

既存のファイルからコードスニペットをインポートするには、次の構文を使用します:

```md
<<< @/snippets/snippet.js
```

::: tip
`@` の値はパッケージのルートディレクトリに対応しています。Monaco エディタと互換性を持たせるために、スニペットは `@/snippets` に配置することを推奨します。あるいは、相対パスからインポートすることも可能です。
:::

コードファイルの対応部分だけを含めるには [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) を使用することもできます:

```md
<<< @/snippets/snippet.js#region-name
```

インポートするコードの言語を明示的に指定するには、言語識別子を追加できます:

```md
<<< @/snippets/snippet.js ts
```

コードブロックの機能（[行のハイライト](#line-highlighting) や [Monaco エディタ](#monaco-editor)）もサポートされています:

```md
<<< @/snippets/snippet.js {2,3|5}{lines:true}
<<< @/snippets/snippet.js ts {monaco}{height:200px}
```

<LinkInline link="features/line-highlighting" /> のプレースホルダーとして `{*}` を使用できることに注意してください:

<!-- eslint-skip -->

```md
<<< @/snippets/snippet.js {*}{lines:true}
```
