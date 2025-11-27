# フォントの設定

HTML と CSS を使用してスライドのフォントとスタイルをカスタマイズできますが、Slidev は手間なくそれらを使用する便利な方法も提供しています。

フロントマターで、以下のように設定します:

```yaml
---
fonts:
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
---
```

以上です。

フォントはデフォルトで**CDN を通じてプロバイダーから自動的にインポートされます。デフォルトは [Google Fonts](https://fonts.google.com/)** です。つまり、Google Fonts で利用可能なフォントを直接使用できます。

## ローカルフォント

デフォルトでは、Slidev は `fonts` 設定を通じて指定されたすべてのフォントが Google Fonts から来ると想定しています。ローカルフォントを使用する場合は、`fonts.local` を指定して自動インポートを無効にします。

```yaml
---
fonts:
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  sans: 'Helvetica Neue,Robot'
  # mark 'Helvetica Neue' as local font
  local: Helvetica Neue
---
```

## 太さとイタリック

デフォルトでは、Slidev は各フォントに対して 3 つの太さ `200`、`400`、`600` をインポートします。以下のように設定できます:

```yaml
---
fonts:
  sans: Robot
  # default
  weights: '200,400,600'
  # import italic fonts, default `false`
  italic: false
---
```

この設定はすべての Web フォントに適用されます。各フォントの太さをより詳細に制御するには、[HTML](/custom/directory-structure.html#index-html) と CSS を使用して手動でインポートする必要があります。

## フォールバックフォント

ほとんどのシナリオでは、「特別なフォント」を指定するだけで、Slidev がフォールバックフォントを追加します。例えば:

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

結果として以下のようになります

<!-- eslint-skip -->

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

フォールバックフォントを無効にする場合は、以下のように設定します:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## プロバイダー

- オプション: `google` | `coollabs` | `none`
- デフォルト: `google`

現在、[Google Fonts](https://fonts.google.com/) と [coolLabs](https://fonts.coollabs.io/) のみがサポートされており、今後さらにプロバイダーを追加する予定です。`none` に設定すると自動インポート機能が完全に無効になり、すべてのフォントがローカルとして扱われます。

```yaml
---
fonts:
  provider: none
---
```
