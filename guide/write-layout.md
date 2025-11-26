# レイアウトの作成

> 最初に <LinkInline link="guide/layout" /> を読んでください。

カスタムレイアウトを作成するには、`layouts` ディレクトリに新しい Vue ファイルを作成するだけです:

```bash
your-slidev/
  ├── ...
  ├── slides.md
  └── layouts/
      ├── ...
      └── MyLayout.vue
```

レイアウトは Vue コンポーネントなので、Vue のすべての機能を使用できます。

レイアウトコンポーネントで、スライドコンテンツに `<slot/>` (デフォルトスロット) を使用します:

```vue [default.vue]
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

より複雑なレイアウト用に [名前付きスロット](https://vuejs.org/guide/components/slots.html) を持つこともできます:

```vue [split.vue]
<template>
  <div class="slidev-layout split">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>
```

その後、<LinkInline link="features/slot-sugar" /> で使用します。
