---
relates:
  - guide/ui
  - CLI: builtin/cli
  - Cloudflare Quick Tunnels: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/
tags: [リモート, ツール]
description: |
  Slidev のリモートアクセス機能を使って、プレゼンテーションにリモートでアクセスできます。
---

# リモートアクセス

`--remote` フラグを使ってプレゼンテーションをリモートアクセスで実行できます:

::: code-group

```bash [pnpm]
pnpm dev --remote
# i.e. slidev --remote
```

```bash [npm]
npm run dev -- --remote
# i.e. slidev --remote
```

```bash [yarn]
yarn dev --remote
# i.e. slidev --remote
```

```bash [bun]
bun dev --remote
# i.e. slidev --remote
```

```bash [deno]
deno run dev --remote
# i.e. slidev --remote
```

:::

## パスワード保護

スライドを共有したいが、他の人にプレゼンターモードへのアクセスを許可したくない場合は、オプションに `--remote=your_password` のように指定してパスワードを設定できます。これで、プレゼンターモードにアクセスする際にパスワードが必要になります。

## リモートトンネル

[Cloudflare Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/) を使ってローカルサーバーをインターネットに公開できます。これにより、サーバーを設定することなくスライドを他の人と共有できます。

::: code-group

```bash [pnpm]
pnpm dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [npm]
npm run dev -- --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [yarn]
yarn dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [bun]
bun dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

```bash [deno]
deno run dev --remote --tunnel
# i.e. slidev --remote --tunnel
```

:::
