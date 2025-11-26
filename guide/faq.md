---
outline: deep
---

# よくある質問

## アセットの処理 {#assets-handling}

スライド内で画像やビデオなどの静的アセットを使用することができます。Slidev は Vite をベースとしているため、マークダウンファイルに直接インポートできます。

静的解析可能なアセット URL には相対パスを使用できます。

```md
![alt](./image.png)
<img src="./image.png" />
```

上記の場合、ビルド後、URL は `/BASE_URL/assets/image.png` に解決されます。

ただし、フロントマターおよび他のコンポーネント内の相対パスはビルド後に破損します。

```md
---
background: ./image.png  # ビルド後に破損
---

<Comp src="./image.png" />
```

上記の場合、URL は静的に分析できず、そのまま保存されるため、ビルド後に 404 エラーが発生します。

これを解決するには、これらのアセットを [public フォルダ](../custom/directory-structure#public) に配置し、絶対パスを使用してインポートできます。

```md
---
background: /image.png
---

<Comp src="/image.png" />
```

詳細については、[Vite のドキュメント](https://vitejs.dev/guide/assets.html) を参照してください。

## ポジショニング {#positioning}

Slidev は Web ベースなので、CSS は要素をポジショニングするための主な方法です。要素をポジショニングするための便利なヒントを以下に示します。

### グリッドとフレックスボックス

CSS グリッドを使用して複雑なレイアウトを作成できます。

::: code-group

```md [2 列]
<div class="grid grid-cols-2 gap-4">
  <div>
    最初の列
  </div>
  <div>
    2 番目の列
  </div>
</div>
```

```md [複雑なケース]
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
  <div>
    最初の列 (200px)
  </div>
  <div>
    2 番目の列 (自動調整)
  </div>
  <div>
    3 番目の列 (親コンテナの 10% 幅)
  </div>
</div>
```

:::

そしてフレックスボックスを使用して、より応答性の高いレイアウトを作成できます。

::: code-group

```md [水平]
<div class="flex items-center">
  <div>
    最初のブロック
  </div>
  <div>
    2 番目のブロック
  </div>
</div>
```

```md [垂直]
<div class="flex flex-col items-center">
  <div>
    中央寄せコンテンツ
  </div>
</div>
```

:::

詳細は [CSS グリッド](https://css-tricks.com/snippets/css/complete-guide-grid/)、[フレックスボックス](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)、または [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/) をご覧ください。

### 絶対位置

UnoCSS を使用して要素を絶対位置に配置できます。

```md
<div class="absolute left-30px bottom-30px">
  これは左下に揃ったフッターです
</div>
```

または、ドラッグ可能な要素機能を使用してください。

<LinkCard link="features/draggable" />

## サイズを調整 {#adjust-size}

- すべてのスライドのサイズを調整:

<LinkCard link="features/canvas-size" />

- 複数のスライドのサイズを調整:

<LinkCard link="features/zoom-slide" />

- いくつかの要素のサイズを調整:

<LinkCard link="features/transform-component" />
