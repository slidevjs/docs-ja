---
outline: deep
---

# 始める

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup>は、ウェブベースのスライド・プレゼン作成フレームワークです。開発者のために、マークダウンで書くことに焦点を当てて設計されています。VueのようなWeb技術の力によって、 双方向性のあるデモとともにピクセルパーフェクトなデザインをプレゼンテーションに加えることができます。

::: tip

このプロジェクトの制作の背景にある論理的根拠は<LinkInline link="guide/why" />でご覧いただけます。

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

## スライドを作る

### オンラインで試す

SlidevをStackBlitzで簡単に始める: [sli.dev/new](https://sli.dev/new)

### ローカルで作成する

> [Node.js](https://nodejs.org) >= 18.0 のインストールが必要です。

新しいSlidevプロジェクトを作成するには、以下のコマンドを実行してください:

::: code-group

```bash [pnpm]
# pnpmをインストールしていない場合
npm i -g pnpm

pnpm create slidev
```

```bash [npm]
# 非推奨 -
# NPMはプロジェクトを作成するたびにパッケージをダウンロードするので、
# 低速かつ多くの容量を消費します。

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

スライドプロジェクトを開始するプロンプトに従ってください。スライドの内容は `slides.md`にあります。これは最初は多くのSlidevの機能のデモを含みます。Markdown構文に関する情報をさらに得るには、<LinkInline link="guide/syntax" />をご覧ください。

:::: details 一つのファイルで使う (非推奨)

もし一つのMarkdownファイルをスライドにしたいのであれば、Slidev CLIをグローバルにインストールできます。

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
deno i -g npm:@slidev/cli --name slidev
```

:::

そして、一つのファイルでスライドを作成し、開始するには、

```bash
slidev slides.md
```

を実行します。

::::

## 標準コマンド

SlidevはコマンドのセットをそのCLIで提供します。これらはそれらの一部です。:

- `slidev` - 開発用サーバーを起動する。詳しくは、[テストコマンド](../builtin/cli#dev)をご覧ください。
- `slidev export` - スライドを、PDF、PPTX、もしくはPNGで書き出す。詳しくは、<LinkInline link="guide/exporting" />をご覧ください。
- `slidev build` - スライドを性的なWebサイトとしてビルドする。詳しくは、<LinkInline link="guide/hosting" />をご覧ください。
- `slidev format` - スライドをフォーマットする。詳しくは、[フォーマットコマンド](../builtin/cli#format)をご覧ください。
- `slidev --help` - ヘルプメッセージを表示します。

これらのコマンドを実行するには、これらを`package.json`のスクリプトに追加する必要があります。(これらは`npm init slidev`でプロジェクトを作成したときに作られます。)

```json [package.json]
{
  "scripts": {
    "dev": "slidev --open",
    "build": "slidev build",
    "export": "slidev export"
  }
}
```

そしたら、`npm run dev`、`npm run build`と`npm run export`で簡単に実行できるようになります。

CLIについて詳しく知るには、[CLIガイド](../builtin/cli)をチェックしてください。

## エディターをセットアップする {#editor}

SlidevをMarkdownのコードから使用するとき、あなたの好きなエディターをプロジェクト作成に使えます。また、我々はスライドをより便利に編集することを助けるツールを提供しています。

<LinkCard link="features/vscode-extension" />
<LinkCard link="features/side-editor" />
<LinkCard link="features/prettier-plugin" />

## コミュニティに参加する

我々の[公式Discordサーバー](https://chat.sli.dev/)に参加することをお勧めします。ここでは、ヘルプを求めたり、スライドを共有したり、Slidevにまつわるあらゆることを議論できます。

もしあなたがバグに遭遇したときは、気兼ねなく[GitHub](https://github.com/slidevjs/slidev/issues/new/choose)でIssueを開いてください。

## 技術スタック

Slidevはこれらの技術とツールによって作ることができています。

- [Vite](https://vitejs.dev) - 非常に早いフロントエンドツール
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - 必要なときにHTMLとVueコンポーネントの力を利用しながら、コンテンツに集中できる。
- [UnoCSS](https://github.com/unocss/unocss) - オンデマンドの実用性重視のCSSフレームワークで、スライドのスタイリングを簡単にします。
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - ライブコーディング機能を備えた1番のコードスニペットサポート
- [RecordRTC](https://recordrtc.org) - ビルドインのレコーディングとカメラビュー
- [VueUse](https://vueuse.org) family - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - アイコンセット
- [Drauu](https://github.com/antfu/drauu) - 描写と注釈のサポート
- [KaTeX](https://katex.org/) - LaTeXサポート
- [Mermaid](https://mermaid-js.github.io/mermaid) - テキストベースのダイアグラム
