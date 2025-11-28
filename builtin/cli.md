# Slidev CLI

`@slidev/cli` はスライドの開発、ビルド、エクスポートに使用できる `slidev` コマンドを提供しています。

## 前提条件

CLI は、`@slidev/cli` をグローバルにインストールするか、Node.js プロジェクトにローカルにインストールすることで使用できます。`npm init slidev` でプロジェクトを作成した場合、CLI はすでにインストールされています。

::: warning
パッケージ名は実際には `@slidev/cli` ですので、`npx slidev` は通常使用できません。
:::

CLI オプションは以下のルールに従います:

- オプションの値はスペースか `=` の後に続けて指定できます。

  例: `slidev --port 8080` は `slidev --port=8080` と同じです。

- ブール値のオプションでは、`true` を省略できます。

  例: `slidev --open` は `slidev --open true` と同じです。

::: info

npm を使っているならば、オプションを Slidev に渡す前に `--` を追加することを忘れないでください:

```bash
npm run slidev -- --remote --port 8080 --open
```

:::

## `slidev [entry]` {#dev}

Slidev のローカルサーバーを起動します。

- `[entry]` (`string`, デフォルト: `slides.md`): スライドの Markdown ファイルのパス

オプション:

- `--port`, `-p` (`number`, デフォルト: `3030`): ポート番号
- `--base` (`string`, デフォルト: `/`): ベース URL (参照: https://vitejs.dev/config/shared-options.html#base)
- `--open`, `-o` (`boolean`, デフォルト: `false`): ブラウザで自動的に開く
- `--remote [password]` (`string`): パブリックホストをリッスンして、リモートコントロールを有効にする。値が渡された場合、プレゼンターモードはプライベートになり、URL クエリの `password` パラメーターで指定されたパスワードを渡すことでのみアクセスできる
- `--bind` (`string`, デフォルト: `0.0.0.0`): リモートモードでサーバーがリッスンする IP アドレスを指定する
- `--log` (`'error', 'warn', 'info', 'silent'`, デフォルト: `'warn'`): ログレベルを指定する
- `--force`, `-f` (`boolean`, デフォルト: `false`): オプティマイザーにキャッシュを無視して再バンドルさせる
- `--theme`, `-t` (`string`): 指定したテーマでオーバーライドする

## `slidev build [entry]` {#build}

ホスト可能な SPA をビルドします。詳細は <LinkInline link="guide/hosting" /> を参照してください。

- `[entry]` (`string`, デフォルト: `slides.md`): スライド Markdown ファイルのパス

オプション:

- `--out`, `-o` (`string`, デフォルト: `dist`): 出力先のディレクトリ
- `--base` (`string`, デフォルト: `/`): ベース URL (参照: https://vitejs.dev/config/shared-options.html#base)
- `--download` (`boolean`, デフォルト: `false`): SPA 内でスライドを PDF としてダウンロード可能にする
- `--theme`, `-t` (`string`): 指定したテーマでオーバーライドする
- `--without-notes` (`boolean`, デフォルト: `false`): SPA からスピーカーノートを除外する

## `slidev export [...entry]` {#export}

スライドを PDF (または他の) 形式で出力します。詳細は <LinkInline link="guide/exporting" /> を参照してください。

- `[entry]` (`string`, デフォルト: `slides.md`): スライド Markdown ファイルのパス

オプション:

- `--output` (`string`, デフォルト: `exportFilename` (参照: https://sli.dev/custom/#frontmatter-configures) もしくは `[entry]-export` ): 出力先のパス
- `--format` (`'pdf', 'png', 'pptx', 'md'`, デフォルト: `'pdf'`): 出力形式
- `--timeout` (`number`, デフォルト: `30000`): 印刷ページのレンダリングのタイムアウト (参照: https://playwright.dev/docs/api/class-page#page-goto)
- `--range` (`string`): 出力するページ範囲 (例: `'1,4-5,6'`)
- `--dark` (`boolean`, デフォルト: `false`): ダークテーマで出力する
- `--with-clicks`, `-c` (`boolean`, デフォルト: `false`): クリックアニメーションごとにページを出力する (参照: https://sli.dev/guide/animations.html#click-animation)
- `--theme`, `-t` (`string`): 指定したテーマでオーバーライドする
- `--omit-background` (`boolean`, デフォルト: `false`): デフォルトのブラウザ背景を削除する

## `slidev format [entry]` {#format}

Markdown ファイルをフォーマットします。これはスライドの内容ではなく、Markdown ファイルの構成のみをフォーマットすることに注意してください。

- `[entry]` (`string`, デフォルト: `slides.md`): スライド Markdown ファイルのパス

## `slidev theme [subcommand]` {#theme}

テーマ関連の操作を行います。

サブコマンド:

- `eject [entry]`: 現在のテーマをローカルファイルに出力します。詳細は <LinkInline link="features/eject-theme" /> を参照してください。
  - `[entry]` (`string`, デフォルト: `slides.md`): スライド Markdown ファイルのパス
  - オプション:
    - `--dir` (`string`, デフォルト: `theme`): 出力先のディレクトリ
    - `--theme`, `-t` (`string`): 指定したテーマでオーバーライドする
