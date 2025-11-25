---
depends:
  - guide/syntax#code-block
tags: [コードブロック]
description: |
  複数のコードブロックをグループ化し、タイトル名に応じてアイコンを自動的に一致させます。
---

# コードグループ

> [!NOTE]
> この機能を使うには [MDC 構文](/features/mdc#mdc-syntax) が必要です。`mdc: true` を有効にして使用してください。

複数のコードブロックをこのようにグループ化できます:

````md
::code-group

```sh [npm]
npm i @slidev/cli
```

```sh [yarn]
yarn add @slidev/cli
```

```sh [pnpm]
pnpm add @slidev/cli
```

::
````

## タイトルアイコンのマッチング

`code groups`、`code block` そして [`Shiki Magic Move`](/features/shiki-magic-move) もタイトル名に応じてアイコンを自動的に一致させることをサポートしています。

![code-groups-demo](/assets/code-groups-demo.png)

::: info

デフォルトで、いくつかの組み込みアイコンを提供しています。これらを使用するには [@iconify-json/vscode-icons](https://www.npmjs.com/package/@iconify-json/vscode-icons) をインストールしてください。

:::

::: details ビルトインアイコン一覧

```js
const builtinIcons = {
  // パッケージマネージャー
  'pnpm': 'i-vscode-icons:file-type-light-pnpm',
  'npm': 'i-vscode-icons:file-type-npm',
  'yarn': 'i-vscode-icons:file-type-yarn',
  'bun': 'i-vscode-icons:file-type-bun',
  'deno': 'i-vscode-icons:file-type-deno',
  // フレームワーク
  'vue': 'i-vscode-icons:file-type-vue',
  'svelte': 'i-vscode-icons:file-type-svelte',
  'angular': 'i-vscode-icons:file-type-angular',
  'react': 'i-vscode-icons:file-type-reactjs',
  'next': 'i-vscode-icons:file-type-light-next',
  'nuxt': 'i-vscode-icons:file-type-nuxt',
  'solid': 'logos:solidjs-icon',
  'astro': 'i-vscode-icons:file-type-light-astro',
  // バンドラー
  'rollup': 'i-vscode-icons:file-type-rollup',
  'webpack': 'i-vscode-icons:file-type-webpack',
  'vite': 'i-vscode-icons:file-type-vite',
  'esbuild': 'i-vscode-icons:file-type-esbuild',
  // 設定ファイル
  'package.json': 'i-vscode-icons:file-type-node',
  'tsconfig.json': 'i-vscode-icons:file-type-tsconfig',
  '.npmrc': 'i-vscode-icons:file-type-npm',
  '.editorconfig': 'i-vscode-icons:file-type-editorconfig',
  '.eslintrc': 'i-vscode-icons:file-type-eslint',
  '.eslintignore': 'i-vscode-icons:file-type-eslint',
  'eslint.config': 'i-vscode-icons:file-type-eslint',
  '.gitignore': 'i-vscode-icons:file-type-git',
  '.gitattributes': 'i-vscode-icons:file-type-git',
  '.env': 'i-vscode-icons:file-type-dotenv',
  '.env.example': 'i-vscode-icons:file-type-dotenv',
  '.vscode': 'i-vscode-icons:file-type-vscode',
  'tailwind.config': 'vscode-icons:file-type-tailwind',
  'uno.config': 'i-vscode-icons:file-type-unocss',
  'unocss.config': 'i-vscode-icons:file-type-unocss',
  '.oxlintrc': 'i-vscode-icons:file-type-oxlint',
  'vue.config': 'i-vscode-icons:file-type-vueconfig',
  // ファイル名拡張子
  '.mts': 'i-vscode-icons:file-type-typescript',
  '.cts': 'i-vscode-icons:file-type-typescript',
  '.ts': 'i-vscode-icons:file-type-typescript',
  '.tsx': 'i-vscode-icons:file-type-typescript',
  '.mjs': 'i-vscode-icons:file-type-js',
  '.cjs': 'i-vscode-icons:file-type-js',
  '.json': 'i-vscode-icons:file-type-json',
  '.js': 'i-vscode-icons:file-type-js',
  '.jsx': 'i-vscode-icons:file-type-js',
  '.md': 'i-vscode-icons:file-type-markdown',
  '.py': 'i-vscode-icons:file-type-python',
  '.ico': 'i-vscode-icons:file-type-favicon',
  '.html': 'i-vscode-icons:file-type-html',
  '.css': 'i-vscode-icons:file-type-css',
  '.scss': 'i-vscode-icons:file-type-scss',
  '.yml': 'i-vscode-icons:file-type-light-yaml',
  '.yaml': 'i-vscode-icons:file-type-light-yaml',
  '.php': 'i-vscode-icons:file-type-php',
}
```

:::

## カスタムアイコン

[iconify](https://icones.js.org) コレクションの任意の名前を `~icon~` 構文で使用できます。例えば:

````md
```js [npm ~i-uil:github~]
console.log('Hello, GitHub!')
```
````

この機能を使うには、以下が必要です:

1. アイコンのコレクションをインストールします。

:::code-group

```sh [npm]
npm add @iconify-json/uil
```

```sh [yarn]
yarn add @iconify-json/uil
```

```sh [pnpm]
pnpm add @iconify-json/uil
```

```sh [bun]
bun add @iconify-json/uil
```

:::

2. `uno.config.ts` にアイコンを追加します。

```ts [uno.config.ts] {4-6}
import { defineConfig } from 'unocss'

export default defineConfig({
  safelist: [
    'i-uil:github',
  ],
})
```
