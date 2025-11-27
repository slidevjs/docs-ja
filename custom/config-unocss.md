# UnoCSS の設定

<Environment type="node" />

[UnoCSS](https://unocss.dev) は v0.42.0 以降、Slidev のデフォルト CSS フレームワークになりました。UnoCSS は完全な柔軟性と拡張性を備えた高速アトミック CSS エンジンです。Tailwind CSS クラスのほとんどは**そのまま**サポートされており、独自の設定で拡張することもできます。

デフォルトでは、Slidev は以下のプリセットをそのまま有効にしています:

- [@unocss/preset-wind3](https://unocss.dev/presets/wind3) - Tailwind / Windi CSS 互換ユーティリティ
- [@unocss/preset-attributify](https://unocss.dev/presets/attributify) - 属性化モード
- [@unocss/preset-icons](https://unocss.dev/presets/icons) - アイコンをクラスとして使用する
- [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts) - Web フォントを簡単に使用する
- [@unocss/transformer-directives](https://unocss.dev/transformers/directives) - CSS で `@apply` を使用する

Slidev はまた [ソースコード](https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts) に見られるようなショートカットを追加します。

したがって、好きな方法でコンテンツをスタイリングできます。例えば:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

## 設定

プロジェクトのルートに `uno.config.ts` を作成して、組み込み設定を拡張できます

```ts twoslash [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})
```

詳しくは [UnoCSS 設定](https://unocss.dev/guide/config-file) をご覧ください。
