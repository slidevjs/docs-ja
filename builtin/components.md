# コンポーネント

このページでは、Slidev が提供する組み込みコンポーネントをすべて紹介します。これらのコンポーネントはスライド内で**直接**使用できます。

<LinkInline link="guide/theme-addon" /> は追加のコンポーネントを提供できます。独自のコンポーネントを追加するには、<LinkInline link="guide/component#write" /> を参照してください。

## `Arrow`

矢印を描画します。

### 使い方

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

もしくは:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

Props:

- `x1` (`string | number`, 必須): 始点の x 座標
- `y1` (`string | number`, 必須): 始点の y 座標
- `x2` (`string | number`, 必須): 終点の x 座標
- `y2` (`string | number`, 必須): 終点の y 座標
- `width` (`string | number`, デフォルト: `2`): 線の幅
- `color` (`string`, デフォルト: `'currentColor'`): 線の色
- `two-way` (`boolean`, デフォルト: `false`): 双方向の矢印を描画

## `VDragArrow`

ドラッグ可能な `Arrow` コンポーネントです。

### 使い方

<LinkCard link="features/draggable#draggable-arrow" />

位置を除いて、Props は [`Arrow` コンポーネント](#arrow) の Props と同じです。

## `AutoFitText`

> 試験的

コンテンツに合わせて自動的にフォントサイズが調整されるボックスです。PowerPoint や Keynote のテキストボックスに似ています。

### 使い方

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

Props:

- `max` (`string | number`, デフォルト `100`): 最大フォントサイズ
- `min` (`string | number`, デフォルト `30`): 最小フォントサイズ
- `modelValue` (`string`, デフォルト `''`): テキストコンテンツ

## `LightOrDark`

現在のテーマの色 (`Light` または `Dark`) に基づいて異なるコンテンツを表示します。

### 使い方

`#dark` と `#light` の 2 つのスロットを使用します:

```md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
```

`LightOrDark` コンポーネントに提供された Props は、スコープ付きスロット Props を使用して利用可能になります:

```md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
```

マークダウンをスロット内に提供することもできますが、コンテンツの前後に空行を入れる必要があります:

```md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
```

## `Link`

指定されたスライドに移動するためのリンクを挿入します。

### 使い方

```md
<Link to="42">42 枚目のスライドへ</Link>
<Link to="42" title="42 枚目のスライドへ"/>
<Link to="solutions" title="ソリューションへ"/>
```

Props:

- `to` (`string | number`): 移動先のスライドへのパス (スライドのパスは `1` から始まります)
- `title` (`string`): 表示するタイトル

対応するルートが存在する場合、`to` に文字列を使用できます。例えば:

```md
---
routeAlias: solutions
---

# Now some solutions!
```

## `PoweredBySlidev`

Slidev の Web サイトにリンクしている「Powered by Slidev」というテキストとロゴを表示します。

## `RenderWhen`

コンテキストに応じてスロットをレンダリングします（例えば、プレゼンタービューにいるかどうかなど）。

### 使用例

```md
<RenderWhen context="presenter">これはプレゼンタービューでのみ表示されます</RenderWhen>
```

コンテキスト: `'main' | 'visible' | 'print' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Props:

- `context` (`Context | Context[]`): コンテキストまたは確認したいコンテキストの配列
  - `'main'`: スライドとプレゼンタービューでレンダリングされます（['slide', 'presenter']と同等）
  - `'visible'`: ビューポートに入っている場合にレンダリングされます
  - `'print'`: 印刷モードでレンダリングされます
  - `'slide'`: スライドでレンダリングされます
  - `'overview'`: オーバービューでレンダリングされます
  - `'presenter'`: プレゼンタービューでレンダリングされます
  - `'previewNext'`: プレゼンターの次のスライドビューでレンダリングされます

スロット:

- `#default`: コンテキストが一致する場合にレンダリングされます
- `#fallback`: コンテキストが一致しない場合にレンダリングされます

## `SlideCurrentNo`

今のスライド番号を表示します。

### 使用例

```md
<SlideCurrentNo />
```

## `SlidesTotal`

スライドの総数を表示します。

### 使用例

```md
<SlidesTotal />
```

## `TitleRenderer`

スライドから解析された HTML のメインタイトルを挿入します。

タイトルおよびタイトルレベルは、各スライドの最初のタイトル要素から自動的に取得します。

取得する要素は、スライドのフロントマターを使用して上書きできます:

```yml
---
title: Amazing slide title
level: 2
---
```

### 使用例

`<TitleRenderer>` コンポーネントは仮想コンポーネントで、以下のようにインポートできます:

```js
import TitleRenderer from '#slidev/title-renderer'
```

そして、スライド内で次のように使用します:

```md
<TitleRenderer no="42" />
```

Props:

- `no` (`string | number`): 表示するタイトルのスライド番号 (スライドは `1` から始まります)

## `Toc`

目次を挿入します。

目次の中に表示したくないスライドがある場合、そのスライドのフロントマターで `hideInToc` オプションを使用できます:

```yml
---
hideInToc: true
---
```

タイトルは [`<Titles>` コンポーネント](#titles) で表示されます。

### 使用例

```md
<Toc />
```

Props:

- `columns` (`string | number`, デフォルト: `1`): 表示する列数
- `listClass` (`string | string[]`, デフォルト: `''`): 目次リストに適用するクラス
- `maxDepth` (`string | number`, デフォルト: `Infinity`): 表示するタイトルの最大深さレベル
- `minDepth` (`string | number`, デフォルト: `1`): 表示するタイトルの最小深さレベル
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, デフォルト: `'all'`):
  - `'all'`: すべての項目を表示
  - `'onlyCurrentTree'`: 現在のツリー内の項目のみ表示（アクティブな項目、その親、および子）
  - `'onlySiblings'`: 現在のツリー内の項目とその兄弟のみ表示

<!-- TODO: mode の解説がわかりづらいので、解説訳を工夫する -->

## `Transform`

要素にスケーリングや変形を適用します。

### 使用例

```md
<Transform :scale="0.5" origin="top center">
  <YourElements />
</Transform>
```

Props:

- `scale` (`number | string`, デフォルト `1`): 変形の倍率
- `origin` (`string`, デフォルト `'top left'`): 変形の基準点

## `Tweet`

Tweet を埋め込みます。

### 使用例

```md
<Tweet id="20" />
```

Props:

- `id` (`number | string`, 必須): Tweet の id
- `scale` (`number | string`, デフォルト `1`): 表示サイズの倍率
- `conversation` (`string`, デフォルト `'none'`): [Embedded Tweet parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, デフォルト `'visible'`): [Embedded Tweet parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

## `VAfter`, `VClick` と `VClicks`

<LinkCard link="guide/animations#click-animation" />

## `VSwitch`

クリックに基づいて複数のスロットを切り替えます。

<LinkCard link="guide/animations#enter-leave" />

- `unmount` プロパティが `true` に設定されている場合、次のスロットに切り替えるときに前のスロットがアンマウントされます。デフォルトは `false` です。
- `tag` および `childTag` プロパティを使用して、コンポーネントとその子のデフォルトのタグを変更できます。デフォルトは `div` です。
- `transition` プロパティを使用して、トランジション効果を変更できます。デフォルトは `false`（無効）です。

## `VDrag`

<LinkCard link="features/draggable" />

## `SlidevVideo`

動画を埋め込みます。

### 使用例

```md
<SlidevVideo v-click autoplay controls>
  <!-- Anything that can go in an HTML video element. -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    あなたのブラウザでは動画がサポートされていません。
    <a href="/myMovie.mp4">こちら</a>からダウンロードできます。
  </p>
</SlidevVideo>
```

[HTML video element のドキュメント](https://developer.mozilla.org/docs/Web/HTML/Element/Video) を参照して、このコンポーネントのスロットに何が含まれているか確認できます。

Props:

- `controls` (`boolean`, デフォルト: `false`): 動画コントロールを表示するかどうか
- `autoplay` (`boolean | 'once'`, デフォルト: `false`):
  - `true` もしくは `'once'`: 動画を一度だけ再生し、終了または一時停止後に再開しない
  - `false`: 動画を自動的に再生しない（代わりに `controls` に依存）
- `autoreset` (`'slide' | 'click'`, デフォルト: `undefined`):
  - `'slide'`: スライドに戻るときに動画の再生位置を先頭に戻す
  - `'click'`: コンポーネントのクリックターンに戻るときに動画の再生位置を先頭に戻す
- `poster` (`string | undefined`, デフォルト: `undefined`):
  - 動画が再生されていないときに表示する画像のソース
- `printPoster` (`string | undefined`, デフォルト: `undefined`):
  - 印刷時に `poster` を上書きするもの
- `timestamp` (`string | number`, デフォルト: `0`):
  - 動画の開始時間（秒単位）
- `printTimestamp` (`string | number | 'last' | undefined`, デフォルト: `undefined`):
  - 印刷時に `timestamp` を上書きするもの

::: warning
エクスポート時に、Chromium は一部の動画形式をサポートしていないため、動画の読み込みに失敗する場合があります。この場合、ブラウザの実行可能パスを指定できます。詳細は [Chromium executable path](/guide/exporting.html#executable-path) を参照してください。
:::

## `Youtube`

YouTube の動画を埋め込みます。

### 使用例

```md
<Youtube id="luoMHjh-XcQ" />
```

Props:

- `id` (`string`, required): YouTube 動画の ID
- `width` (`number`): 動画の幅
- `height` (`number`): 動画の高さ

動画を特定の時間から開始させることもできます。`id` の値に `?start=1234` を追加してください（`1234` は秒単位の時間です）。
