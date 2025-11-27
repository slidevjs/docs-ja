# コンテキストメニューの設定

<Environment type="client" />

Slidev のコンテキストメニュー項目をカスタマイズします。

`./setup/context-menu.ts` を作成して、以下の内容を入力します:

<!-- eslint-disable import/first -->

```ts twoslash [./setup/context-menu.ts]
// ---cut---
import { useNav } from '@slidev/client'
import { defineContextMenuSetup } from '@slidev/types'
import { computed } from 'vue'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import Icon3DCursor from '~icons/carbon/3d-cursor'

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // if `small` is `true`, only the icon is shown
      label: 'Custom Menu Item', // or a Vue component
      action() {
        alert('Custom Menu Item Clicked!')
      },
      disabled: isPresenter.value,
    },
  ])
})
```

これはコンテキストメニューに新しいメニュー項目を追加します。

コンテキストメニューをグローバルに無効にするには、フロントマターで `contextMenu` を `false` に設定します。`contextMenu` は `dev` または `build` に設定して、開発モードまたはビルドモードでのみコンテキストメニューを有効にすることもできます。
