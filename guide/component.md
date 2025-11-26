# スライドのコンポーネント

Slidev の最も強力な機能の 1 つは、Vue コンポーネントをスライド内で直接使用できる機能です。これにより、対話的で動的なコンテンツを簡単に作成できます。

## コンポーネントの使用 {#use}

[`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) の助けを借りて、Slidev はスライド内で Vue コンポーネントを手動でインポートすることなく直接使用できます。

```md
# My Slide

<MyComponent :count="4"/>
```

コンポーネントの取得元は以下の通りです。

- ビルトインコンポーネント。[ビルトインコンポーネント](../builtin/components) を参照してください。
- テーマとアドオンによって提供されたもの。<LinkInline link="guide/theme-addon" /> を参照してください。
- `components` ディレクトリ内のカスタムコンポーネント。次のセクションを参照してください。

## コンポーネントの作成 {#write}

カスタムコンポーネントを作成するには、`components` ディレクトリに新しい Vue ファイルを作成するだけです。

```bash
your-slidev/
  ├── ...
  ├── slides.md
  └── components/
      ├── ...
      └── MyComponent.vue
```

Vue コンポーネントの作成方法については、[Vue ドキュメント](https://vuejs.org/guide/essentials/component-basics.html) を参照してください。

また <LinkInline link="guide/write-addon" /> を使用して、コンポーネントを再利用し、他の人と共有することもできます。
