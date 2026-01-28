---
relates:
  - VS Code: https://code.visualstudio.com/
  - View in Marketplace: https://marketplace.visualstudio.com/items?itemName=antfu.slidev
  - View in OVSX: https://open-vsx.org/extension/antfu/slidev
tags: [エディタ]
description: |
  スライドの整理や概要の把握を支援します。
---

# VS Code 拡張機能

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300" />
    </a>
</p>

<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
</a> &nbsp;
<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
</a>

VS Code 拡張機能はいくつかの機能を提供しており、スライドの整理や概要の把握を支援します。

### 機能

- サイドパネルでのプレビュー
- スライドのツリービュー
- スライドの順序変更
- スライドブロックの格納
- 複数のスライドプロジェクトのサポート
- ワンクリックで開発サーバーを起動
- Language Model Tools を通した AI/Copilot 統合

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

### インストール

拡張機能は [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev) または [Open VSX Registry](https://open-vsx.org/extension/antfu/slidev) からインストールできます。

### 使い方

アクティビティバーの `Slidev` アイコンをクリックして **Slidev パネル** を開きます。Slidev パネルでは、プロジェクトのツリービュー、スライドのツリービュー、プレビューの Webview を確認できます。

**プロジェクトのツリービュー** では、ワークスペース内のすべての Slidev プロジェクトを確認できます。アイテムをクリックすると対応するファイルが開き、アイテム上の <codicon-eye /> アイコンをクリックするとアクティブなプロジェクトを切り替えられます。<codicon-add /> アイコンは自動的にスキャンされなかったスライドプロジェクトを読み込むためのものです。

**スライドのツリービュー** では、アクティブなプロジェクト内のすべてのスライドを確認できます。アイテムをクリックするとエディタ内のスライドにカーソルが移動し、ドラッグアンドドロップでスライドの順序を変更できます。

プレビューの **Webview** では、<codicon-run-all /> アイコンをクリックして開発サーバーを起動し、<codicon-globe /> アイコンをクリックしてブラウザでスライドを開けます。プレビューのナビゲーションとエディタのカーソルの同期/非同期を<codicon-lock /> アイコンで切り替えられます。

いくつかの **コマンド** も利用できます。コマンドパレットで `Slidev` と入力して確認してください。

`slidev.include` 設定にグロブパターンを追加して、Slidev エントリとしてファイルを含めることができます。デフォルト値は `["**/*.md"]` です。例えば:

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

#### 開発コマンド {#dev-command}

開発サーバーを起動するコマンドは、`slidev.dev-command` 設定でカスタマイズできます。デフォルト値は `npm exec -c 'slidev ${args}'` です。

設定されたコマンドにはプレースホルダーを含めることができます:

- `${args}`: すべての CLI 引数。e.g.: `slides.md --port 3000 --remote`
- `${port}`: ポート番号。e.g.: `3000`

例:

- グローバルインストール: `slidev ${args}`
- PNPM ユーザーの場合は、`pnpm slidev ${args}` に設定できます。
- [code-server](https://coder.com/docs/code-server/) ユーザーの場合は、`pnpm slidev ${args} --base /proxy/${port}/` に設定できます。これにより、開発サーバーは `http://localhost:8080/proxy/3000/` でアクセス可能になります。

#### スライドのツリービュー {#slides-tree}

> v0.52.0 以降で利用可能

スライドのツリービューでは、プレゼンテーション内のすべてのスライドがスライド番号とタイトルとともに表示されます。各スライドは `{slideNo}. {title}` の形式で表示され、特定のスライドへのナビゲーションが容易になります。

#### AI/Copilot 統合 {#ai-integration}

> v0.52.0 以降で利用可能

拡張機能は Language Model Tools を提供しており、VSCode の Copilot やその他の AI アシスタントが Slidev プロジェクトと対話できるようにします。利用可能なツールは以下の通りです:

- `slidev_getActiveSlide` - アクティブなスライドとプロジェクトに関する情報の取得
- `slidev_getSlideContent` - スライドの内容を番号で取得
- `slidev_getAllSlideTitles` - プレゼンテーション内のすべてのスライドタイトルを一覧表示
- `slidev_findSlideNoByTitle` - タイトルからスライド番号を検索
- `slidev_listEntries` - 読み込まれたすべての Slidev プロジェクトエントリを一覧表示
- `slidev_getPreviewPort` - プロジェクトのプレビューサーバーのポートを取得
- `slidev_chooseEntry` - アクティブな Slidev エントリを切り替え

これらのツールは、AI アシスタントがより効率的にスライドを理解できるようにし、ナビゲートや編集を支援します。
