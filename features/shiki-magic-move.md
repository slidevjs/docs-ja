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
