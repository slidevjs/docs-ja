---
depends:
  - guide/syntax#code-block
  - guide/animations
relates:
  - Shiki Magic Move: https://github.com/shikijs/shiki-magic-move
since: v0.48.0
tags: [コードブロック, アニメーション]
description: |
  コードの変更間で細かいトランジションを可能にし、Keynote の Magic Move に似た効果を実現します。
---

# Shiki Magic Move

[Shiki Magic Move](https://github.com/shikijs/shiki-magic-move) を使うと、コードの変更間で Keynote の Magic Move に似た細かいトランジションを実現できます。[プレイグラウンド](https://shiki-magic-move.netlify.app/) で動作を確認できます。

<video src="https://github.com/slidevjs/slidev/assets/11247099/79927794-27ba-4342-9911-9996cec889d6" controls rounded shadow w-full></video>

Slidev では、Magic Move を [クリックシステム](/guide/animations#click-animation) にバインドしています。構文は、各ステップを表す複数のコードブロックを <code>````md magic-move</code>（バックティックは**4つ**）でラップすることで、1 つのコードブロックに変換され、クリックするたびに各ステップに変形します。

`````md
````md magic-move
```js
console.log(`Step ${1}`)
```
```js
console.log(`Step ${1 + 1}`)
```
```ts
console.log(`Step ${3}` as string)
```
````
`````

<LinkInline link="features/line-highlighting" /> と <LinkInline link="features/code-block-line-numbers" /> と組み合わせることも可能です。例えば:

`````md
````md magic-move {at:4, lines: true} // [!code hl]
```js {*|1|2-5} // [!code hl]
let count = 1
function add() {
  count++
}
```

コードブロックの間に非コードブロックがある場合は無視され、コメントなどを入れることができます

```js {*}{lines: false} // [!code hl]
let count = 1
const add = () => count += 1
```
````
`````

## タイトルバー {#title-bar}

> v0.52.0 以降で利用可能

マジックムーブブロックにタイトルバーを追加するには、各ステップの開始フェンスでファイル名を指定します:

`````md
````md magic-move
```js [app.js]
console.log('Step 1')
```
```js [app.js]
console.log('Step 2')
```
````
`````

タイトルバーには、ファイル名に基づいて自動的に一致するアイコンも表示されます（詳細は <LinkInline link="features/code-groups#title-icon-matching" /> を参照）。

## アニメーションの継続時間 {#duration}

> v0.52.0 以降で利用可能

マジックムーブのトランジションのアニメーション継続時間は、ヘッドマターでグローバルにカスタマイズできます:

```yaml
---
magicMoveDuration: 500 # ミリ秒、デフォルトは 800
---
```

または各ブロックごとに `duration` オプションを渡して設定できます:

`````md
````md magic-move {duration:500}
```js
console.log('Step 1')
```
```js
console.log('Step 2')
```
````
`````

## コピーボタン {#copy-button}

> v0.52.0 以降で利用可能

マジックムーブのコードブロックは、ホバー時に表示されるコピーボタンをサポートしています。この動作は、ヘッドマターの `magicMoveCopy` オプションでグローバルに設定できます:

```yaml
---
# オプション: true | false | 'always' | 'final'
magicMoveCopy: true     # すべてのステップでコピーボタンを表示 (デフォルト)
magicMoveCopy: false    # コピーボタンを無効化
magicMoveCopy: 'final'  # 最終ステップのみコピーボタンを表示
---
```

コピーボタンはグローバルな `codeCopy` 設定を尊重します。`codeCopy` が `false` の場合、マジックムーブのコピーボタンも無効になります。
