---
relates:
  - Demo: /demo/starter/11
  - KaTeX: https://katex.org/
tags: [コードブロック, 構文]
description: |
  Slidev は KaTeX によって LaTeX を標準でサポートしています。
---

# LaTeX

Slidev は KaTeX によって LaTeX を標準でサポートしています。

## インライン

LaTeX をインラインでレンダリングするには、LaTeX コマンドの左右を単一の `$` で囲みます。

```md
$\sqrt{3x-1}+(1+x)^2$
```

## ブロック

ブロックレンダリングには、左右を (`$$`) で囲みます。このモードでは、より大きな記号が使用され、結果が中央に配置されます。

```latex
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

## 行のハイライト

特定の行をハイライトするには、単に波括弧 `{}` 内に行番号を追加します。行番号はデフォルトで 1 からカウントされます。

```latex
$$ {1|3|all}
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

[コードブロック](#line-highlighting) の `at` および `finally` オプションも LaTeX ブロックで利用可能です。

## 化学方程式

化学方程式のレンダリングを有効にするには、[mhchem](https://github.com/KaTeX/KaTeX/tree/main/contrib/mhchem)
KaTeX 拡張機能を読み込む必要があります。

`vite.config.ts` を作成して、次の内容を記述します:

```ts
import 'katex/contrib/mhchem'

export default {}
```

これにより、化学方程式が適切にレンダリングされるようになります。

```latex
$$
\displaystyle{\ce{B(OH)3 + H2O <--> B(OH)4^- + H+}}
$$
```

さらに詳しく: [構文](https://mhchem.github.io/MathJax-mhchem)

---

<TheTweet id="1392246507793915904" />
