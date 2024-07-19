# 静的ホスティング

## シングルページアプリケーション(SPA)を構築する 

スライドをセルフホスティング可能なSPAとして構築することができます：

```bash
$ slidev build
```

生成されたアプリケーションは`dist/`の配下に配置され、[GitHub Pages](https://pages.github.com/)、[Netlify](https://netlify.app/)、[Vercel](https://vercel.com/)など、好きな場所にホストすることができます。これでリンク1つで世界中の人とスライドを共有することできます。

### ベースパス

サブルート下にスライドをデプロイするには、`--base`オプションを指定する必要があります。例：

```bash
$ slidev build --base /talks/my-cool-talk/
```

詳細は[Viteのドキュメント](https://vitejs.dev/guide/build.html#public-base-path)を参照してください。

### ダウンロード可能なPDFを提供する

以下の設定により、SPAの閲覧者向けにダウンロード可能なPDFを提供することができます：

```md
---
download: true
---
```

Slidevはビルドと一緒にPDFファイルを生成し、SPAにダウンロードボタンが表示されます。

またPDFに対してカスタムURLを指定することもできます。その場合、レンダリング処理はスキップされます。

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

## サンプル

以下はSPAとしてエクスポートされた例です：

- [Starter Template](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)

詳しくは[ショーケース](/showcases)を参照してください。

## ホスティング

`npm init slidev@lastest`を使って、サービスをそのままホスティングするために必要な設定ファイルが含まれたプロジェクトの雛形を生成することを推奨します。

### Netlify

- [Netlify](https://netlify.com/)

プロジェクトルートに以下の内容で`netlify.toml`を作成します。

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Netlifyのダッシュボードを開き、リポジトリを指定して新しいサイトを作成してください。

### Vercel

- [Vercel](https://vercel.com/)

プロジェクトルートに以下の内容で`vercel.json`を作成します。

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Vercelのダッシュボードを開き、リポジトリを指定して新しいサイトを作成してください。

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

GitHub Pagesにデプロイするには:

- プロジェクトのすべてのファイルをリポジトリ（例：`name_of_repo`）にアップロードします。
- `.github/workflows/deploy.yml`というファイルを作成し、以下の内容を記述して、GitHub Actions経由でスライドをGitHub Pagesにデプロイします。`<name_of_repo>`は`name_of_repo`に置き換えます。このとき、前後のスラッシュはそのまま残してください。

```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /${{github.event.repository.name}}/

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

- リポジトリ内で、Settings > Pagesに移動します。"Build and deployment"の項目で、"GitHub Actions"を選択します。
- 最後に、すべてのワークフローが実行された後、Settings > Pagesの下にスライドへのリンクが表示されるはずです。
