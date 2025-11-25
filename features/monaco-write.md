---
depends:
  - features/monaco-editor
  - features/import-snippet
relates:
  - features/import-snippet
  - Custom Code Runners: /custom/config-code-runners
since: v0.49.5
tags: [コードブロック, エディター]
description: |
  スライド内で直接コードを書き込み、その変更をファイルに保存できる Monaco エディターです。
---

# 書き込み可能な Monaco エディター

[Import Code Snippets](#import-code-snippets) 構文と `{monaco-write}` ディレクティブを組み合わせて使用することで、Monaco エディターをファイルシステム上のファイルにリンクできます。これにより、エディター内でコードを直接編集し、その変更をファイルに保存することが可能になります。

```md
<<< ./some-file.ts {monaco-write}
```

この機能を使用する際は、変更が直接ファイルに保存されるため、事前にファイルのバックアップを取ることをお勧めします。\
