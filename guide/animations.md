---
outline: deep
---

# アニメーション

アニメーションは、スライドプレゼンテーションの重要な要素です。Slidev は、シンプルなものから複雑なものまで、さまざまな方法でスライドにアニメーションを追加する機能を提供しています。このガイドでは、それらを効果的に使用する方法を紹介します。

## クリックアニメーション {#click-animation}

**クリック**は、スライド内のアニメーションステップの単位と考えることができます。スライドには 1 つ以上のクリックがあり、各クリックは 1 つ以上のアニメーションをトリガーできます。たとえば、要素の表示や非表示などです。

> [!NOTE]
> v0.48.0以降、より一貫した動作にするため、クリックアニメーションシステムを大幅に書き換えました。これにより、エッジケースで既存のスライドの動作が変更される可能性があります。このページでは新しいクリックシステムを紹介していますが、リファクタリングの詳細については [#1279](https://github.com/slidevjs/slidev/pull/1279) を参照してください。

### `v-click` {#v-click}

表示 / 非表示の「クリックアニメーション」を要素に適用するには、`<v-click>` コンポーネントまたは `v-click` ディレクティブを使用します。

<!-- eslint-skip -->

```md
<!-- コンポーネントの使い方:
     1 回クリックするまでこの要素は隠されます -->
<v-click> Hello World! </v-click>

<!-- ディレクティブの使い方:
     2 回クリックするまでこの要素は隠されます -->
<div v-click class="text-xl"> Hey! </div>
```

### `v-after` {#v-after}

`v-after` は、前の `v-click` がトリガーされたときに要素を表示します。

```md
<div v-click> Hello </div>
<div v-after> World </div>  <!-- もしくは <v-after> World </v-after> -->
```

"次へ" を押すと、`Hello` と `World` が一緒に表示されます。

### クリックした後に隠す {#hide-after-clicking}

`v-click` または `v-after` ディレクティブに `.hide` モディファイアを追加すると、クリック後に要素を表示するのではなく、非表示にします。

```md
<div v-click> 1 回クリックすると表示されます </div>
<div v-click.hide> 2 回クリックすると隠されます </div>
<div v-after.hide> 2 回クリックすると隠されます </div>
```

コンポーネントの場合、同じ効果を得るために `hide` プロパティを使用できます:

```md
<v-click> 1 回クリックすると表示されます </v-click>
<v-click hide> 2 回クリックすると隠されます </v-click>
<v-after hide> これも 2 回クリックすると隠されます </v-after>
```

### `v-clicks` {#v-clicks}

`v-clicks` はコンポーネントとしてのみ提供されます。これは、その子要素すべてに `v-click` ディレクティブを適用するためのショートハンドです。特にリストやテーブルで作業する際に便利です。

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

クリックするたびに、項目が表示されるようになります。
ネストされたリストには `depth` プロパティを使用します:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

また、`every` プロパティを使用して、クリックごとに表示する項目の数を指定できます:

```md
<v-clicks every="2">

- Item 1.1
- Item 1.2
- Item 2.1
- Item 2.2

</v-clicks>
```

### アニメーションの順番 {#positioning}

デフォルトでは、クリックアニメーションは 1 つずつトリガーされます。 要素のアニメーションの "順番" は、`at` プロパティまたは値付きの `v-click` ディレクティブを使用してカスタマイズできます。

CSS レイアウトシステムと同様に、クリックアニメーション化された要素は "相対的な順番" または "絶対的な順番" にできます。

#### 相対的な順番 {#relative-position}

相対的な順番は、前の相対的な要素の順番に基づいて計算されます:

````md
<div v-click> 1 回クリックすると表示されます </div>
<v-click at="+2"><div> 3 回クリックすると表示されます </div></v-click>
<div v-click.hide="'-1'"> 2 回クリックすると隠されます </div>

```js {none|1|2}{at:'+5'}
1  // 7 回クリックするとハイライトされます
2  // 8 回クリックするとハイライトされます
```
````

> [!NOTE]
> `v-click` の初期値は指定しない場合 `'+1'` です。

事実上、`v-after` は `at` プロパティを持つ `v-click` のショートカットに過ぎません:

```md
<!-- 次の 2 つは同じです -->
<img v-after />
<img v-click="'+0'" />

<!-- 次の 3 つは同じです -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

::: tip `at` プロパティのフォーマット
`'+1'` のような、`+` または `-` で始まる文字列値のみが相対位置として扱われます:

| 値             | 種類     |
| -------------- | -------- |
| `'-1'`, `'+1'` | 相対     |
| `+1` === `1`   | 絶対     |
| `'1'`          | 絶対     |

なので、相対値にはシングルクォートを忘れないでください。
:::

#### 絶対的な順番 {#absolute-position}

指定された値は、このアニメーションをトリガーする正確なクリック数です:

````md
<div v-click="3"> 3 回クリックすると表示されます </div>
<v-click at="2"><div> 2 回クリックすると表示されます </div></v-click>
<div v-click.hide="1"> 1 回クリックすると隠されます </div>

```js {none|1|2}{at:3}
1  // 3 回クリックするとハイライトされます
2  // 4 回クリックするとハイライトされます
```
````

#### 混合ケース {#mixed-case}

相対的な順番と絶対的な順番を混在させることもできます:

```md
<div v-click> 1 回クリックすると表示されます </div>
<div v-click="3"> 3 回クリックすると表示されます </div>
<div v-click> 2 回クリックすると表示されます </div>
<div v-click="'-1'"> 1 回クリックすると表示されます </div>
<div v-click="4"> 4 回クリックすると表示されます </div>
```

以下の例は、2 つのコードブロックを同期してハイライトさせる方法を示しています:

````md {1,6}
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
= 2
= 'ab'
```
````

### 表示 / 非表示のタイミング {#enter-leave}

`v-click` ディレクティブに配列を渡すことで、要素の表示と非表示のクリックインデックスを指定することもできます。終了インデックスは排他的です。

```md
<div v-click.hide="[2, 4]">
  この要素は 2 回目と 3 回目のクリックで非表示になります（それ以外では表示されます）。
</div>
<div v-click />
<div v-click="['+1', '+1']">
  これは 2 回目のクリックでのみ表示されます（それ以外では非表示です）。
</div>
```

`v-switch` コンポーネントを使用しても同じことができます:

```md
<v-switch>
  <template #1> 1 回目のクリックで表示され、2 回目のクリックで非表示になります。 </template>
  <template #2> 2 回目のクリックで表示され、5 回目のクリックで非表示になります。 </template>
  <template #5-7> 5 回目のクリックで表示され、7 回目のクリックで非表示になります。 </template>
</v-switch>
```

詳しくは、[`VSwitch` コンポーネント](/builtin/components#vswitch) を参照してください。

### 総クリック数のカスタマイズ {#total}

デフォルトでは、Slidev は次のスライドに進む前に必要なクリック数を自動的に計算します。これを上書きするには、フロントマターの `clicks` オプションを使用します:

```yaml
---
# このスライドで次のスライドに進む前に必要なクリック数を 10 に設定
clicks: 10
---
```

### 要素のトランジション {#element-transitions}

`v-click` ディレクティブを要素に適用すると、クラス名 `slidev-vclick-target` が要素に付与されます。要素が非表示の場合、クラス名 `slidev-vclick-hidden` も付与されます。例えば:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">テキスト</div>
```

クリック後は、次のようになる場合があります:

```html
<div class="slidev-vclick-target">テキスト</div>
```

デフォルトでは、これらのクラスに微妙な不透明度のトランジションが適用されます:

```css
/* デフォルトのスタイル */

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

カスタムスタイルシートでそれらを上書きして、トランジション効果をカスタマイズできます。例えば、スケーリングアップのトランジションを実現するには:

```css
/* styles.css */

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

特定のスライドやレイアウトに対してのみアニメーションを指定するには:

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

詳しくは [スタイルのカスタマイズ](/custom/directory-structure#style) をご覧ください。

## モーション {#motion}

Slidev は [@vueuse/motion](https://motion.vueuse.org/) を組み込んでいます。`v-motion` ディレクティブを任意の要素に使用して、モーションを適用できます。例えば

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  Slidev
</div>
```

`Slidev` はスライドに入るときに `-80px` から元の位置に移動します。スライドを離れるときは `80px` に移動します。

> v0.48.9 以前では、モーションを有効にするためにスライドのフロントマターに `preload: false` を追加する必要があります。

### クリックによるモーション {#motion-with-clicks}

> v0.48.9 から利用可能

モーションも、クリックでトリガーすることができます:

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0, y: 0 }"
  :click-1="{ x: 0, y: 30 }"
  :click-2="{ y: 60 }"
  :click-2-4="{ x: 40 }"
  :leave="{ y: 0, x: 80 }"
>
  Slidev
</div>
```

もしくは `v-click` と `v-motion` を組み合わせて使用します:

```html
<div v-click="[2, 4]" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
  :leave="{ x: 50 }"
>
  2 回目のクリックで表示され、4 回目のクリックで非表示になります。
</div>
```

変数の意味は以下の通りです:

- `initial`: `今のページ < このページ` か、`$clicks` が小さくて `v-click` が要素を隠している場合
- `enter`: `currentPage === thisPage` かつ `v-click` が要素を表示している場合。_優先度: 最低_
- `click-x`: `x` は絶対クリック数を表す数値です。`$clicks >= x` の場合にこのバリアントが適用されます。_優先度: `x`_
- `click-x-y`: `x <= $clicks < y` の場合にこのバリアントが適用されます。_優先度: `x`_
- `leave`: `currentPage > thisPage` か、`$clicks` が大きすぎて `v-click` が現在の要素を隠している場合。

変数は、上記で定義された優先度に従って組み合わされます。

::: warning 注意
Vue の内部バグにより、現在 **同じ要素に適用された** `v-click` のみが `v-motion` のモーションアニメーションを制御できます。回避策として、`v-if="3 < $clicks"` のような方法を使用して同じ効果を得ることができます。
:::

詳しくは [Demo](https://sli.dev/demo/starter/10) 、 [@vueuse/motion](https://motion.vueuse.org/) 、 [v-motion](https://motion.vueuse.org/features/directive-usage) 、 [Presets](https://motion.vueuse.org/features/presets) をご覧ください。

## スライドトランジション {#slide-transitions}

<div id="pages-transitions" />

Slidev はスライドトランジションを標準でサポートしています。`transition` フロントマターオプションを設定することで有効にできます:

```md
---
transition: slide-left
---
```

これで、スライド切り替え時に素敵なスライド効果が得られます。ヘッドマターで設定すると、すべてのスライドに適用されます。フロントマターでスライドごとに異なるトランジションを設定することもできます。

### ビルトイントランジション {#builtin-transitions}

- `fade` - クロスフェードイン / アウト
- `fade-out` - フェードアウトしてからフェードイン
- `slide-left` - 左へスライド (戻るときは右へスライド)
- `slide-right` - 右へスライド (戻るときは左へスライド)
- `slide-up` - 上へスライド (戻るときは下へスライド)
- `slide-down` - 下へスライド (戻るときは上へスライド)
- `view-transition` - View Transitions API を使用

### View Transition API {#view-transitions}

View Transitions API は、異なる DOM 状態間でアニメーション付きのトランジションを簡単に作成するためのメカニズムを提供します。詳細については、[View Transitions API - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/API/View_Transition_API) をご覧ください。

:::warning 注意
試験的: すべてのブラウザでサポートされているわけではありません。使用する前に、[Browser compatibility table](https://developer.mozilla.org/ja/docs/Web/API/View_Transition_API#ブラウザーの互換性) を注意深く確認してください。
:::

`view-transition-name` プロパティを使用してビューのトランジションに名前を付けることで、異なるページ要素間に接続を作成し、スライドを切り替える際にスムーズなトランジションを実現できます。

name view-transition を便利に使うために [MDC (Markdown Component) 構文](/guide/syntax#mdc-syntax) を有効にできます:

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### カスタムトランジション {#custom-transitions}

Slidev のスライドトランジションは [Vue Transition](https://vuejs.org/guide/built-ins/transition.html) によって実現されています。カスタムトランジションを使用するには、次のようにします:

```md
---
transition: my-transition
---
```

そしてカスタムスタイルシートで:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

どう動作しているかについては、[Vue Transition](https://vuejs.org/guide/built-ins/transition.html) をご覧ください。

### 前向きと後ろ向きのトランジション {#forward-backward-transitions}

前向きナビゲーションと後ろ向きナビゲーションに異なるトランジションを指定するには、トランジション名の区切り文字として `|` を使用します:

```md
---
transition: go-forward | go-backward
---
```

これにより、スライド 1 からスライド 2 に移動するときに `go-forward` トランジションが適用され、スライド 2 からスライド 1 に戻るときに `go-backward` トランジションが適用されます。

### 高度な使用法 {#advanced-usage}

`transition` フィールドは、[`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) コンポーネントに渡されるオプションを受け入れます。例えば:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
