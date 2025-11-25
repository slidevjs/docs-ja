---
depends:
  - guide/exporting
  - guide/hosting
relates:
  - CLI export options: /builtin/cli#export
  - Headmatter export options: /custom/#headmatter
tags: [エクスポート, ビルド]
description: |
  ダウンロード可能な PDF をスライドのビルドとともに生成します。
---

# ビルド時の PDF 生成

ビルド時にダウンロード可能な PDF を生成するには、ヘッドマターに次の設定を追加します:

```md
---
download: true
---
```

Slidev はビルドとともに PDF ファイルを生成し、ナビゲーションの中にダウンロードボタンが表示されます。

カスタムの PDF URL を指定することもできます。その場合、PDF のレンダリングプロセスはスキップされます。

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

これは、CLI オプション `--download`（`boolean` のみ）を指定することでも行うことができます。

```bash
$ slidev build --download
```

ダウンロードオプションを使用する場合、次の方法でエクスポートオプションを指定することもできます:

- [CLI エクスポートオプション](/builtin/cli#export)
- [ヘッドマターのエクスポートオプション](/custom/#frontmatter-configures)