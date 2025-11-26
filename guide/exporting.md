---
outline: deep
---

# エクスポート

通常、スライドは Web ブラウザで表示されますが、PDF、PPTX、PNG、または Markdown ファイルにエクスポートして共有または印刷することもできます。この機能は CLI コマンド [`slidev export`](../builtin/cli#export) で利用できます。

ただし、スライド内の対話的な機能はエクスポートされたファイルでは利用できない場合があります。対話性を保つために、スライドを Web アプリケーションとしてビルドしてホストできます。詳しくは [ビルドとホスティング](./hosting) を参照してください。

## ブラウザエクスポーター <Badge> 推奨 </Badge> {#browser}

> v0.50.0-beta.11 以降で利用可能

Slidev はブラウザでスライドをエクスポートするための UI を提供します。[ナビゲーションバー](./ui#navigation-bar) の "More options" メニューの "Export" ボタンをクリック、または `http://localhost:<port>/export` に直接移動してアクセスできます。

UI では、スライドを PDF としてエクスポート、またはスライドを画像としてキャプチャして PPTX または zip ファイルとしてダウンロードできます。

**最新の Chromium ベースのブラウザ** 以外のブラウザでは、エクスポート UI がうまく動作しない場合があることに注意してください。問題が発生した場合は、代わりに CLI を使用してください。

> このページの以下の内容は CLI のみ対象です。

## CLI {#cli}

PDF、PPTX、または PNG へのエクスポートは、スライドのレンダリングに [Playwright](https://playwright.dev) を使用します。したがって、プロジェクトに [`playwright-chromium`](https://npmjs.com/package/playwright-chromium) をインストールする必要があります。

::: code-group

```bash [pnpm]
$ pnpm add -D playwright-chromium
```

```bash [npm]
$ npm i -D playwright-chromium
```

```bash [yarn]
$ yarn add -D playwright-chromium
```

```bash [bun]
$ bun add -D playwright-chromium
```

```bash [deno]
$ deno add -D npm:playwright-chromium
```

:::

## フォーマット

### PDF

上記のように `playwright-chromium` をインストールした後、次のコマンドを使用してスライドを PDF にエクスポートできます。

```bash
$ slidev export
```

デフォルトでは、PDF は `./slides-export.pdf` に配置されます。

### PPTX

Slidev はスライドを PPTX ファイルとしてエクスポートすることもできます。

```bash
$ slidev export --format pptx
```

PPTX ファイル内のすべてのスライドは画像としてエクスポートされるため、テキストは選択できないことに注意してください。プレゼンターノートはスライドごとに PPTX ファイルに含まれます。

このモードでは、`--with-clicks` オプションはデフォルトで有効になっています。これを無効にするには、`--with-clicks false` を渡してください。

### PNG と Markdown

`--format png` オプションを渡すと、Slidev は PDF の代わりに各スライドの PNG 画像をエクスポートします。

```bash
$ slidev export --format png
```

`--format md` を使用して、PNG で構成される Markdown ファイルをコンパイルすることもできます。

```bash
$ slidev export --format md
```

## オプション

`slidev export` コマンドで使用できる一般的なオプションを以下に示します。オプションの完全なリストについては、[CLI ドキュメント](../builtin/cli#export) を参照してください。

### クリックステップのエクスポート

デフォルトでは、Slidev はクリックアニメーションを無効にしてスライドごとに 1 ページをエクスポートします。複数ステップを持つスライドを複数ページにエクスポートしたい場合は、`--with-clicks` オプションを渡してください。

```bash
$ slidev export --with-clicks
```

### 出力ファイル名

`--output` オプションで出力ファイル名を指定できます。

```bash
$ slidev export --output my-pdf-export
```

またはフロントマター設定で指定できます。

```yaml
---
exportFilename: my-pdf-export
---
```

### 範囲を指定してエクスポート

デフォルトでは、プレゼンテーション内のすべてのスライドがエクスポートされます。特定のスライドまたはスライドの範囲をエクスポートしたい場合は、`--range` オプションを設定してエクスポートするスライドを指定できます。

```bash
$ slidev export --range 1,6-8,10
```

このオプションは特定のスライド番号と範囲の両方を受け入れます。上記の例はスライド 1、6、7、8、10 をエクスポートします。

### 複数スライドのエクスポート

複数のスライドを一度にエクスポートすることもできます。

```bash
$ slidev export slides1.md slides2.md
```

または (特定のシェルでのみ利用可能):

```bash
$ slidev export *.md
```

この場合、各入力ファイルは独自の PDF ファイルを生成します。

### ダークモード

テーマのダークバージョンを使用してスライドをエクスポートしたい場合は、`--dark` オプションを使用してください。

```bash
$ slidev export --dark
```

### タイムアウト

大きなプレゼンテーションの場合、`--timeout` で Playwright タイムアウトを増やしたい場合があります。

```bash
$ slidev export --timeout 60000
```

### 待機

スライドの一部は描画にかなりの時間を要する場合があります。`--wait` オプションを使用してエクスポート前に追加の遅延を設定できます。

```bash
$ slidev export --wait 10000
```

各スライドをエクスポート前に状態を待つ `--wait-until` オプションもあります。タイムアウトの問題が続く場合は、このオプションを設定してみてください。

```bash
$ slidev export --wait-until none
```

可能な値:

- `'networkidle'` - (デフォルト) 少なくとも `500` ms 間ネットワーク接続がない場合、操作は完了と見なされます。最も安全ですが、タイムアウトを引き起こす可能性があります。
- `'domcontentloaded'` - `DOMContentLoaded` イベントが発火した時点で操作は完了と見なされます。
- `'load'` - `load` イベントが発火した時点で操作は完了と見なされます。
- `'none'` - イベントを待ちません。

::: warning
`'networkidle'` 以外の値を指定する場合、印刷されたスライドが完全かつ正確なことを確認してください。コンテンツの一部が見つからない場合は、`--wait` オプションを使用する必要があります。
:::

### 実行可能ファイルのパス

Chromium は一部のビデオをデコードするために必要なコーデックなどの一部の機能が不足している可能性があります。`--executable-path` を使用して、Playwright のブラウザ実行可能ファイルパスを Chrome または Edge に設定できます。

```bash
$ slidev export --executable-path [path_to_chromium]
```

### PDF アウトライン

> v0.36.10 以降で利用可能

`--with-toc` オプションを渡して PDF アウトラインを生成できます。

```bash
$ slidev export --with-toc
```

### 背景を省略

PNG にエクスポートする場合、`--omit-background` を渡してデフォルトのブラウザ背景を削除できます。

```bash
$ slidev export --omit-background
```

デフォルトのブラウザ背景は、すべてのブラウザウィンドウに表示される白い背景のことで、CSS スタイリングを使用してアプリケーション全体に適用される他の背景とは異なります。[Playwright ドキュメントを参照](https://playwright.dev/docs/api/class-page#page-screenshot-option-omit-background)。その後、アプリケーションに追加の CSS スタイリングを適用して透明性を表示する必要があります。

アプリケーション内のすべての背景をカバーする基本的な例を以下に示します。

```css
* {
  background: transparent !important;
}
```

## トラブルシューティング

### コンテンツが見つからないまたはアニメーションが完了していない

エクスポートされた PDF でコンテンツが見つからないか、アニメーションが完了していない場合は、各スライドをエクスポートする前に待機時間を追加してみてください。

```bash
$ slidev export --wait 1000
```

### 絵文字が壊れている

PDF または PNG に絵文字がない場合、環境に必要なフォント ([Google の _Noto Emoji_](https://fonts.google.com/noto/specimen/Noto+Emoji) など) がない可能性があります。

これは、例えば CI/CD のようなコンテナ内の Linux 環境に影響を与える可能性があります。例えば、以下のように修正できます。

```bash
$ curl -L --output NotoColorEmoji.ttf https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf
$ sudo mv NotoColorEmoji.ttf /usr/local/share/fonts/
$ fc-cache -fv
```

### グローバルレイヤーのコンテキストが間違っている

https://sli.dev/features/global-layers のヒントを参照してください。
