---
depends:
  - custom/index#headmatter
relates:
  - features/og-image
tags: [SEO, ヘッダー]
description: |
  ソーシャルメディアでの共有や検索エンジン最適化を向上させるために、SEO メタタグを設定します。
---

# SEO メタタグ

Slidev では、ヘッドマターで SEO メタタグを設定して、ソーシャルメディアでの共有や検索エンジン最適化を向上させることができます。Open Graph や Twitter Card のメタタグを設定して、スライドがソーシャルプラットフォームで共有されたときの表示方法を制御できます。

## 設定

`seoMeta` をスライドデッキのフロントマターに追加します:

```yaml
---
# SEO メタタグ
seoMeta:
  ogTitle: Slidev Starter Template
  ogDescription: Presentation slides for developers
  ogImage: https://cover.sli.dev
  ogUrl: https://example.com
  twitterCard: summary_large_image
  twitterTitle: Slidev Starter Template
  twitterDescription: Presentation slides for developers
  twitterImage: https://cover.sli.dev
  twitterSite: username
  twitterUrl: https://example.com
---
```

この機能は [unhead](https://unhead.unjs.io/) の `useHead` フックによって提供されています。詳細については、[ドキュメント](https://unhead.unjs.io/docs/head/api/composables/use-seo-meta) を参照してください。
