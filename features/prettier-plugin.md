---
relates:
  - features/block-frontmatter
  - GitHub Repo: https://github.com/slidevjs/prettier-plugin
  - Prettier: https://prettier.io/
tags: [エディタ]
description: |
  Prettier プラグインを使ってスライドをフォーマットします。
---

# Prettier プラグイン

Slidev の構文は、[Prettier](https://prettier.io/) のデフォルトの Markdown パーサーと互換性がない場合があります。これを解決するために、Slidev はスライドをフォーマットするための Prettier プラグインを提供しています。Prettier をサポートするお好みのエディタで使用できます。

## 1. インストール

::: code-group

```bash [npm]
npm i -D prettier prettier-plugin-slidev
```

```bash [pnpm]
pnpm i -D prettier prettier-plugin-slidev
```

```bash [yarn]
yarn add -D prettier prettier-plugin-slidev
```

```bash [bun]
bun add -D prettier prettier-plugin-slidev
```

```bash [deno]
deno add -D npm:prettier npm:prettier-plugin-slidev
```

:::

## 2. プラグインを有効化

[prettier 設定ファイル](https://prettier.io/docs/en/configuration) を作成または変更して、プラグインを有効にします:

```json
{
  "overrides": [
    {
      "files": ["slides.md", "pages/*.md"],
      "options": {
        "parser": "slidev",
        "plugins": ["prettier-plugin-slidev"]
      }
    }
  ]
}
```

`plugins` を指定するだけでは不十分です。Slidev と一般的な Markdown ファイルは同じファイル拡張子 `.md` を共有しているためです。
