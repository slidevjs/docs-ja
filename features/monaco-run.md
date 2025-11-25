---
depends:
  - features/monaco-editor
  - guide/animations
relates:
  - Custom Code Runners: /custom/config-code-runners
since: v0.48.0
tags: [コードブロック, エディター]
description: |
  エディターの中で直接コードを実行し、その結果を見ることができます。
---

# Monaco Runner

Slidev は Monaco Runner エディターも提供しており、エディターの中で直接コードを実行し、その結果を見ることができます。`{monaco-run}` を使用してブロックを Monaco Runner エディターに変えます。

````md
```ts {monaco-run}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```
````

エディターには「Run」ボタンがあり、コードの実行結果がコードブロックのすぐ下に表示されます。コードを変更すると、実行結果もリアルタイムで再評価されます。

デフォルトでは、スライドが読み込まれたときにコードが自動的に実行されます。代わりに明示的に実行をトリガーしたい場合は、`{autorun:false}` を設定できます。

````md
```ts {monaco-run} {autorun:false}
console.log('クリックして実行してください')
```
````

特定のクリック数でのみ出力を表示したい場合は、`showOutputAt` プロパティを使用できます。値は `v-click` と同じ形式です。

````md
```ts {monaco-run} {showOutputAt:'+1'}
console.log('Shown after 1 click')
```
````

現在、Slidev は JavaScript と TypeScript のコードをそのまま実行することができます。カスタム言語のサポートについては、[Custom Code Runners](/custom/config-code-runners) を参照してください。
