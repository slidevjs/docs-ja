# コードランナーの設定

<Environment type="client" />

Monaco エディタのカスタム言語用のコードランナーを定義します。

デフォルトでは、JavaScript、TypeScript ランナーが組み込みでサポートされています。これらはブラウザで**サンドボックス環境なし**で実行されます。より高度な統合が必要な場合は、コードをリモートサーバーに送信したり、Web Worker で実行したり、その他のことを行うカスタムコードランナーを提供できます。

`./setup/code-runners.ts` を作成して、以下の内容を入力します:

<!-- eslint-disable import/first -->

```ts twoslash [setup/code-runners.ts]
declare const executePythonCodeRemotely: (code: string) => Promise<string>
declare const sanitizeHtml: (html: string) => string
// ---cut---
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      // Somehow execute the code and return the result
      const result = await executePythonCodeRemotely(code)
      return {
        text: result
      }
    },
    html(code, ctx) {
      return {
        html: sanitizeHtml(code)
      }
    },
    // or other languages, key is the language id
  }
})
```

## ランナーコンテキスト

2 番目の引数 `ctx` はランナーコンテキストで、以下のプロパティを含みます:

```ts twoslash
import type { CodeRunnerOutputs } from '@slidev/types'
import type { CodeToHastOptions } from 'shiki'
// ---cut---
export interface CodeRunnerContext {
  /**
   * Options passed to runner via the `runnerOptions` prop.
   */
  options: Record<string, unknown>
  /**
   * Highlight code with shiki.
   */
  highlight: (code: string, lang: string, options?: Partial<CodeToHastOptions>) => string
  /**
   * Use (other) code runner to run code.
   */
  run: (code: string, lang: string) => Promise<CodeRunnerOutputs>
}
```

## ランナーの出力

ランナーはテキストまたは HTML 出力、またはマウントされる要素を返すことができます。詳細については https://github.com/slidevjs/slidev/blob/main/packages/types/src/code-runner.ts を参照してください。

## 追加のランナー依存関係

デフォルトでは、Slidev は Markdown ソースをスキャンし、コードランナーに必要な依存関係を自動的にインポートします。手動で依存関係をインポートする場合は、スライドのフロントマターで `monacoRunAdditionalDeps` オプションを使用できます:

```yaml
monacoRunAdditionalDeps:
  - ./path/to/dependency
  - lodash-es
```

::: tip
パスは `snippets` ディレクトリを基準に解決されます。そして、依存関係の名前は、コード内でインポートされたものと完全に同じである必要があります。
:::
