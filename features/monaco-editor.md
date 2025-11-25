---
depends:
  - guide/syntax#code-block
relates:
  - Monaco Editor: https://microsoft.github.io/monaco-editor/
  - Configure Monaco Editor: /custom/config-monaco
tags: [コードブロック, エディター]
description: |
  コードブロックを完全な機能を備えたエディターに変えたり、2つのコードブロック間の差分を生成したりできます。
---

# Monaco エディター

<video src="https://github.com/slidevjs/slidev/assets/11247099/0c6ce681-80d3-4555-93bf-9288ee533462" controls rounded shadow w-full></video>

プレゼンテーションでなにか変更を加えたいときは、言語 ID の後に `{monaco}` を追加するだけで、そのブロックが完全な機能を備えた Monaco エディターに変わります！

````md
```ts {monaco}
console.log('HelloWorld')
```
````

詳しくは [Configuring Monaco](/custom/config-monaco) をご覧ください。

## 差分エディター

Monaco は 2 つのコードブロック間の差分を生成することもできます。`{monaco-diff}` を使用してブロックを [Monaco 差分エディター](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) に変え、`~~~` を使って変更前のコードと変更後のコードを区切ります。

````md
```ts {monaco-diff}
console.log('Original text')
~~~
console.log('Modified text')
```
````

## エディターの高さ

デフォルトでは、Monaco エディターは初期コンテンツに基づいて固定の高さを持っています。空のコードブロックや小さなコードブロックから始めて、コードを入力するにつれてエディターが自動的に高さを調整するようにしたい場合は、`{height:'auto'}` を使用します。

````md
```ts {monaco} {height:'auto'}
// エディターの高さはコンテンツに基づいて自動的に調整されます
console.log('Hello, World!')
```
````

CSS 単位 (例えば `{height:'300px'}` や `{height:'100%'}`) を使用して特定の高さを設定することもできます。
