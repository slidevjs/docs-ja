# カスタマイズ

Slidev はスタイリングからツール設定まで完全にカスタマイズ可能です。これにより、[Vite](/custom/config-vite)、[UnoCSS](/custom/config-unocss)、[Monaco](/custom/config-monaco) などの基盤となるツールを設定できます。

## スライドデッキの設定 {#headmatter}

**最初の**スライドのフロントマター (つまり、ヘッドマター) でスライドプロジェクト全体を設定できます。以下は各オプションのデフォルト値を示しています:

```yaml
---
# テーマ ID、パッケージ名、またはローカルパス
# 詳しくは: https://ja.sli.dev/guide/theme-addon.html#use-theme
theme: default
# アドオン、パッケージ名またはローカルパスのリストにすることができます
# 詳しくは: https://ja.sli.dev/guide/theme-addon.html#use-addon
addons: []
# スライドのタイトル、指定しない場合は最初のヘッダーから推測されます
title: Slidev
# ウェブサイトのタイトルテンプレート、`%s` はスライドデッキのタイトルに置き換えられます
titleTemplate: '%s - Slidev'
# スライドの情報、Markdown 文字列にすることができます
info: false
# エクスポートされた PDF または PPTX の著者フィールド
author: Your Name Here
# エクスポートされた PDF のキーワードフィールド、カンマ区切り
keywords: keyword1,keyword2

# プレゼンターモードを有効にします。boolean、'dev'、または 'build' を指定できます
presenter: true
# ブラウザーエクスポーターを有効にします。boolean、'dev'、または 'build' を指定できます
browserExporter: dev
# SPA ビルドでの PDF ダウンロードを有効にします。カスタム URL も指定できます
download: false
# エクスポートファイルのファイル名
exportFilename: slidev-exported
# エクスポートオプション
# CLI のエクスポートオプションを camelCase で記述します
# 詳しくは: https://ja.sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# twoslash を有効にします。boolean、'dev'、または 'build' を指定できます
twoslash: true
# コードブロックに行番号を表示します
lineNumbers: false
# Monaco エディターを有効にします。boolean、'dev'、または 'build' を指定できます
monaco: true
# Monaco の型情報をどこから読み込むかを指定します。'cdn'、'local'、または 'none' が指定できます
monacoTypesSource: local
# 型情報をインポートするための追加のローカルパッケージを明示的に指定します
monacoTypesAdditionalPackages: []
# Monaco runnable の依存関係として追加のローカルモジュールを明示的に指定します
monacoRunAdditionalDeps: []
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# スライドの録画を有効にします。boolean、'dev'、または 'build' を指定できます
record: dev
# Slidev のコンテキストメニューを有効にします。boolean、'dev'、または 'build' を指定できます
contextMenu: true
# 画面の常時表示 (ウェイクロック) を有効にします。boolean、'dev'、または 'build' を指定できます
wakeLock: true
# オーバービューで各スライドのスナップショットを撮影します
overviewSnapshots: false
# vue-router のルーターモードを指定します。"history" 、"hash"、または "memory" が指定できます
routerMode: history

# スライドのカラースキーマを強制します。'auto'、'light'、または 'dark' が指定できます
colorSchema: auto
# スライドのアスペクト比を指定します
aspectRatio: 16/9
# キャンバスの実際の幅、単位はピクセル
canvasWidth: 980
# スライド間トランジションのデフォルトを定義します
# 詳しくは: https://sli.dev/guide/animations.html#slide-transitions
transition: undefined # or BuiltinSlideTransition | string | TransitionGroupProps | null
# クリックアニメーションのデフォルトプリセットを定義します
# 詳しくは: https://sli.dev/guide/animations.html#click-animation-presets
clickAnimation: undefined # or comma-delimited string
# テーマのカスタマイズに使用され、属性 `x` に対して `--slidev-theme-x` としてルートスタイルを注入します
themeConfig:
  primary: '#5d8392'

# favicon にはローカルファイルのパスか、URL を使用できます
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# ダイアグラムをレンダリングするために使用される PlantUML サーバーの URL
# 詳しくは: https://ja.sli.dev/features/plantuml.html
plantUmlServer: https://www.plantuml.com/plantuml
# フォントは Google Fonts から自動的にインポートされます
# 詳しくは: https://ja.sli.dev/custom/config-fonts.html
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# デフォルトのフロントマターはすべてのスライドに適用されます
defaults:
  layout: default
  # ...

# 描画オプション
# 詳しくは: https://ja.sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML タグ属性
htmlAttrs:
  dir: ltr
  lang: en

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

詳細については、[型定義](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) を確認してください。

## スライドごとの設定 {#frontmatter}

また、すべてのスライドは、そのフロントマターブロックで次の設定を受け入れます。以下は各オプションのデフォルト値を示しています:

```yaml
---
# クリック数の変更
# 詳しくは: https://ja.sli.dev/guide/animations#total
clicks: 0
# 開始クリック数の変更
clicksStart: 0
# スライドを完全に無効化して非表示にします
disabled: false
# `disabled` と同じです
hide: false
# <Toc> コンポーネントでスライドを非表示にします
hideInToc: false
# スライドに適用されるレイアウト
layout: <最初のスライドには "cover"、それ以外は "default">
# <TitleRenderer> と <Toc> コンポーネントでのタイトルレベルを上書きします
# `title` が宣言されている場合にのみ有効です
level: 1
# スライドを事前読み込みする
preload: true
# URL や <Link> コンポーネントで使用できるルートのエイリアスを作成します
routeAlias: undefined # もしくは string
# マークダウンファイルをインクルードします
# 詳しくは: https://ja.sli.dev/guide/syntax.html#importing-slides
src: undefined # もしくは string
# <TitleRenderer> と <Toc> コンポーネントでのタイトルを上書きします
# `title` が宣言されている場合にのみ有効です
title: undefined # もしくは string
# このスライドと次のスライド間のトランジション効果
# 詳しくは: https://ja.sli.dev/guide/animations.html#slide-transitions
transition: undefined # もしくは BuiltinSlideTransition | string | TransitionGroupProps | null
# このスライドのクリックアニメーションのデフォルトプリセットを定義します
# 詳しくは: https://sli.dev/guide/animations.html#click-animation-presets
clickAnimation: undefined # or comma-delimited string
# ズーム倍率の変更
# 内容が多いスライドに便利です
zoom: 1
# ドラッグ可能な要素の位置として使用されます
# 詳しくは: https://ja.sli.dev/features/draggable.html
dragPos: {} # type: Record<string, string>
---
```

詳細については、[型定義](https://github.com/slidevjs/slidev/blob/main/packages/types/src/frontmatter.ts#L260) を確認してください。

## ディレクトリ構造

Slidev は、設定対象領域を最小限に抑え、機能拡張を柔軟かつ直感的にするため、いくつかのディレクトリ構造の慣例を採用しています。

[ディレクトリ構造](/custom/directory-structure) セクションを参照してください。

## 設定ツール

<script setup>
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import customizations from '../.vitepress/customizations'
</script>

<li v-for="c of customizations.slice(2)" :key="c.text">
  <VPLink :href="c.link">
    {{ c.text }}
  </VPLink>
</li>
