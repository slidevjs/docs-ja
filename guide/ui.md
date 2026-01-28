---
outline: deep
---

# ユーザーインターフェース

## ナビゲーションバー {#navigation-bar}

再生モードで、ページの左下隅にマウスを移動すると、ナビゲーションバーが表示されます。
![](/screenshots/navbar.png)

> <LinkInline link="features/global-layers" /> を使用してナビゲーションバーを拡張できます。

## ナビゲーション操作 {#navigation-actions}

| キーボードショートカット            | ナビゲーションバーのボタン                                                            | 説明                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| <kbd>f</kbd>                        | <carbon-maximize class="inline-icon-btn"/> <carbon-minimize class="inline-icon-btn"/> | 全画面表示の切り替え                                                     |
| <kbd>right</kbd> / <kbd>space</kbd> | <carbon-arrow-right class="inline-icon-btn"/>                                         | 次のアニメーションまたはスライド                                         |
| <kbd>left</kbd>                     | <carbon-arrow-left class="inline-icon-btn"/>                                          | 前のアニメーションまたはスライド                                         |
| <kbd>up</kbd>                       | -                                                                                     | 前のスライド                                                             |
| <kbd>down</kbd>                     | -                                                                                     | 次のスライド                                                             |
| <kbd>o</kbd>                        | <carbon-apps class="inline-icon-btn"/>                                                | [クイックオーバービュー](#quick-overview) の切り替え                     |
| <kbd>d</kbd>                        | <carbon-sun class="inline-icon-btn"/> <carbon-moon class="inline-icon-btn"/>          | ダークモードの切り替え                                                   |
| -                                   | <carbon-user-avatar class="inline-icon-btn"/>                                         | [カメラビュー](../features/recording#camera-view) の切り替え             |
| -                                   | <carbon-video class="inline-icon-btn"/>                                               | <LinkInline link="features/recording" /> を開始                          |
| -                                   | <carbon-user-speaker class="inline-icon-btn"/>                                        | [プレゼンターモード](#presenter-mode) に入る                             |
| -                                   | <carbon-text-annotation-toggle class="inline-icon-btn"/>                              | <LinkInline link="features/side-editor" /> の切り替え                    |
| -                                   | <carbon-document-pdf class="inline-icon-btn"/>                                        | [ブラウザエクスポーター](#exporter) に入る                               |
| -                                   | <carbon-download class="inline-icon-btn"/>                                            | PDF をダウンロード。<LinkInline link="features/build-with-pdf" /> を参照 |
| -                                   | <carbon-information class="inline-icon-btn"/>                                         | スライドについての情報を表示                                             |
| -                                   | <carbon-settings-adjust class="inline-icon-btn"/>                                     | その他のオプション                                                       |
| <kbd>g</kbd>                        | -                                                                                     | goto... を表示                                                           |

> [ショートカットを設定](../custom/config-shortcuts) できます。

## クイックオーバービュー {#quick-overview}

<kbd>o</kbd> を押すか、ナビゲーションバーの <carbon-apps class="inline-icon-btn"/> ボタンをクリックすると、スライドのオーバービューが表示され、簡単にスライド間をジャンプできます。

![](/screenshots/slides-overview.png)

## プレゼンターモード {#presenter-mode}

プレゼンターモードに入るには、ナビゲーションパネルの <carbon-user-speaker class="inline-icon-btn"/> ボタンをクリックするか、`http://localhost:<port>/presenter` にアクセスします。

プレゼンテーション中は、2 つのブラウザウィンドウを開くことをお勧めします。1 つはプレイモード (観客用)、もう 1 つはプレゼンターモード (自分用)。その後、最初の画面を観客と共有し、2 番目の画面を自分用に保持できます。

プレゼンターモードでスライドをナビゲートするたびに、他のすべての開かれたページは自動的にこのナビゲーションに従い、プレゼンターと同期を保ちます。

![](/screenshots/presenter-mode.png)

### 発表者レイアウト {#presenter-layouts}

> v0.50.0 以降で利用可能

発表者ビューでは、ナビゲーションバーのレイアウト切り替えボタン <carbon-template class="inline-icon-btn"/> をクリックして切り替えられる、3 つの異なるレイアウトが用意されています:

- **レイアウト 1** (デフォルト): 現在のスライドが上部に大きく表示され、下部にノートと次のスライドのプレビューが表示されます
- **レイアウト 2**: 左側にノートパネル、右側に現在のスライドと次のスライドが縦に積み重なって表示されます
- **レイアウト 3**: 左側にノートと現在のスライド、右側に次のスライドのプレビューが大きく表示されます
各レイアウトは異なる画面サイズやプレゼンテーションの好みに最適化されています。

### スクリーンミラー {#screen-mirror}

> v0.50.0 以降で利用可能

発表者ビューでは、メインのスライド領域を「スクリーンミラー」モードに切り替えることができます。これにより、別のモニターやウィンドウをキャプチャして発表者ビューに直接表示できます。

「スクリーンミラー」オプションを発表者ビューのセグメントコントロールでクリックし、ミラーリングしたい画面やウィンドウを選択します。これは、プロジェクターや外部ディスプレイで観客が正確に何を見ているかを確認したい場合に便利です（例：ライブコーディングやライブデモ）。

## スライドオーバービュー {#slides-overview}

> v0.48.0 以降で利用可能

<video src="https://github.com/slidevjs/slidev/assets/11247099/01bbf5b3-f916-4646-9ea4-cf269c0567cb"
controls rounded shadow></video>

[クイックオーバービューパネル](#quick-overview) を開いてから右上の <carbon-list-boxes class="inline-icon-btn"/> をクリックするか、`http://localhost:<port>/overview` に直接アクセスしてすべてのスライドのオーバービューを確認できます。

オーバービューページは、すべてのスライドの線形リストを提供し、横にすべてのノートがあります。ノートをダブルクリックしてノートを直接編集し、クリックスライダーをドラッグしてスライド内のステップをプレビューできます。

## ノートエディター {#notes-editor}

> v0.52.0 以降で利用可能

Slidev は `http://localhost:<port>/notes-edit` でバッチノートエディタを提供しており、すべてのスライドのノートを単一のテキストエリアで編集できます。

各スライドのノートは `--- #[slide-number]` マーカーで区切られています。変更はデバウンス付きで自動的に保存されます。

これは、スライドを切り替えることなく、すべてのスピーカーノートを一箇所で書いたり確認したりしたい場合に便利です。

## 描画 UI {#drawing}

参照:

<LinkCard link="features/drawing" />

## 録画 UI {#recording}

参照:

<LinkCard link="features/recording"/>

## ブラウザエクスポーター {#exporter}

参照:

<LinkCard link="guide/exporting#browser"/>

## 設定 {#settings}

ナビゲーションバーの <carbon-settings-adjust class="inline-icon-btn"/> ボタンをクリックして、追加の設定にアクセスします。

### CSS フィルター {#css-filters}

> v0.50.0 以降で利用可能

異なるプロジェクターやディスプレイでプレゼンテーションを行う際、色が予想と異なる場合があります。Slidev はリアルタイムで表示を調整できる CSS フィルターコントロールを提供しています:

- **反転**: すべての色を反転
- **明るさ**: 全体の明るさを調整 (0.5 - 1.5)
- **コントラスト**: コントラストレベルを調整 (0.5 - 1.5)
- **彩度**: 色の彩度を調整 (0.5 - 1.5)
- **セピア**: セピア調の効果を追加
- **色相回転**: 色相を度単位でシフト (-180 から 180)

これらの設定はローカルに保存され、セッション間で持続します。フィルターが有効な場合、設定ボタンにドットのインジケーターが表示されます。

### 非アクティブ時のカーソル非表示 {#hide-idle-cursor}

> v0.50.0 以降で利用可能

有効にすると、プレゼンテーション中に一定期間操作がないとカーソルが自動的に非表示になります。これにより、観客にとってすっきりとした表示が提供されます。

### スライドスケール {#slide-scale}

ビューポートに合わせてスライドを拡大縮小する「フィット」モードと、スライドをネイティブ解像度で表示する「1:1」モードから選択できます。

### ウェイクロック {#wake-lock}

有効にすると、プレゼンテーション中に画面が暗くなったりロックされたりするのを防ぎます。Wake Lock API のブラウザサポートが必要です。

## グローバルレイヤー {#global-layers}

プレゼンテーション全体またはスライドごとに、スライドの下または上にカスタム UI を追加できます。

<LinkCard link="features/global-layers" />
