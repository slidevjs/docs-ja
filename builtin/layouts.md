# レイアウト

このページでは、Slidev が提供する組み込みレイアウトをすべて紹介します。これらのレイアウトはスライドのフロントマターの `layout` オプションで使用できます。

<LinkInline link="guide/theme-addon" /> は追加のレイアウトを提供したり、既存のレイアウトを上書きしたりできます。独自のレイアウトを追加するには、<LinkInline link="guide/write-layout" /> を参照してください。

## `center`

画面の中央にコンテンツを表示します。

## `cover`

プレゼンテーションの表紙ページを表示するために使用され、プレゼンテーションのタイトルやコンテキストなどを含むことができます。

## `default`

最も基本的なレイアウトで、あらゆる種類のコンテンツを表示できます。

## `end`

プレゼンテーションの最終ページです。

## `fact`

画面上で多くの注目を集める事実やデータを表示します。

## `full`

画面全体のスペースを使用してコンテンツを表示します。

## `image-left`

画面の左側に画像を表示し、コンテンツは右側に配置されます。

### 使用例

```yaml
---
layout: image-left

# 画像のソース
image: /path/to/the/image

# コンテンツにカスタムクラス名を指定
class: my-cool-content-on-the-right
---
```

## `image-right`

画面の右側に画像を表示し、コンテンツは左側に配置されます。

### 使用例

```yaml
---
layout: image-right

# 画像のソース
image: /path/to/the/image

# コンテンツにカスタムクラス名を指定
class: my-cool-content-on-the-left
---
```

## `image`

画面全体のメインコンテンツとして画像を表示します。

### 使用例

```yaml
---
layout: image

# 画像のソース
image: /path/to/the/image
---
```

`backgroundSize` を追加して、デフォルトの背景サイズ（`cover`）を変更できます:

```yaml
---
layout: image
image: /path/to/the/image
backgroundSize: contain
---
```

```yaml
---
layout: image-left
image: /path/to/the/image
backgroundSize: 20em 70%
---
```

## `iframe-left`

画面の左側にウェブページを表示し、コンテンツは右側に配置されます。

### 使用例

```yaml
---
layout: iframe-left

# 表示するウェブページのソース
url: https://github.com/slidevjs/slidev

# コンテンツにカスタムクラス名を指定
class: my-cool-content-on-the-right
---
```

## `iframe-right`

画面の右側にウェブページを表示し、コンテンツは左側に配置されます。

### 使用例

```yaml
---
layout: iframe-right

# 表示するウェブページのソース
url: https://github.com/slidevjs/slidev

# コンテンツにカスタムクラス名を指定
class: my-cool-content-on-the-left
---
```

## `iframe`

画面全体のメインコンテンツとしてウェブページを表示します。

### 使用例

```yaml
---
layout: iframe

# 表示するウェブページのソース
url: https://github.com/slidevjs/slidev
---
```

## `intro`

プレゼンテーションの紹介に使用され、通常はプレゼンテーションのタイトル、簡単な説明、著者などが含まれます。

## `none`

既存のスタイリングがないレイアウト。

## `quote`

引用を目立たせて表示します。

## `section`

セクションの開始を示すために使用されます。

## `statement`

主なページコンテンツとして、主張や声明を表明するのに使用されます。

## `two-cols`

ページのコンテンツを 2 つの列に分割します。

### 使用例

```md
---
layout: two-cols
---

# 左側

これは左側に表示されます

::right::

# 右側

これは右側に表示されます
```

## `two-cols-header`

ページのコンテンツの上下の行を分割し、2 行目を左右の列に分割します。

### 使用例

```md
---
layout: two-cols-header
---

これは両列にまたがります

::left::

# 左側

これは左側に表示されます

::right::

# 右側

これは右側に表示されます

<style>
.two-cols-header {
  column-gap: 20px; /* 必要に応じてギャップサイズを調整してください */
}
</style>
```
