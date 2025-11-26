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

## スライドオーバービュー {#slides-overview}

> v0.48.0 以降で利用可能

<video src="https://github.com/slidevjs/slidev/assets/11247099/01bbf5b3-f916-4646-9ea4-cf269c0567cb"
controls rounded shadow></video>

[クイックオーバービューパネル](#quick-overview) を開いてから右上の <carbon-list-boxes class="inline-icon-btn"/> をクリックするか、`http://localhost:<port>/overview` に直接アクセスしてすべてのスライドのオーバービューを確認できます。

オーバービューページは、すべてのスライドの線形リストを提供し、横にすべてのノートがあります。ノートをダブルクリックしてノートを直接編集し、クリックスライダーをドラッグしてスライド内のステップをプレビューできます。

## 描画 UI {#drawing}

参照:

<LinkCard link="features/drawing" />

## 録画 UI {#recording}

参照:

<LinkCard link="features/recording"/>

## ブラウザエクスポーター {#exporter}

参照:

<LinkCard link="guide/exporting#browser"/>

## グローバルレイヤー {#global-layers}

プレゼンテーション全体またはスライドごとに、スライドの下または上にカスタム UI を追加できます。

<LinkCard link="features/global-layers" />
