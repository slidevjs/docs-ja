---
depends:
  - guide/ui#navigation-bar
relates:
  - RecordRTC: https://github.com/muaz-khan/RecordRTC
  - WebRTC API: https://webrtc.org/
tags: [プレゼンター, ツール]
description: |
  内蔵のカメラビューと録画機能を使ってプレゼンテーションを録画します。
---

# 録画

Slidev には内蔵のカメラビューと録画機能があります。これにより、プレゼンテーション中に他の録画ツールに切り替えることなく、簡単にプレゼンテーションを録画できます。

## カメラビュー {#camera-view}

[ナビゲーションバー](../guide/ui#navigation-bar) の <carbon-user-avatar class="inline-icon-btn"/> ボタンをクリックすると、プレゼンテーション内にカメラビューが表示されます。ドラッグして移動したり、右下のハンドラーを使ってサイズを変更したりできます。サイズと位置はリロード後も保持されます。

<TheTweet id="1395006771027120133" />

## 録画を開始する {#start-recording}

[ナビゲーションバー](../guide/ui#navigation-bar) の <carbon-video class="inline-icon-btn"/> ボタンをクリックすると、ダイアログが表示されます。ここで、カメラ出力をスライドに埋め込んで録画するか、2 つのビデオファイルに分けて録画するかを選択できます。

この機能は [RecordRTC](https://github.com/muaz-khan/RecordRTC) によって提供されており、[WebRTC API](https://webrtc.org/) を使用しています。

![](/screenshots/recording.png)
