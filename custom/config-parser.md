# プレパーサーの設定

::: info
カスタムプレパーサーはあまり頻繁に使用されることを想定されていません。通常、カスタム構文に [トランスフォーマー](./config-transformers) を使用できます。
:::

Slidev は、プレゼンテーションファイル (例: `slides.md`) を 3 つのステップで解析します:

1. 「事前解析」ステップが実行されます: ファイルは `---` セパレータを使用してスライドに分割され、可能なフロントマターブロックが考慮されます。
2. 各スライドは外部ライブラリで解析されます。
3. Slidev は特別なフロントマタープロパティ `src: ....` を解決し、他の md ファイルを含めることができます。

## Markdown パーサー

ステップ 2 で使用される Markdown パーサーの設定は、[Vite 内部プラグインの設定](/custom/config-vite#configure-internal-plugins) で行うことができます。

## プレパーサー拡張機能

> v0.37.0 以降で利用可能。

::: warning
重要: プレパーサー設定を変更するときは、Slidev を停止して開始する必要があります (再起動では十分でないかもしれません)。
:::

プレパーサー (上記のステップ 1) は高度に拡張可能で、md ファイル用にカスタム構文を実装できます。プレパーサーの拡張は**高度な機能**と見なされ、構文の暗黙的な変更により [エディター統合](../features/side-editor) が破損する可能性があります。

カスタマイズするには、以下の内容で `./setup/preparser.ts` ファイルを作成します:

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

この例は、任意の `@@@` 行を `hello` 行に置き換えます。プレパーサー設定ファイルの構造と、プレパーサーが関与する主な概念を示すと:

- `definePreparserSetup` はパラメータとして関数で呼び出す必要があります。
- 関数はファイルパス (ルートプレゼンテーションファイルの)、ヘッドマター (md ファイルから)、および v0.48.0 以降は、モード (dev、build、または export) を受け取ります。この情報を使用できます (例: プレゼンテーションファイルに基づいて拡張機能を有効にするか、PDF をエクスポートしているかどうか)。
- 関数はプレパーサー拡張機能のリストを返す必要があります。
- 拡張機能には以下を含めることができます:
  - md ファイルのヘッドマター解析直後に実行される `transformRawLines(lines)` 関数。md ファイルのすべての行のリストを受け取ります。関数はリストを任意に変更できます。
  - 各スライドに対して呼び出される `transformSlide(content, frontmatter)` 関数。ファイルの分割直後に、スライドコンテンツを文字列として受け取り、スライドのフロントマターをオブジェクトとして受け取ります。関数はフロントマターを変更でき、コンテンツ文字列を返す必要があります (変更されていない場合は `undefined` でもかまいません)。
  - 各スライドに対して呼び出される `transformNote(note, frontmatter)` 関数。ファイルの分割直後に、スライドノートを文字列または未定義として受け取り、スライドのフロントマターをオブジェクトとして受け取ります。関数はフロントマターを変更でき、ノート文字列を返す必要があります (変更されていない場合は `undefined` でもかまいません)。
  - `name`

## プレパーサー拡張機能の例

### ユースケース 1: トップレベルのコンパクトな構文

プレゼンテーション（の一部）がカバー画像とほかの md ファイルのインクルードで構成される場合を想像してください。例えば、`slides.md`（の一部）を以下のようなコンパクトな記法で書きたくなるかもしれません:

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://cover.sli.dev
# Questions?
see you next time
```

これらの `@src:` および `@cover:` 構文に対応させるには、以下の内容で `./setup/preparser.ts` ファイルを作成します:

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

以上です。

### ユースケース 2: カスタムフロントマターを使用してスライドをラップする

既存のさまざまなレイアウトのスライドをスケーリングしたい場合を想像してください。新しいレイアウトを作成することは適切ではありませんでした。
たとえば、`slides.md` を以下のように記述する場合があります:

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Welcome

> great!

---
_scale: 4
---
# Break

---

# Ok

---
layout: center
_scale: 2.5
---
# Questions?
see you next time
```

ここでは、フロントマターで `_scale` にアンダースコアを使用して、既存のフロントマタープロパティとの競合を避けました (実際、アンダースコアなしの `scale` の場合は潜在的な問題を引き起こす可能性があります)。

フロントマターでこの `_scale: ...` 構文を処理するには、以下の内容で `./setup/preparser.ts` ファイルを作成します:

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      async transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

以上です。

### ユースケース 3: カスタムフロントマターを使用してノートを変換する

スライドのデフォルトノートをカスタムノートに置き換えたい場合を想像してください。
たとえば、`slides.md` を以下のように記述する場合があります:

<!-- eslint-skip -->

```md
---
layout: quote
_note: notes/note.md
---

# Welcome

> great!

<!--
Default slide notes
-->
```

ここでは、フロントマターで `_note` にアンダースコアを使用して、既存のフロントマタープロパティとの競合を避けました。

フロントマターでこの `_note: ...` 構文を処理するには、以下の内容で `./setup/preparser.ts` ファイルを作成します:

```ts twoslash [./setup/preparser.ts]
import fs, { promises as fsp } from 'node:fs'
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      async transformNote(note, frontmatter) {
        if ('_note' in frontmatter && fs.existsSync(frontmatter._note)) {
          try {
            const newNote = await fsp.readFile(frontmatter._note, 'utf8')
            return newNote
          }
          catch (err) {
          }
        }

        return note
      },
    },
  ]
})
```
