---
relates:
  - features/seo-meta
tags: ['SEO', ヘッダー]
description: |
  スライドの Open Graph 画像を設定します。
---

# Open Graph 画像

Slidev はヘッドマターの `seoMeta.ogImage` オプションを使用して、Open Graph 画像を設定できます。

```md
---
seoMeta:
  ogImage: https://url.to.your.image.png
---

# ここにスライドを書く
```

詳しくは [SEO Meta Tags](./seo-meta) を参照してください。

## ローカル画像

プロジェクトのルートに `./og-image.png` がある場合、Slidev は自動的にこれを Open Graph 画像として使用します。特別な設定は不要です。

## 自動生成

v52.1.0 以降、Slidev は最初のスライドから Open Graph 画像を自動生成する機能をサポートしています。

この機能を有効にするには、`seoMeta.ogImage` を `auto` に設定します。

```md
---
seoMeta:
  ogImage: auto
---
```

[playwright](https://playwright.dev/) を使用して最初のスライドをキャプチャし、`./og-image.png` として保存します（`slidev export` と同じです）。生成された画像をリポジトリにコミットして自動生成を回避することもできます。また、CI で生成する場合は playwright 環境のセットアップも検討してください。
