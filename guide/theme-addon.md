# テーマとアドオン

スライドプロジェクトは 1 つのテーマと複数のアドオンを持つことができます。それらはすべてスタイル、コンポーネント、レイアウト、およびその他の設定をスライドプロジェクトに提供できます。

## テーマを使用する {#use-theme}

Slidev でテーマを変更するのは驚くほど簡単です。[ヘッドマター](../custom/index#headmatter) に `theme` オプションを追加するだけです。

```md
---
theme: seriph
---

# 最初のスライド
```

公式テーマとコミュニティテーマのリストは [テーマギャラリー](../resources/theme-gallery) で確認できます。

::: info テーマ名の命名規則

- ローカルテーマフォルダへの相対パスまたは絶対パス(`../my-theme` など)を渡すこともできます
- テーマ名としてフルパッケージ名を常に使用できます
- テーマが [公式](../resources/theme-gallery#official-themes) からか、`slidev-theme-name` のように名前が付けられている場合、`slidev-theme-` プレフィックスを省略できます
- `@org/slidev-theme-name` のようなスコープ付きパッケージの場合、フルパッケージ名が必要です

:::

サーバーを起動すると、確認後にテーマをインストールするよう求められます。

<div class="language-md text-xs pl-6">
<pre style="overflow: hidden; text-wrap: pretty;">
<span class="token keyword">?</span> テーマ <span class="token string">"@slidev/theme-seriph"</span> がプロジェクトで見つかりません。今すぐインストールしますか? › (Y/n)
</pre>
</div>

または手動でテーマをインストール:

```bash
$ npm install @slidev/theme-seriph
```

以上です。新しいテーマを楽しんでください！　使用方法の詳細については、テーマの README を参照できます。

<SeeAlso :links="[
  'features/eject-theme',
]" />

## アドオンを使用する {#use-addon}

アドオンはテーマに似ていますが、より柔軟で、スライドプロジェクトに追加機能を追加するために使用できます。プロジェクトに複数のアドオンを追加でき、スライドプロジェクトに追加機能を追加するために使用できます。

アドオンを使用するには、[ヘッドマター](../custom/index#headmatter) に `addons` オプションを追加できます。

```md
---
addons:
  - excalidraw
  - '@slidev/plugin-notes'
---
```

公式アドオンとコミュニティアドオンのリストは [アドオンギャラリー](../resources/addon-gallery) で確認できます。
