---
relates:
  - vite-plugin-remote-assets: https://github.com/antfu/vite-plugin-remote-assets
tags: [ビルド]
description: |
  ビルド時にリモートアセットをダウンロードしてバンドルします。
---

# リモートアセットのバンドル

Markdown で行うのと同様に、リモートまたはローカルの URL を指す画像を使用できます。

リモートアセットの場合、組み込みの [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) は最初の実行時にそれらをディスクにキャッシュし、その後は大きな画像でも即座に読み込めるようにします。

```md
![リモートの画像](https://sli.dev/favicon.png)
```

ローカルアセットの場合は、[`public` フォルダー](/custom/directory-structure.html#public) に配置し、**先頭にスラッシュ**を付けて参照します（例: `/pic.png`、作業ファイルに対して相対的に `./pic.png` とは指定できません）。

```md
![ローカルの画像](/pic.png)
```

サイズやスタイルを指定したい場合は、`<img>` タグに変換して使用できます:

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```
