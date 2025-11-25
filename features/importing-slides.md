---
relates:
  - features/frontmatter-merging
tags: [構文]
description: |
  複数のファイルに `slides.md` を分割して、再利用性と整理性を向上させることができます。
---

# スライドのインポート

複数のファイルに `slides.md` を分割して、再利用性と整理性を向上させることができます。これを行うには、`src` フロントマターオプションを使用して外部マークダウンファイルへのパスを指定します。例えば:

::: code-group

<!-- eslint-skip -->

```md [./slides.md]
# タイトル

これは普通のページです

---
src: ./pages/toc.md // [!code highlight]
---

<!-- このページは './pages/toc.md' から読み込まれます -->

ここに書いた要素は無視されます

---

# Page 4

これは、別の普通のページです

---
src: ./pages/toc.md   # 同じファイルを再利用する // [!code highlight]
---
```

```md [./pages/toc.md]
# 目次

パート 1

---

# 目次

パート 2
```

:::

## 特定のスライドのインポート

別のマークダウンファイル内の一部のスライドを再利用するには、インポートパスのハッシュ部分を使用できます:

```md
---
src: ./another-presentation.md#2,5-7
---
```

これは `./another-presentation.md` のスライド 2、5、6、7 をインポートします。

## フロントマターの統合

<LinkCard link="features/frontmatter-merging" />
