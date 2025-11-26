---
outline: deep
---

# なぜ Slidev か

すでに [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) や [Apple Keynote](https://www.apple.com/keynote/) のような機能豊富な WYSIWYG スライド作成ツールがたくさんあります（[比較](#comparisons) を参照）。これらは直感的で学習しやすいです。では、なぜ Slidev を作る必要があるのでしょうか？

Slidev は開発者向けの柔軟性とインタラクティビティを提供し、彼らが慣れているテクノロジーを使用してプレゼンテーションをより興味深く、表現力豊かで、魅力的にすることができます。Slidev はまた、強力なコミュニティを持つオープンソースです。

Slidev は Markdown ベースで、**コンテンツに焦点を当てる**ことができます。また、Slidev は Web ベースなので**不可能なことはありません** - Web アプリでできることはすべてスライドに適用できます。

Slidev はまた**段階的**です。非常にシンプルな Markdown ファイルから始めることができ、必要に応じて設定なしで [組み込み機能](../features/) を使用できます。また、スライドを強化するためにオプションで [テーマとアドオン](./theme-addon) をインストールできます。

![demo slide](/screenshots/cover.png) {#welcome}

## 機能

### 📝 Markdown ベース

Slidev は拡張 Markdown 形式を使用して、スライドを単一のプレーンテキストファイルに整理します。これにより、コンテンツに焦点を当てながら、Git と好きなエディタを使用できます。

> 詳細情報: <LinkInline link="guide/syntax"/>.

### 🧑‍💻 開発者向け

Slidev は開発者向けのコードスニペットに対して一流のサポートを提供します。最も正確な構文ハイライティングを得るために [Shiki](https://github.com/shikijs/shiki) を使用しています。Slidev はまた <LinkInline link="features/shiki-magic-move"/> と <LinkInline link="features/twoslash"/> もサポートしています。これらは Slidev をテックトークの最適な選択肢にします。

### 🎨 テーマ対応

Slidev のテーマは npm パッケージを通じて共有できます。1 行のコードでテーマを適用できます。

[テーマギャラリー](../resources/theme-gallery) で、公式チームとコミュニティによって作成された美しいテーマを確認してください。

### ⚡ 高速

エディタで行った変更はすべて、[Vite の HMR 機能](https://vitejs.dev/guide/features.html#hot-module-replacement) のおかげで、リロードなしでブラウザ内のスライドに**即座に**更新されます。

### 🤹 インタラクティブで表現力豊か

Vue コンポーネントを作成してスライドの中で使用でき、プレゼンテーション中にそれらを操作して、より興味深く直感的な方法でアイデアを表現できます。

Slidev はまた <LinkInline link="features/monaco-editor"/> の組み込みサポートを備えており、オートコンプリートおよびホバーメッセージを使用してプレゼンテーション内でライブコーディングを行うことができます。

### 🎥 録画サポート

Slidev は組み込みの録画とカメラビューを提供します。カメラビューを内部に含めてプレゼンテーションを共有するか、画面とカメラを別々に記録して保存できます。

> 詳細情報: <LinkInline link="features/recording"/>.

### 📤 ポータブル

単一のコマンドを使用して、スライドを PDF、PPTX、PNG、またはシングルページアプリケーション（SPA）にエクスポートできます。その後、どこにでも共有またはホストできます。

> 詳細情報: <LinkInline link="guide/exporting"/> および <LinkInline link="guide/hosting"/>.

### 🛠 改造可能

Slidev は Web ベースなので、通常の Web アプリでできることはすべてスライドに適用できます。たとえば、WebGL、API リクエスト、iframe、またはライブ共有などです。それはあなたの想像力次第です！

> 詳細情報: [カスタマイズ](../custom/).

## 比較

::: details Slidev vs. Microsoft PowerPoint / Apple Keynote

[Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) および [Apple Keynote](https://www.apple.com/keynote/) は機能豊富な WYSIWYG スライドメーカーです。これらは直感的で学習しやすく、非開発者にとって最良の選択肢の 1 つになっています。

それらと比較して、Slidev には以下の利点があります:

- 開発者向け: コードスニペットは Slidev の中で最も重要な機能です。
- Markdown ベース: コンテンツに焦点を当て、Git を使用してスライドをバージョン管理します。
- Web ベース: Web アプリでできることはすべてスライドに適用できます。
- 改造可能: Web テクノロジーで好きなものをカスタマイズできます。
- オープンソース: Slidev は強力なコミュニティを持つオープンソースです。

:::

::: details Slidev vs. Reveal.js

[Reveal.js](https://revealjs.com/) は人気のある HTML プレゼンテーションフレームワークです。またオープンソースで、Markdown をサポートしています。

Reveal.js と比較して、Slidev には以下の利点があります:

- より簡潔: Slidev は拡張 Markdown 形式を使用していますが、Reveal.js はスライドを整理するために HTML を書くことを推奨しています。
- Vue サポート: Slidev で Vue コンポーネントを使用して、スライドをインタラクティブにすることができます。
- Vite ベース: Slidev は Vite の上に構築されており、即座の HMR と柔軟なプラグイン API を提供します。
- Atomatic CSS: [UnoCSS](https://unocss.dev/) をすぐに使用してスライドをスタイリングできます。

:::

::: details Slidev vs. Marp

[Marp](https://marp.app/) は簡潔性とポータビリティに焦点を当てた Markdown プレゼンテーションツールです。またオープンソースで、Markdown をサポートしています。

Marp と比較して、Slidev には以下の利点があります:

- 同じシンプルさ: Slidev のスライドは Marp と同じくらいシンプルに始められます。
- より多くの機能: Slidev は Marp がサポートしない多くの機能をサポートしています。
- Vue サポート: Slidev で Vue コンポーネントを使用して、スライドをインタラクティブにすることができます。
- Vite ベース: Slidev は Vite の上に構築されており、即座の HMR と柔軟なプラグイン API を提供します。
- Atomatic CSS: [UnoCSS](https://unocss.dev/) をすぐに使用してスライドをスタイリングできます。
:::

## 試してみてください

Slidev を試してみることで、千の言葉よりも多くのことを学べます。<LinkInline link="guide/"/>ガイドをチェックして、1 クリックまたは 1 つのコマンドで最初の Slidev プロジェクトを作成してください。

または、簡単なプレビューをご覧ください:

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
