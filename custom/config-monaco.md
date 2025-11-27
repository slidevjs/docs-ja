# Monaco の設定

<Environment type="client" />

`./setup/monaco.ts` を作成して、以下の内容を入力します:

```ts twoslash [./setup/monaco.ts]
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

詳細は、[Monaco の設定](https://github.com/Microsoft/monaco-editor) をご覧ください。

## TypeScript 型

Monaco で TypeScript を使用する場合、依存関係の型は自動的にクライアント側にインストールされます。

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

上の例では、`vue` と `@vueuse/core` が dependencies / devDependencies としてインストールされていることを確認してください。Slidev は残りの部分を処理して、エディタの型を自動的に機能させます。SPA としてデプロイされる場合、これらの型は静的ホスティング用にバンドルされます。

### 追加の型

Slidev はスライド内のすべての Monaco コードブロックをスキャンし、使用されているライブラリの型をインポートします。何かが見落とされた場合は、型をインポートする追加パッケージを明示的に指定できます:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### 自動型取得

以下のヘッドマターを設定して、CDN から型をロードすることを選択できます:

```md
---
monacoTypesSource: ata
---
```

この機能は [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) を使用して、完全にクライアント側で実行されます。

## テーマの設定

v0.48.0 以降、Monaco は [Shiki のセットアップファイル](/custom/config-highlighter#configure-shiki) で設定した Shiki テーマを再利用します。これは [`@shikijs/monaco`](https://shiki.style/packages/monaco) を使用しています。もう心配する必要はなく、コードブロックの残りの部分と一貫したスタイルを持つようになります。

## エディターの設定

> v0.43.0 以降で利用可能

Monaco エディターをカスタマイズする場合、[Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) 定義に一致する `editorOptions` オブジェクトを渡すことができます。

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

または、これらのオプションをすべての Monaco インスタンスに適用したい場合は、`defineMonacoSetup` 関数で設定することができます

```ts twoslash [./setup/monaco.ts]
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

## 無効化

v0.48.0 以降、Monaco エディターはデフォルトで有効になっており、使用時のみバンドルされます。無効にする場合は、スライドのフロントマターで `monaco` を `false` に設定できます:

```yaml
---
monaco: false # can also be `dev` or `build` to conditionally enable it
---
```

## コードランナーの設定

Monaco ランナーがコードを実行する方法を設定するか、カスタム言語のサポートを追加するには、[コードランナーの設定](/custom/config-code-runners) を参照してください。
