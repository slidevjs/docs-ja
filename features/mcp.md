---
relates:
  - guide/work-with-ai
  - Model Context Protocol: https://modelcontextprotocol.io/
  - features/vscode-extension
since: v52.17.0
tags: [エディタ, ツール]
description: |
  AI エージェントがスライドの内容を確認・編集・並べ替えたり、スライドを移動したりできるようにする組み込みの MCP サーバーです。
---

# MCP サーバー

Slidev は組み込みの [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) を提供しています。そのため、MCP に対応した AI エージェント (Claude Code, Codex, Cursor, VS Code Copilot など) は生のテキストを直接編集する代わりに、スライドを読む・更新・追加・削除・並べ替えといったことを構造化されたツールで扱うことができます。また、実際のプレゼンテーションを操作することもできます。

## 開発サーバー経由で使う

開発サーバーの実行中は、MCP サーバーに次のアドレスから HTTP (Streamable HTTP トランスポート) 経由でアクセスできます:

```
http://localhost:<port>/__mcp
```

例えば、次のようにして AI エージェントに MCP サーバーを登録します:

::: code-group

```bash [Claude Code]
claude mcp add --transport http slidev http://localhost:3030/__mcp
```

```json [VS Code / Cursor]
{
  "mcpServers": {
    "slidev": {
      "type": "http",
      "url": "http://localhost:3030/__mcp"
    }
  }
}
```

:::

エージェントは `slidev-goto-slide` ツールを使って、開発サーバーに接続されているすべてのブラウザを指定したスライドへ移動させることもできます。これは、スライドを編集したあとに、内容を視覚的に確認する際に便利です。MCP ツールを使って行った編集は、Markdown ファイルにすぐに書き戻され、ホットリロードされます。

エンドポイントを無効化するには、ヘッドマターに次のように指定します:

```yaml
---
mcp: false
---
```

## Stdio 経由で使う

開発サーバーを使わずとも、Markdown ファイルを直接操作する スタンドアロン MCP サーバーを stdio 経由で起動できます:

```bash
slidev mcp [entry]
```

設定例:

```json
{
  "mcpServers": {
    "slidev": {
      "command": "npx",
      "args": ["slidev", "mcp", "slides.md"]
    }
  }
}
```

## 使用可能なツール

| ツール名              | 説明                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `slidev-get-info`     | スライドデッキの概要: エントリ、タイトル、スライドの枚数、スライドで使っている Markdown ファイルの一覧、開発サーバーの URL と現在開いている位置 |
| `slidev-list-slides`  | すべてのスライドのページ番号、タイトル、レイアウト、ソースファイルをリスト化                                                                    |
| `slidev-get-slide`    | 単一のスライドのフロントマター、文章、ノート                                                                                                    |
| `slidev-update-slide` | 単一のスライドのフロントマター、文章、ノートのすべて / いずれかを更新                                                                           |
| `slidev-insert-slide` | 既存のスライドの後に新しいページを追加                                                                                                          |
| `slidev-remove-slide` | スライドを削除                                                                                                                                  |
| `slidev-move-slide`   | スライドを別のスライドの前後に移動                                                                                                              |
| `slidev-goto-slide`   | 開いているスライドを移動する (開発サーバー起動中のみ)                                                                                           |

スライド番号は実際にプレゼンテーションで表示される番号と同じく 1 から始まっています。
