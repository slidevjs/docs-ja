---
outline: deep
---

# はじめに

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> は Web ベースのスライドメーカーおよびプレゼンターです。開発者がマークダウンでのコンテンツ作成に集中できるように設計されています。Vue などの Web テクノロジーの力により、ピクセルパーフェクトなデザインと対話的なデモをプレゼンテーションに提供できます。

::: tip

このプロジェクトの背景にある理由の詳細については、<LinkInline link="guide/why" /> を参照してください。

:::

<!--
- 📝 [**Markdown-based**](/guide/syntax) - focus on content and use your favorite editor
- 🧑‍💻 [**Developer Friendly**](/guide/syntax#code-blocks) - built-in code highlighting, live coding, etc.
- 🎨 [**Themable**](/resources/theme-gallery) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax#embedded-styles) - on-demand utilities via [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactive**](/custom/directory-structure#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/ui#presenter-mode) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/features/drawing) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax#diagrams) - creates diagrams using textual descriptions with [Mermaid.js](https://mermaid.js.org/)
- 🌟 [**Icons**](/guide/syntax#icons) - access to icons from any icon set directly
- 💻 [**Editor**](/guide/index#editor) - integrated editor, or the [VSCode extension](/features/vscode-extension)
- 🎥 [**Recording**](/features/recording) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting) - export into PDF, PNGs, or PPTX
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/) - using Vite plugins, Vue components, or any npm packages
-->

<!-- <FeaturesAnimation /> -->

## スライドを作成する

### オンラインで試す

StackBlitz でブラウザで直接 Slidev を開始: [sli.dev/new](https://sli.dev/new)

### ローカルで作成する

> [Node.js](https://nodejs.org) >= 18.0 がインストールされている必要があります。

次のコマンドを実行して、ローカルに新しい Slidev プロジェクトを作成します。

::: code-group

```bash [pnpm]
# pnpm がインストールされていない場合
npm i -g pnpm

pnpm create slidev
```

```bash [npm]
# 推奨されません -
# NPM は新しいプロジェクトを作成するたびにパッケージをダウンロードします。
# これは遅く、多くのスペースを占めます

npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [bun]
bun create slidev
```

```bash [deno]
deno init --npm slidev
```

:::

プロンプトに従ってスライドプロジェクトを開始します。スライドコンテンツは `slides.md` にあり、最初はほとんどの Slidev 機能のデモが含まれています。マークダウン構文の詳細については、<LinkInline link="guide/syntax" /> を確認してください。

:::: details 単一ファイルの使用 (推奨されません)

スライドとして単一のマークダウンファイルを使用したい場合は、Slidev CLI をグローバルにインストールできます。

::: code-group

```bash [pnpm]
pnpm i -g @slidev/cli
```

```bash [npm]
npm i -g @slidev/cli
```

```bash [yarn]
yarn global add @slidev/cli
```

```bash [bun]
bun i -g @slidev/cli
```

```bash [deno]
deno i -g npm:@slidev/cli
```

:::

その後、次を使用して単一ファイルスライドを作成および開始できます。

```bash
slidev slides.md
```

::::

## 基本的なコマンド

Slidev は CLI に一連のコマンドを提供します。一般的なものをいくつか紹介します。

- `slidev` - 開発サーバーを起動します。[dev コマンド](../builtin/cli#dev) を参照してください。
- `slidev export` - スライドを PDF、PPTX、または PNG にエクスポートします。<LinkInline link="guide/exporting" /> を参照してください。
- `slidev build` - スライドを静的 Web アプリケーションとしてビルドします。<LinkInline link="guide/hosting" /> を参照してください。
- `slidev format` - スライドをフォーマットします。[format コマンド](../builtin/cli#format) を参照してください。
- `slidev --help` - ヘルプメッセージを表示します

これらのコマンドを実行するには、`package.json` スクリプトに追加できます (`npm init slidev` でプロジェクトが作成された場合は既に行われています)。

```json [package.json]
{
  "scripts": {
    "dev": "slidev --open",
    "build": "slidev build",
    "export": "slidev export"
  }
}
```

その後、`npm run dev`、`npm run build`、`npm run export` を実行するだけです。

CLI の詳細については、[CLI ガイド](../builtin/cli) を確認してください。

## エディターを設定する {#editor}

Slidev はマークダウンをソースエントリとして使用するため、スライドを作成するためにお好みのエディターを使用できます。また、スライドをより便利に編集するために役立つツールも提供しています。

<LinkCard link="features/vscode-extension" />
<LinkCard link="features/side-editor" />
<LinkCard link="features/prettier-plugin" />

## コミュニティに参加する

公式の [Discord サーバー](https://chat.sli.dev/) に参加して、ヘルプを取得したり、スライドを共有したり、Slidev について何でも議論することをお勧めします。

バグが発生している場合は、[GitHub](https://github.com/slidevjs/slidev/issues/new/choose) で問題を開くことをお勧めします。

## 技術スタック

Slidev は以下のツールとテクノロジーを組み合わせることで実現しています。

- [Vite](https://vitejs.dev) - 非常に高速なフロントエンドツール
- [Vue 3](https://v3.vuejs.org/) によって強化された [マークダウン](https://daringfireball.net/projects/markdown/syntax) - コンテンツに焦点を当てながら、必要に応じて HTML と Vue コンポーネントの力を持つ
- [UnoCSS](https://github.com/unocss/unocss) - オンデマンド・ユーティリティ優先の CSS フレームワーク、簡単にスライドをスタイル可能
- [Shiki](https://github.com/shikijs/shiki)、[Monaco Editor](https://github.com/Microsoft/monaco-editor) - ライブコーディング機能を備えたファーストクラスのコードスニペットサポート
- [RecordRTC](https://recordrtc.org) - ビルトインの録画とカメラビュー
- [VueUse](https://vueuse.org) ファミリー - [`@vueuse/core`](https://github.com/vueuse/vueuse)、[`@vueuse/head`](https://github.com/vueuse/head)、[`@vueuse/motion`](https://github.com/vueuse/motion) など
- [Iconify](https://iconify.design/) - アイコンセット集
- [Drauu](https://github.com/antfu/drauu) - 描画と注釈のサポート
- [KaTeX](https://katex.org/) - LaTeX 数式レンダリング
- [Mermaid](https://mermaid-js.github.io/mermaid) - テキストで描ける図
