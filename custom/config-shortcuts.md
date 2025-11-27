# ショートカットの設定

<Environment type="client" />

## はじめに

`./setup/shortcuts.ts` を作成して、以下の内容を入力します:

```ts twoslash [./setup/shortcuts.ts]
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

セットアップ関数では、ショートカットの新しい配列を返すことでキーボードショートカットをカスタマイズできます。上の例は `next` 操作を <kbd>enter</kbd> にバインドし、`prev` 操作を <kbd>backspace</kbd> にバインドします。

デフォルトのショートカットとナビゲーション操作については、[ナビゲーションアクション](../guide/ui#navigation-actions) セクションを参照してください。

## キーバインディング形式

各ショートカットの `key` は文字列 (例: `'Shift+Ctrl+A'`) または計算型ブール値にすることができます。[VueUse の `useMagicKeys`](https://vueuse.org/core/useMagicKeys/) を参照してください
