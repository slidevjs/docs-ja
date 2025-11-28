---
outline: deep
---

# ビルドとホスティング

Slidev はスライドを編集またはプレゼンテーション中に Web サーバーとして実行するように設計されています。ただし、プレゼンテーション後も、**インタラクティブな**スライドを他の人と共有したい場合があります。このガイドでは、スライドをビルドしてホストする方法を説明します。

## SPA としてビルド {#spa}

次のコマンドを使用して、スライドを静的な [シングルページアプリケーション (SPA)](https://developer.mozilla.org/ja/docs/Glossary/SPA) にビルドできます。

```bash
$ slidev build
```

デフォルトでは、生成されたファイルは `dist` フォルダに配置されます。ビルドされたバージョンのスライドをテストするには、`npx vite preview` または他の静的サーバーを実行します。

### ベースパス {#base}

スライドをサブルートにデプロイするには、`--base` オプションを渡す必要があります。`--base` パスは **スラッシュ `/` で始まり、スラッシュ `/` で終わる必要があります**。例えば:

```bash
$ slidev build --base /talks/my-cool-talk/
```

詳細については [Vite のドキュメント](https://vitejs.dev/guide/build.html#public-base-path) を参照してください。

### 出力先のディレクトリ {#output-directory}

`--out` を使用して出力先のディレクトリを変更できます。

```bash
$ slidev build --out my-build-folder
```

### スピーカーノートを削除する {#without-notes}

スライドは公開したいけど、スピーカーノートを含めたくない場合、`--without-notes` オプションでビルドします:

```bash
$ slidev build --without-notes
```

### 複数ビルド {#multiple-builds}

複数のマークダウンファイルを引数として渡すことで、一度に複数のスライドデッキをビルドできます。

```bash
$ slidev build slides1.md slides2.md
```

またはシェルがサポートしている場合、グロブパターンを使用できます。

```bash
$ slidev build *.md
```

この場合、各入力ファイルは出力ディレクトリ内のビルドを含むフォルダを生成します。

### 例 {#examples}

エクスポートされた SPA の例をいくつか示します。

- [デモスライド](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)
- その他は [ショーケース](../resources/showcases) を参照

### オプション {#options}

<LinkCard link="features/build-with-pdf" />
<LinkCard link="features/bundle-remote-assets" />

## ホスティング {#hosting}

プロジェクトのひな型を作成するには、`npm init slidev@latest` を使用することをお勧めします。これには、ホスティングサービスに必要な構成ファイルが含まれています。

### GitHub Pages {#github-pages}

GitHub Actions を使用して [GitHub Pages](https://pages.github.com/) にスライドをデプロイするには、以下の手順に従ってください。

1. リポジトリで、`Settings` > `Pages` に進みます。`Build and deployment` の下で `GitHub Actions` を選択します。(`Deploy from a branch` を選択して `dist` ディレクトリを主導でアップロードする方法は推奨されません)
2. `.github/workflows/deploy.yml` を作成して、以下の内容で GitHub Actions を通じて GitHub Pages にスライドをデプロイします。

::: details deploy.yml

```yaml
name: Deploy pages

on:
  workflow_dispatch:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Setup @antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: nci

      - name: Build
        run: nr build --base /${{github.event.repository.name}}/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

:::

3. リポジトリに変更をコミットしてプッシュします。GitHub Actions ワークフローは `main` ブランチにプッシュするたびに自動的にスライドを GitHub Pages にデプロイします。
4. スライドに `https://<username>.github.io/<repository-name>/` でアクセスできます。

### Netlify

プロジェクトルートに `netlify.toml` を作成して、以下の内容にします。

::: details netlify.toml

```toml
[build]
publish = 'dist'
command = 'npm run build'

[build.environment]
NODE_VERSION = '20'

[[redirects]]
from = '/*'
to = '/index.html'
status = 200
```

:::

その後、[Netlify ダッシュボード](https://netlify.com/) に移動してリポジトリから新しいサイトを作成します。

### Vercel

プロジェクトルートに `vercel.json` を作成して、以下の内容にします。

::: details vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

:::

その後、[Vercel ダッシュボード](https://vercel.com/) に移動してリポジトリから新しいサイトを作成します。

### Docker でホストする {#docker}

コンテナでプレゼンテーションを実行する迅速な方法が必要な場合は、[tangramor](https://github.com/tangramor) によって維持されているプリビルト [docker イメージ](https://hub.docker.com/r/tangramor/slidev) を使用することも、独自にビルドすることもできます。

::: details Docker イメージを使用する

作業フォルダで以下のコマンドを実行するだけです。

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_注_**: `NPM_MIRROR` を使用して npm ミラーを指定してインストールプロセスを高速化できます。

作業フォルダが空の場合、テンプレート `slides.md` とその他の関連ファイルを作業フォルダの下に生成し、ポート `3030` でサーバーを起動します。

スライドには `http://localhost:3030/` からアクセスできます

スライド用の Docker イメージを作成するには、以下の Dockerfile を使用できます。

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

docker イメージを作成: `docker build -t myslides .`

コンテナを実行: `docker run --name myslides --rm --user node -p 3030:3030 myslides`

スライドを `http://localhost:3030/` で確認できます

:::
