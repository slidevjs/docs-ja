---
depends:
  - guide/ui#navigation-bar
relates:
  - drauu: https://github.com/antfu/drauu
tags: [描画]
description: |
  スライドに簡単に描画や注釈を追加できます。
---

# 描画と注釈

Slidev は、[drauu](https://github.com/antfu/drauu) によって組み込みの描画および注釈機能を備えています。これにより、スライドに描画や注釈を簡単に追加できます。

描画と注釈を始めるには、[ナビゲーションバー](../guide/ui#navigation-bar) の <carbon-pen class="inline-icon-btn"/> アイコンをクリックして描画ツールバーを開きます。[発表者モード](/guide/ui#presenter-mode) でも利用できます。作成した描画と注釈は、すべてのインスタンス間でリアルタイムに**同期**されます。

<TheTweet id="1424027510342250499" />

## スタイラスペンを使う

Slidev は入力タイプを自動的に検出します。タブレットでスタイラスペン（例えば、iPad で Apple Pencil）を使用する場合、描画モードをオンにせずにペンで直接スライドに描画でき、指やマウスでナビゲーションを操作できます。

## 描画の永続化

以下のフロントマター設定を使用すると、描画を `.slidev/drawings` ディレクトリに SVG として永続化し、エクスポートされた PDF やホストされたサイト内に含めることができます。

```md
---
drawings:
  persist: true
---
```

## 描画の無効化

完全に無効化するには:

```md
---
drawings:
  enabled: false
---
```

開発環境でのみ有効にするには:

```md
---
drawings:
  enabled: dev
---
```

発表者モードでのみ有効にするには:

```md
---
drawings:
  presenterOnly: true
---
```

## 描画の同期

デフォルトでは、Slidev はすべてのインスタンス間で描画を同期します。他の人とスライドを共有している場合は、次の設定を使用して同期を無効にできます:

```md
---
drawings:
  syncAll: false
---
```

この設定を使用すると、発表者インスタンスからの描画のみが他のインスタンスと同期されます。
