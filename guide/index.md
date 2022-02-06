# はじめに

## 概要

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> はWebベースのスライド作成およびプレゼンテーションツールです。開発者がMarkdownでコンテンツを書くことに集中しつつ、HTMLとVueコンポーネントを用いて、プレゼンテーションにインタラクティブなデモを埋め込んだピクセルパーフェクトなレイアウトとデザインを提供できるようにも設計されています。

機能豊富なマークダウンファイルを使用して、ライブコーディング、PDFエクスポート、プレゼンテーションのレコーディングのような、多くのビルトインインテグレーションとともに、瞬時に再読み込みが可能な美しいスライドを生成します。webで動くので、Slidevを使ってどんなことでもできます - 可能性は無限大です。

プロジェクトの論理的根拠については [なぜSlidev？](/guide/why) のセクションで詳しく説明しています。

### 機能

- 📝 [**Markdownベース**](/guide/syntax.html) - お気に入りのエディタとワークフローを使用
- 🧑‍💻 [**デベロッパーフレンドリー**](/guide/syntax.html#コードブロック) - ビルトインのシンタックスハイライト、ライブコーディングなど
- 🎨 [**豊富なテーマ**](/themes/gallery.html) - テーマはnpmパッケージで共有・利用が可能
- 🌈 [**スタイリッシュ**](/guide/syntax.html#埋め込みスタイル) - [Windi CSS](https://windicss.org/) オンデマンドユーティリティ、 使いやすい埋め込まれたスタイルシート
- 🤹 [**インタラクティブ**](/custom/directory-structure.html#コンポーネント) - Vueコンポーネントをシームレスに埋め込み
- 🎙 [**プレゼンターモード**](/guide/presenter-mode.html) - 別のウィンドウ、スマートフォンでさえもスライドを操作
- 🎨 [**描画**](/guide/drawing.html) - スライドに描画し、注釈をつける
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - LaTeX数式のビルトインサポート
- 📰 [**図形**](/guide/syntax.html#図形) - 説明と合わせて図形を作成 
- 🌟 [**アイコン**](/guide/syntax.html#アイコン) - どんなアイコンセットからでも、直接アイコンにアクセス
- 💻 [**エディタ**](/guide/editors.html) - 統合されたエディタと[VS Code拡張機能](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**レコーディング**](/guide/recording.html) - ビルトインのレコーディングとカメラビュー
- 📤 [**ポータブル**](/guide/exporting.html) - PDF、PNG、またはホスト可能なSPAにエクスポート
- ⚡️ [**高速**](https://vitejs.dev) - [Vite](https://vitejs.dev) によって提供されたインスタントリロード
- 🛠 [**自由に開発可能**](/custom/config-vite.html) - Viteプラグイン、Vue components、どんなnpmパッケージも使用可能

### 技術スタック

これらのツールや技術を組み合わせることで、Slidevは実現されています。

- [Vite](https://vitejs.dev) - 非常に高速なフロントエンドツール
- [Vue 3](https://v3.ja.vuejs.org/)をベースにした[Markdown](https://daringfireball.net/projects/markdown/syntax) - 必要に応じてHTMLとVueコンポーネントを使いつつ、コンテンツに集中できます
- [Windi CSS](https://github.com/windicss/windicss) - オンデマンドなユーティリティファーストのCSSフレームワーク、 スライドを自在にスタイリング
- [Prism](https://github.com/PrismJS/prism)、[Shiki](https://github.com/shikijs/shiki)、[Monaco Editor](https://github.com/Microsoft/monaco-editor) - ファーストクラスのコードスニペットサポートとライブコーディング機能
- [RecordRTC](https://recordrtc.org) - ビルトインのレコーディングとカメラビュー
- [VueUse](https://vueuse.org)ファミリー -  [`@vueuse/core`](https://github.com/vueuse/vueuse)、[`@vueuse/head`](https://github.com/vueuse/head)、[`@vueuse/motion`](https://github.com/vueuse/motion)など
- [Iconify](https://iconify.design/) - アイコンセットコレクション
- [Drauu](https://github.com/antfu/drauu) - 描画と注釈のサポート
- [KaTeX](https://katex.org/) - LaTeX数式のレンダリング
- [Mermaid](https://mermaid-js.github.io/mermaid) - テキストによる図解

### はじめてのプレゼンテーションを作成する

<br>

#### オンラインで試す

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### ローカルで作成する

NPMで作成：

```bash
$ npm init slidev
```

Yarnで作成：

```bash
$ yarn create slidev
```

プロンプトに従って、今すぐスライドを作り始めましょう！　Markdownシンタックスの詳細は、 [シンタックスガイド](/guide/syntax)を参照してください。

### コマンドラインインターフェース

Slidevがインストールされたプロジェクトでは、 npmスクリプトで `slidev`コマンドを使用することができます。

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

あるいは [`npx`](https://www.npmjs.com/package/npx) で使用することができます。

```bash
$ npx slidev
```

その他のオプションについては、 `slidev --help` を実行してください。

### Markdownシンタックス

Slidevはプロジェクトルートの配下にある `slides.md` を読み取り、スライドに変換します。 変更を加えると、 スライドのコンテンツに即時に反映されます。 例：

~~~md
# Slidev

Hello World

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3
~~~

SlidevのMarkdownシンタックスについては [シンタックスガイド](/guide/syntax) を参照してください。
