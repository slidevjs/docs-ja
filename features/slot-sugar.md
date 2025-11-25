---
relates:
  - Vue's Named Slots: https://v3.vuejs.org/guide/component-slots.html
tags: [レイアウト, 構文]
description: |
  レイアウト内の名前付きスロットの糖衣構文。
---

# レイアウト向け Slot Sugar

一部のレイアウトは、[Vue の名前付きスロット](https://vuejs.org/guide/components/slots.html) を使用して、コンテンツの挿入ポイントを複数提供できます。

例えば、[`two-cols` レイアウト](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue) では、左側（`default` スロット）と右側（`right` スロット）の 2 つのカラムを並べて表示できます。

```md
---
layout: two-cols
---

<template v-slot:default>

# 左側

これは左側に表示されます

</template>
<template v-slot:right>

# 右側

これは右側に表示されます

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>左側</h3>
<p>これは左側に表示されます</p>
</div>
<div>
<h3>右側</h3>
<p>これは右側に表示されます</p>
</div>
</div>

Slidev は、スロット名の糖衣構文 `::name::` も提供しています。以下は先述の例とまったく同じ動作をします。

```md
---
layout: two-cols
---

# 左側

これは左側に表示されます

::right::

# 右側

これは右側に表示されます
```

デフォルトスロットを明示的に指定し、好きな順序で提供することもできます。

```md
---
layout: two-cols
---

::right::

# 右側

これは右側に表示されます

::default::

# 左側

これは左側に表示されます
```
