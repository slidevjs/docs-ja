# トランスフォーマーの設定

<Environment type="node" />

このセットアップ関数を使用すると、**各スライド**の Markdown コンテンツ用のカスタムトランスフォーマーを定義できます。カスタム Markdown 構文を追加し、カスタムコードブロックをレンダリングする場合に便利です。開始するには、以下の内容で `./setup/transformers.ts` ファイルを作成します:

````ts twoslash [setup/transformers.ts]
import type { MarkdownTransformContext } from "@slidev/types";
import { defineTransformersSetup } from "@slidev/types";

function myCodeblock(ctx: MarkdownTransformContext) {
  console.log("index in presentation", ctx.slide.index);
  ctx.s.replace(
    /^```myblock *(\{[^\n]*\})?\n([\s\S]+?)\n```/gm,
    (full: string, options: string = "", code: string = "") => {
      return `...`;
    }
  );
}

export default defineTransformersSetup(() => {
  return {
    pre: [],
    preCodeblock: [myCodeblock],
    postCodeblock: [],
    post: [],
  };
});
````

戻り値はトランスフォーマーのカスタムオプションである必要があります。`pre`、`preCodeblock`、`postCodeblock`、および `post` は、Markdown コンテンツを変換するために順番に呼び出される関数の配列です。トランスフォーマーの順序は:

1. プロジェクトの `pre`
2. アドオンとテーマの `pre`
3. スニペット構文と Shiki Magic Move のインポート
4. プロジェクトの `preCodeblock`
5. アドオンとテーマの `preCodeblock`
6. Mermaid、Monaco、PlantUML などの組み込み特別コードブロック
7. アドオンとテーマの `postCodeblock`
8. プロジェクトの `postCodeblock`
9. コードブロックラッピングなどの他の組み込みトランスフォーマー
10. アドオンとテーマの `post`
11. プロジェクトの `post`
