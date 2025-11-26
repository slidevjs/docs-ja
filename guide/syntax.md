---
outline: deep
---

# 構文ガイド

Slidev のスライドはマークダウンファイルで記述されており、**Slidev Markdown** と呼ばれます。プレゼンテーションは Slidev Markdown をエントリーポイントとしており、デフォルトでは `./slides.md` ですが、[CLI コマンド](../builtin/cli) に引数としてファイルパスを渡すことで変更できます。

Slidev Markdown では、[基本的なマークダウン機能](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) をいつも通り使用できるだけでなく、Slidev はスライドを強化するための追加機能も提供します。このセクションでは、Slidev で導入された構文について説明します。このガイドを読む前に、基本的なマークダウン構文を必ず理解しておいてください。

## スライド分離記号 {#slide-separators}

`---` の前後に空行を入れてスライドを分離します。

````md {5,15}
# タイトル

こんにちは、**Slidev**!

---

# スライド 2

コードブロックを使用して強調表示:

```ts
console.log('Hello, World!')
```

---

# スライド 3

UnoCSS クラスと Vue コンポーネントを使用してスライドをスタイルし、豊かにします:

<div class="p-3">
  <Tweet id="..." />
</div>
````

## フロントマター & ヘッドマター {#frontmatter}

各スライドの開始時に、オプションの [フロントマター](https://jekyllrb.com/docs/front-matter/) を追加してスライドを設定できます。最初のフロントマターブロックは **ヘッドマター** と呼ばれ、スライドデック全体を設定できます。残りは個々のスライドの **フロントマター** です。ヘッドマターまたはフロントマターのテキストは [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) 形式のオブジェクトである必要があります。例えば:

<!-- eslint-skip -->

```md {1-4,10-14,26-28}
---
theme: seriph
title: Slidev へようこそ
---

# スライド 1

このスライドのフロントマターは、ヘッドマターでもあります

---
layout: center
background: /background-1.png
class: text-white
---

# スライド 2

`center` レイアウトと背景画像を持つページ

---

# スライド 3

フロントマターなしのページ

---
src: ./pages/4.md  # このスライドはフロントマターのみを含みます
---

---

# スライド 5
```

使用できる設定は [スライドデッキの設定](/custom/#headmatter) と [スライドごとの設定](/custom/#frontmatter) セクションで説明されています。

ヘッドマターをより読みやすくするために、VSCode 拡張機能をインストールできます。

<LinkCard link="features/vscode-extension" />

また、別のフロントマター形式も利用できます。

<LinkCard link="features/block-frontmatter" />

## ノート {#notes}

各スライドのプレゼンターノートを作成することもできます。プレゼンテーション中に参照するため、<LinkInline link="guide/ui#presenter-mode" /> に表示されます。

各スライドの末尾にあるコメントブロックはスライドのノートとして扱われます。

```md {9,19-21}
---
layout: cover
---

# スライド 1

これはカバーページです。

<!-- これは **ノート** です -->

---

# スライド 2

<!-- このコメントはスライドの最後にないため、ノートではありません -->

2 番目のページ

<!--
これは _別の_ ノートです
-->
```

基本的なマークダウンと HTML もノートでサポートされており、レンダリングされます。

<SeeAlso :links="[
  'features/click-marker',
]" />

## コードブロック {#code-block}

Slidev の作成に至った大きな理由の 1 つは、スライド内のコードを完璧に表示する必要があったからです。したがって、マークダウン風のコードブロックを使用してコードを強調表示できます。

````md
```ts
console.log('Hello, World!')
```
````

Slidev には構文ハイライター として [Shiki](https://github.com/shikijs/shiki) がビルトインされています。詳細は [Shiki の設定](/custom/config-highlighter) を参照してください。

コードブロックの詳細:

<LinkCard link="features/code-block-line-numbers" />
<LinkCard link="features/code-block-max-height" />
<LinkCard link="features/line-highlighting" />
<LinkCard link="features/monaco-editor" />
<LinkCard link="features/monaco-run" />
<LinkCard link="features/monaco-write" />
<LinkCard link="features/shiki-magic-move" />
<LinkCard link="features/twoslash" />
<LinkCard link="features/import-snippet" />
<LinkCard link="features/code-groups" />

## LaTeX ブロック {#latex-block}

Slidev は数学および化学方程式のために LaTeX ブロックをサポートしています。

<LinkCard link="features/latex" />

## ダイアグラム {#diagrams}

Slidev はテキストからダイアグラムを作成するために [Mermaid](https://mermaid.js.org/) と [PlantUML](https://plantuml.com/) をサポートしています。

<LinkCard link="features/mermaid" />
<LinkCard link="features/plantuml" />

## MDC 構文 {#mdc-syntax}

MDC 構文は要素にスタイルとクラスを適用する最も簡単な方法です。

<LinkCard link="features/mdc" />

## スコープ付き CSS {#scoped-css}

スコープ付き CSS を使用してスライドをスタイルできます。

<LinkCard link="features/slide-scope-style" />

## スライドのインポート {#importing-slides}

<LinkCard link="features/importing-slides" />
