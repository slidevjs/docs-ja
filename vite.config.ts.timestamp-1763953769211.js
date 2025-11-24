// .vitepress/config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { defineConfig } from "vitepress";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";

// package.json
var version = "52.9.1";

// .vitepress/customizations.ts
var customizations_default = [
  {
    text: "Configurations",
    link: "/custom/"
  },
  {
    text: "Directory Structure",
    link: "/custom/directory-structure"
  },
  {
    text: "Configure Highlighter",
    link: "/custom/config-highlighter"
  },
  {
    text: "Configure Vite and Plugins",
    link: "/custom/config-vite"
  },
  {
    text: "Configure Vue App",
    link: "/custom/config-vue"
  },
  {
    text: "Configure UnoCSS",
    link: "/custom/config-unocss"
  },
  {
    text: "Configure Code Runners",
    link: "/custom/config-code-runners"
  },
  {
    text: "Configure Transformers",
    link: "/custom/config-transformers"
  },
  {
    text: "Configure Monaco",
    link: "/custom/config-monaco"
  },
  {
    text: "Configure KaTeX",
    link: "/custom/config-katex"
  },
  {
    text: "Configure Mermaid",
    link: "/custom/config-mermaid"
  },
  {
    text: "Configure Routes",
    link: "/custom/config-routes"
  },
  {
    text: "Configure Shortcuts",
    link: "/custom/config-shortcuts"
  },
  {
    text: "Configure Context Menu",
    link: "/custom/config-context-menu"
  },
  {
    text: "Configure Fonts",
    link: "/custom/config-fonts"
  },
  {
    text: "Configure Pre-Parser",
    link: "/custom/config-parser"
  }
];

// .vitepress/pages.ts
var Guides = [
  {
    text: "Why Slidev",
    link: "/guide/why"
  },
  {
    text: "Getting Started",
    link: "/guide/"
  },
  {
    text: "Syntax Guide",
    link: "/guide/syntax"
  },
  {
    text: "User Interface",
    link: "/guide/ui"
  },
  {
    text: "Animations",
    link: "/guide/animations"
  },
  {
    text: "Theme & Addons",
    link: "/guide/theme-addon"
  },
  {
    text: "Components",
    link: "/guide/component"
  },
  {
    text: "Layouts",
    link: "/guide/layout"
  },
  {
    text: "Exporting",
    link: "/guide/exporting"
  },
  {
    text: "Hosting",
    link: "/guide/hosting"
  },
  {
    text: "FAQ",
    link: "/guide/faq"
  }
];
var BuiltIn = [
  {
    text: "CLI",
    link: "/builtin/cli"
  },
  {
    text: "Components",
    link: "/builtin/components"
  },
  {
    text: "Layouts",
    link: "/builtin/layouts"
  }
];
var Advanced = [
  {
    text: "Global Context",
    link: "/guide/global-context"
  },
  {
    text: "Writing Layouts",
    link: "/guide/write-layout"
  },
  {
    text: "Writing Themes",
    link: "/guide/write-theme"
  },
  {
    text: "Writing Addons",
    link: "/guide/write-addon"
  }
];
var Resources = [
  {
    text: "Showcases",
    link: "/resources/showcases"
  },
  {
    text: "Theme Gallery",
    link: "/resources/theme-gallery"
  },
  {
    text: "Addon Gallery",
    link: "/resources/addon-gallery"
  },
  {
    text: "Learning Resources",
    link: "/resources/learning"
  },
  {
    text: "Curated Covers",
    link: "/resources/covers"
  },
  {
    text: "Release Notes",
    link: "https://github.com/slidevjs/slidev/releases"
  }
];

// .vitepress/sidebar-gen.ts
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import fg from "fast-glob";
import graymatter from "gray-matter";
var root = fileURLToPath(new URL("../../", "file:///C:/Users/syous/Desktop/project/slidev-docs-ja/.vitepress/sidebar-gen.ts"));
function parseFile(file) {
  const filepath = join(root, file);
  const path = file.replace("docs/", "").replace(".md", "");
  const matter = graymatter.read(filepath);
  const title = matter.data.title || matter.content.match(/^#\s+(.*)/m)?.[1] || path;
  return {
    filepath,
    path,
    matter,
    title
  };
}
async function getSidebarObject() {
  const map = {};
  const parsedFeatures = await fg([
    "docs/features/*.md"
  ], {
    onlyFiles: true,
    cwd: root
  }).then((files) => files.map(parseFile));
  const parsedGuides = await fg([
    "docs/guide/*.md"
  ], {
    onlyFiles: true,
    cwd: root
  }).then((files) => files.map(parseFile));
  parsedFeatures.forEach(({ matter, path }) => {
    const items = [
      {
        text: "Back to",
        items: [
          {
            text: "All Features",
            link: "/features"
          }
        ]
      }
    ];
    function findParsed(related) {
      related = related.replace(/#.*$/, "");
      const feature = parsedFeatures.find((file) => file.path === related);
      if (feature) {
        return {
          type: "features",
          item: feature
        };
      }
      const guide = parsedGuides.find((file) => file.path === related);
      if (guide) {
        return {
          type: "guide",
          item: guide
        };
      }
      return void 0;
    }
    function frontmatterToSidebarItem(path2) {
      if (typeof path2 === "string") {
        const match = findParsed(path2);
        if (match?.type === "features") {
          return [{
            text: `\u2728 ${match.item.title}`,
            link: `/${match.item.path}`
          }];
        }
        if (match?.type === "guide") {
          return [{
            text: `\u{1F4D6}  ${match.item.title}`,
            link: `/${match.item.path}`
          }];
        }
        console.warn(`Dependent file not found: ${path2}`);
        return [{
          text: path2,
          link: `/${path2}`
        }];
      } else {
        return Object.entries(path2).map(([text, link]) => ({
          text,
          link
        }));
      }
    }
    if (matter.data.depends) {
      items.push({
        text: "Depends on",
        items: matter.data.depends.flatMap(frontmatterToSidebarItem)
      });
    }
    if (matter.data.relates) {
      items.push({
        text: "Related to",
        items: matter.data.relates.flatMap(frontmatterToSidebarItem)
      });
    }
    const derives = matter.data.derives ?? parsedFeatures.filter((f) => f.matter.data.depends?.includes(path)).map((f) => f.path);
    if (derives.length) {
      items.push({
        text: "Derives",
        items: derives.flatMap(frontmatterToSidebarItem)
      });
    }
    map[`/${path}`] = items;
  });
  return map;
}

// .vitepress/config.ts
var slidebars = [
  {
    text: "Guide",
    items: Guides
  },
  {
    text: "Advanced",
    items: Advanced
  },
  {
    text: "Customizations",
    items: customizations_default
  },
  {
    text: "Built-in",
    items: BuiltIn
  },
  {
    text: "Resources",
    items: Resources
  }
];
var config_default = defineConfig({
  title: "Slidev",
  description: "Presentation slides for developers",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    ["meta", { name: "author", content: "Anthony Fu" }],
    ["meta", { property: "og:title", content: "Slidev" }],
    ["meta", { property: "og:image", content: "https://sli.dev/og-image.png" }],
    ["meta", { property: "og:description", content: "Presentation slides for developers" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:creator", content: "@slidevjs" }],
    ["meta", { name: "twitter:image", content: "https://sli.dev/og-image.png" }],
    ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
    ["link", { rel: "preconnect", crossorigin: "anonymous", href: "https://fonts.gstatic.com" }],
    ["link", { href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600", rel: "stylesheet" }]
  ],
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark"
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        "html",
        "xml",
        "vue",
        "markdown",
        "mermaid",
        "latex"
      );
    },
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          vfsRoot: fileURLToPath2("file:///C:/Users/syous/Desktop/project/slidev-docs-ja/.vitepress/config.ts"),
          compilerOptions: {
            resolveJsonModule: true,
            moduleResolution: 100
          }
        }
      })
    ],
    config(md) {
      md.use(groupIconMdPlugin);
    }
  },
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.svg",
    editLink: {
      pattern: "https://github.com/slidevjs/slidev/edit/main/docs/:path",
      text: "Suggest changes to this page"
    },
    search: {
      provider: "local"
    },
    nav: [
      {
        text: "\u{1F4D6} Guide",
        items: [
          ...Guides,
          {
            text: "Advanced",
            items: Advanced
          }
        ]
      },
      {
        text: "\u2728 Features",
        link: "/features/"
      },
      {
        text: "Reference",
        items: [
          {
            text: "Built-in",
            items: BuiltIn
          },
          {
            text: "Customize",
            items: customizations_default
          }
        ]
      },
      {
        text: "Resources",
        items: Resources
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/slidevjs/slidev" },
      { icon: "twitter", link: "https://twitter.com/slidevjs" },
      { icon: "discord", link: "https://chat.sli.dev" }
    ],
    sidebar: {
      "/guide/": slidebars,
      "/themes/": slidebars,
      "/addons/": slidebars,
      "/custom/": slidebars,
      "/builtin/": slidebars,
      "/resources/": slidebars,
      ...await getSidebarObject(),
      "/features/": [],
      "/": slidebars
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright \xA9 2020-2025 Anthony Fu."
    }
  },
  locales: {
    root: {
      label: `English (v${version})`
    },
    zh: {
      label: "\u7B80\u4F53\u4E2D\u6587",
      link: "https://cn.sli.dev/"
    }
  }
});

// vite.config.ts
import UnoCSS from "unocss/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig as defineConfig2 } from "vite";
import Inspect from "vite-plugin-inspect";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import llmstxt from "vitepress-plugin-llms";
var vite_config_default = defineConfig2({
  optimizeDeps: {
    exclude: [
      "vue-demi",
      "@vueuse/shared",
      "@vueuse/core"
    ]
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [
    llmstxt({
      ignoreFiles: [
        "index.md",
        "README.md"
      ],
      sidebar: slidebars
    }),
    Components({
      dirs: [
        "./.vitepress/theme/components",
        "./node_modules/@slidev/client/builtin"
      ],
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/],
      resolvers: [
        IconsResolver({
          prefix: ""
        })
      ]
    }),
    Icons({
      defaultStyle: "display: inline-block;"
    }),
    Inspect(),
    UnoCSS(),
    groupIconVitePlugin()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAiLnZpdGVwcmVzcy9jdXN0b21pemF0aW9ucy50cyIsICIudml0ZXByZXNzL3BhZ2VzLnRzIiwgIi52aXRlcHJlc3Mvc2lkZWJhci1nZW4udHMiLCAidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZXJUd29zbGFzaCB9IGZyb20gJ0BzaGlraWpzL3ZpdGVwcmVzcy10d29zbGFzaCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IGdyb3VwSWNvbk1kUGx1Z2luIH0gZnJvbSAndml0ZXByZXNzLXBsdWdpbi1ncm91cC1pY29ucydcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgQ3VzdG9taXphdGlvbnMgZnJvbSAnLi9jdXN0b21pemF0aW9ucydcbmltcG9ydCB7IEFkdmFuY2VkLCBCdWlsdEluLCBHdWlkZXMsIFJlc291cmNlcyB9IGZyb20gJy4vcGFnZXMnXG5pbXBvcnQgeyBnZXRTaWRlYmFyT2JqZWN0IH0gZnJvbSAnLi9zaWRlYmFyLWdlbidcblxuZXhwb3J0IGNvbnN0IHNsaWRlYmFyczogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXG4gIHtcbiAgICB0ZXh0OiAnR3VpZGUnLFxuICAgIGl0ZW1zOiBHdWlkZXMsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnQWR2YW5jZWQnLFxuICAgIGl0ZW1zOiBBZHZhbmNlZCxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDdXN0b21pemF0aW9ucycsXG4gICAgaXRlbXM6IEN1c3RvbWl6YXRpb25zLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0J1aWx0LWluJyxcbiAgICBpdGVtczogQnVpbHRJbixcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSZXNvdXJjZXMnLFxuICAgIGl0ZW1zOiBSZXNvdXJjZXMsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiAnU2xpZGV2JyxcbiAgZGVzY3JpcHRpb246ICdQcmVzZW50YXRpb24gc2xpZGVzIGZvciBkZXZlbG9wZXJzJyxcbiAgaGVhZDogW1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiAnL2Zhdmljb24ucG5nJyB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdhdXRob3InLCBjb250ZW50OiAnQW50aG9ueSBGdScgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogJ1NsaWRldicgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogJ2h0dHBzOi8vc2xpLmRldi9vZy1pbWFnZS5wbmcnIH1dLFxuICAgIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICdQcmVzZW50YXRpb24gc2xpZGVzIGZvciBkZXZlbG9wZXJzJyB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeV9sYXJnZV9pbWFnZScgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjpjcmVhdG9yJywgY29udGVudDogJ0BzbGlkZXZqcycgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjppbWFnZScsIGNvbnRlbnQ6ICdodHRwczovL3NsaS5kZXYvb2ctaW1hZ2UucG5nJyB9XSxcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2Rucy1wcmVmZXRjaCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyB9XSxcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ3ByZWNvbm5lY3QnLCBjcm9zc29yaWdpbjogJ2Fub255bW91cycsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyB9XSxcbiAgICBbJ2xpbmsnLCB7IGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEAyMDA7NDAwOzUwMCZmYW1pbHk9SW50ZXI6d2dodEAyMDA7NDAwOzUwMDs2MDAnLCByZWw6ICdzdHlsZXNoZWV0JyB9XSxcbiAgXSxcbiAgbWFya2Rvd246IHtcbiAgICB0aGVtZToge1xuICAgICAgbGlnaHQ6ICd2aXRlc3NlLWxpZ2h0JyxcbiAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxuICAgIH0sXG4gICAgYXN5bmMgc2hpa2lTZXR1cChzaGlraSkge1xuICAgICAgYXdhaXQgc2hpa2kubG9hZExhbmd1YWdlKFxuICAgICAgICAnaHRtbCcsXG4gICAgICAgICd4bWwnLFxuICAgICAgICAndnVlJyxcbiAgICAgICAgJ21hcmtkb3duJyxcbiAgICAgICAgJ21lcm1haWQnLFxuICAgICAgICAnbGF0ZXgnLFxuICAgICAgKVxuICAgIH0sXG4gICAgY29kZVRyYW5zZm9ybWVyczogW1xuICAgICAgdHJhbnNmb3JtZXJUd29zbGFzaCh7XG4gICAgICAgIHR3b3NsYXNoT3B0aW9uczoge1xuICAgICAgICAgIC8vIFRoZSBAc2xpZGV2LyogaW5zdGFsbGVkIGluIGRvY3MgcGFja2FnZSBhcmUgdmVyeSBvbGQgYW5kIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gdGhlIGhvbWVwYWdlIGRlbW9cbiAgICAgICAgICB2ZnNSb290OiBmaWxlVVJMVG9QYXRoKFwiZmlsZTovLy9DOi9Vc2Vycy9zeW91cy9EZXNrdG9wL3Byb2plY3Qvc2xpZGV2LWRvY3MtamEvLnZpdGVwcmVzcy9jb25maWcudHNcIiksXG4gICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICByZXNvbHZlSnNvbk1vZHVsZTogdHJ1ZSxcbiAgICAgICAgICAgIG1vZHVsZVJlc29sdXRpb246IC8qIEJ1bmRsZXIgKi8gMTAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGNvbmZpZyhtZCkge1xuICAgICAgbWQudXNlKGdyb3VwSWNvbk1kUGx1Z2luKVxuICAgIH0sXG4gIH0sXG4gIGNsZWFuVXJsczogdHJ1ZSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zbGlkZXZqcy9zbGlkZXYvZWRpdC9tYWluL2RvY3MvOnBhdGgnLFxuICAgICAgdGV4dDogJ1N1Z2dlc3QgY2hhbmdlcyB0byB0aGlzIHBhZ2UnLFxuICAgIH0sXG5cbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxuICAgIH0sXG5cbiAgICBuYXY6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1RDgzRFx1RENENiBHdWlkZScsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgLi4uR3VpZGVzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdBZHZhbmNlZCcsXG4gICAgICAgICAgICBpdGVtczogQWR2YW5jZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTI3MjggRmVhdHVyZXMnLFxuICAgICAgICBsaW5rOiAnL2ZlYXR1cmVzLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnUmVmZXJlbmNlJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQnVpbHQtaW4nLFxuICAgICAgICAgICAgaXRlbXM6IEJ1aWx0SW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQ3VzdG9taXplJyxcbiAgICAgICAgICAgIGl0ZW1zOiBDdXN0b21pemF0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Jlc291cmNlcycsXG4gICAgICAgIGl0ZW1zOiBSZXNvdXJjZXMsXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zbGlkZXZqcy9zbGlkZXYnIH0sXG4gICAgICB7IGljb246ICd0d2l0dGVyJywgbGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20vc2xpZGV2anMnIH0sXG4gICAgICB7IGljb246ICdkaXNjb3JkJywgbGluazogJ2h0dHBzOi8vY2hhdC5zbGkuZGV2JyB9LFxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiB7XG4gICAgICAnL2d1aWRlLyc6IHNsaWRlYmFycyxcbiAgICAgICcvdGhlbWVzLyc6IHNsaWRlYmFycyxcbiAgICAgICcvYWRkb25zLyc6IHNsaWRlYmFycyxcbiAgICAgICcvY3VzdG9tLyc6IHNsaWRlYmFycyxcbiAgICAgICcvYnVpbHRpbi8nOiBzbGlkZWJhcnMsXG4gICAgICAnL3Jlc291cmNlcy8nOiBzbGlkZWJhcnMsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYW50ZnUvbm8tdG9wLWxldmVsLWF3YWl0XG4gICAgICAuLi5hd2FpdCBnZXRTaWRlYmFyT2JqZWN0KCksXG4gICAgICAnL2ZlYXR1cmVzLyc6IFtdLFxuICAgICAgJy8nOiBzbGlkZWJhcnMsXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDIwLTIwMjUgQW50aG9ueSBGdS4nLFxuICAgIH0sXG4gIH0sXG5cbiAgbG9jYWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGxhYmVsOiBgRW5nbGlzaCAodiR7dmVyc2lvbn0pYCxcbiAgICB9LFxuICAgIHpoOiB7XG4gICAgICBsYWJlbDogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9jbi5zbGkuZGV2LycsXG4gICAgfSxcbiAgfSxcbn0pXG4iLCAiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdGV4dDogJ0NvbmZpZ3VyYXRpb25zJyxcbiAgICBsaW5rOiAnL2N1c3RvbS8nLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0RpcmVjdG9yeSBTdHJ1Y3R1cmUnLFxuICAgIGxpbms6ICcvY3VzdG9tL2RpcmVjdG9yeS1zdHJ1Y3R1cmUnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0NvbmZpZ3VyZSBIaWdobGlnaHRlcicsXG4gICAgbGluazogJy9jdXN0b20vY29uZmlnLWhpZ2hsaWdodGVyJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgVml0ZSBhbmQgUGx1Z2lucycsXG4gICAgbGluazogJy9jdXN0b20vY29uZmlnLXZpdGUnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0NvbmZpZ3VyZSBWdWUgQXBwJyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctdnVlJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgVW5vQ1NTJyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctdW5vY3NzJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgQ29kZSBSdW5uZXJzJyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctY29kZS1ydW5uZXJzJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgVHJhbnNmb3JtZXJzJyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctdHJhbnNmb3JtZXJzJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgTW9uYWNvJyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctbW9uYWNvJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgS2FUZVgnLFxuICAgIGxpbms6ICcvY3VzdG9tL2NvbmZpZy1rYXRleCcsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnQ29uZmlndXJlIE1lcm1haWQnLFxuICAgIGxpbms6ICcvY3VzdG9tL2NvbmZpZy1tZXJtYWlkJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgUm91dGVzJyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctcm91dGVzJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgU2hvcnRjdXRzJyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctc2hvcnRjdXRzJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgQ29udGV4dCBNZW51JyxcbiAgICBsaW5rOiAnL2N1c3RvbS9jb25maWctY29udGV4dC1tZW51JyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb25maWd1cmUgRm9udHMnLFxuICAgIGxpbms6ICcvY3VzdG9tL2NvbmZpZy1mb250cycsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnQ29uZmlndXJlIFByZS1QYXJzZXInLFxuICAgIGxpbms6ICcvY3VzdG9tL2NvbmZpZy1wYXJzZXInLFxuICB9LFxuXVxuIiwgImV4cG9ydCBjb25zdCBHdWlkZXMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnV2h5IFNsaWRldicsXG4gICAgbGluazogJy9ndWlkZS93aHknLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsXG4gICAgbGluazogJy9ndWlkZS8nLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1N5bnRheCBHdWlkZScsXG4gICAgbGluazogJy9ndWlkZS9zeW50YXgnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1VzZXIgSW50ZXJmYWNlJyxcbiAgICBsaW5rOiAnL2d1aWRlL3VpJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdBbmltYXRpb25zJyxcbiAgICBsaW5rOiAnL2d1aWRlL2FuaW1hdGlvbnMnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1RoZW1lICYgQWRkb25zJyxcbiAgICBsaW5rOiAnL2d1aWRlL3RoZW1lLWFkZG9uJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDb21wb25lbnRzJyxcbiAgICBsaW5rOiAnL2d1aWRlL2NvbXBvbmVudCcsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnTGF5b3V0cycsXG4gICAgbGluazogJy9ndWlkZS9sYXlvdXQnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0V4cG9ydGluZycsXG4gICAgbGluazogJy9ndWlkZS9leHBvcnRpbmcnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0hvc3RpbmcnLFxuICAgIGxpbms6ICcvZ3VpZGUvaG9zdGluZycsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnRkFRJyxcbiAgICBsaW5rOiAnL2d1aWRlL2ZhcScsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBCdWlsdEluID0gW1xuICB7XG4gICAgdGV4dDogJ0NMSScsXG4gICAgbGluazogJy9idWlsdGluL2NsaScsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnQ29tcG9uZW50cycsXG4gICAgbGluazogJy9idWlsdGluL2NvbXBvbmVudHMnLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0xheW91dHMnLFxuICAgIGxpbms6ICcvYnVpbHRpbi9sYXlvdXRzJyxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IEFkdmFuY2VkID0gW1xuICB7XG4gICAgdGV4dDogJ0dsb2JhbCBDb250ZXh0JyxcbiAgICBsaW5rOiAnL2d1aWRlL2dsb2JhbC1jb250ZXh0JyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdXcml0aW5nIExheW91dHMnLFxuICAgIGxpbms6ICcvZ3VpZGUvd3JpdGUtbGF5b3V0JyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdXcml0aW5nIFRoZW1lcycsXG4gICAgbGluazogJy9ndWlkZS93cml0ZS10aGVtZScsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnV3JpdGluZyBBZGRvbnMnLFxuICAgIGxpbms6ICcvZ3VpZGUvd3JpdGUtYWRkb24nLFxuICB9LFxuXVxuXG5leHBvcnQgY29uc3QgUmVzb3VyY2VzID0gW1xuICB7XG4gICAgdGV4dDogJ1Nob3djYXNlcycsXG4gICAgbGluazogJy9yZXNvdXJjZXMvc2hvd2Nhc2VzJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdUaGVtZSBHYWxsZXJ5JyxcbiAgICBsaW5rOiAnL3Jlc291cmNlcy90aGVtZS1nYWxsZXJ5JyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdBZGRvbiBHYWxsZXJ5JyxcbiAgICBsaW5rOiAnL3Jlc291cmNlcy9hZGRvbi1nYWxsZXJ5JyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdMZWFybmluZyBSZXNvdXJjZXMnLFxuICAgIGxpbms6ICcvcmVzb3VyY2VzL2xlYXJuaW5nJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdDdXJhdGVkIENvdmVycycsXG4gICAgbGluazogJy9yZXNvdXJjZXMvY292ZXJzJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSZWxlYXNlIE5vdGVzJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3NsaWRldmpzL3NsaWRldi9yZWxlYXNlcycsXG4gIH0sXG5dXG4iLCAiaW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IGZnIGZyb20gJ2Zhc3QtZ2xvYidcbmltcG9ydCBncmF5bWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuXG5jb25zdCByb290ID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLi8uLi8nLCBcImZpbGU6Ly8vQzovVXNlcnMvc3lvdXMvRGVza3RvcC9wcm9qZWN0L3NsaWRldi1kb2NzLWphLy52aXRlcHJlc3Mvc2lkZWJhci1nZW4udHNcIikpXG5cbmludGVyZmFjZSBQYXJzZWRGaWxlIHtcbiAgZmlsZXBhdGg6IHN0cmluZ1xuICBwYXRoOiBzdHJpbmdcbiAgbWF0dGVyOiBncmF5bWF0dGVyLkdyYXlNYXR0ZXJGaWxlPHN0cmluZz5cbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBwYXJzZUZpbGUoZmlsZTogc3RyaW5nKSB7XG4gIGNvbnN0IGZpbGVwYXRoID0gam9pbihyb290LCBmaWxlKVxuICBjb25zdCBwYXRoID0gZmlsZS5yZXBsYWNlKCdkb2NzLycsICcnKS5yZXBsYWNlKCcubWQnLCAnJylcbiAgY29uc3QgbWF0dGVyID0gZ3JheW1hdHRlci5yZWFkKGZpbGVwYXRoKVxuICBjb25zdCB0aXRsZSA9IG1hdHRlci5kYXRhLnRpdGxlIHx8IG1hdHRlci5jb250ZW50Lm1hdGNoKC9eI1xccysoLiopL20pPy5bMV0gfHwgcGF0aFxuICByZXR1cm4ge1xuICAgIGZpbGVwYXRoLFxuICAgIHBhdGgsXG4gICAgbWF0dGVyLFxuICAgIHRpdGxlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaWRlYmFyT2JqZWN0KCkge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdPiA9IHt9XG5cbiAgY29uc3QgcGFyc2VkRmVhdHVyZXM6IFBhcnNlZEZpbGVbXSA9IGF3YWl0IGZnKFtcbiAgICAnZG9jcy9mZWF0dXJlcy8qLm1kJyxcbiAgXSwge1xuICAgIG9ubHlGaWxlczogdHJ1ZSxcbiAgICBjd2Q6IHJvb3QsXG4gIH0pXG4gICAgLnRoZW4oZmlsZXMgPT4gZmlsZXMubWFwKHBhcnNlRmlsZSkpXG5cbiAgY29uc3QgcGFyc2VkR3VpZGVzOiBQYXJzZWRGaWxlW10gPSBhd2FpdCBmZyhbXG4gICAgJ2RvY3MvZ3VpZGUvKi5tZCcsXG4gIF0sIHtcbiAgICBvbmx5RmlsZXM6IHRydWUsXG4gICAgY3dkOiByb290LFxuICB9KVxuICAgIC50aGVuKGZpbGVzID0+IGZpbGVzLm1hcChwYXJzZUZpbGUpKVxuXG4gIHBhcnNlZEZlYXR1cmVzLmZvckVhY2goKHsgbWF0dGVyLCBwYXRoIH0pID0+IHtcbiAgICBjb25zdCBpdGVtczogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10gPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdCYWNrIHRvJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQWxsIEZlYXR1cmVzJyxcbiAgICAgICAgICAgIGxpbms6ICcvZmVhdHVyZXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF1cblxuICAgIGZ1bmN0aW9uIGZpbmRQYXJzZWQocmVsYXRlZDogc3RyaW5nKSB7XG4gICAgICByZWxhdGVkID0gcmVsYXRlZC5yZXBsYWNlKC8jLiokLywgJycpXG4gICAgICBjb25zdCBmZWF0dXJlID0gcGFyc2VkRmVhdHVyZXMuZmluZChmaWxlID0+IGZpbGUucGF0aCA9PT0gcmVsYXRlZClcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogJ2ZlYXR1cmVzJyxcbiAgICAgICAgICBpdGVtOiBmZWF0dXJlLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBndWlkZSA9IHBhcnNlZEd1aWRlcy5maW5kKGZpbGUgPT4gZmlsZS5wYXRoID09PSByZWxhdGVkKVxuICAgICAgaWYgKGd1aWRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogJ2d1aWRlJyxcbiAgICAgICAgICBpdGVtOiBndWlkZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZyb250bWF0dGVyVG9TaWRlYmFySXRlbShwYXRoOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGZpbmRQYXJzZWQocGF0aClcbiAgICAgICAgaWYgKG1hdGNoPy50eXBlID09PSAnZmVhdHVyZXMnKSB7XG4gICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICB0ZXh0OiBgXHUyNzI4ICR7bWF0Y2guaXRlbS50aXRsZX1gLFxuICAgICAgICAgICAgbGluazogYC8ke21hdGNoLml0ZW0ucGF0aH1gLFxuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoPy50eXBlID09PSAnZ3VpZGUnKSB7XG4gICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICB0ZXh0OiBgXHVEODNEXHVEQ0Q2ICAke21hdGNoLml0ZW0udGl0bGV9YCxcbiAgICAgICAgICAgIGxpbms6IGAvJHttYXRjaC5pdGVtLnBhdGh9YCxcbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUud2FybihgRGVwZW5kZW50IGZpbGUgbm90IGZvdW5kOiAke3BhdGh9YClcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgdGV4dDogcGF0aCxcbiAgICAgICAgICBsaW5rOiBgLyR7cGF0aH1gLFxuICAgICAgICB9XVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhwYXRoKS5tYXAoKFt0ZXh0LCBsaW5rXSkgPT4gKHtcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGxpbmssXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXR0ZXIuZGF0YS5kZXBlbmRzKSB7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0RlcGVuZHMgb24nLFxuICAgICAgICBpdGVtczogbWF0dGVyLmRhdGEuZGVwZW5kcy5mbGF0TWFwKGZyb250bWF0dGVyVG9TaWRlYmFySXRlbSksXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChtYXR0ZXIuZGF0YS5yZWxhdGVzKSB7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgdGV4dDogJ1JlbGF0ZWQgdG8nLFxuICAgICAgICBpdGVtczogbWF0dGVyLmRhdGEucmVsYXRlcy5mbGF0TWFwKGZyb250bWF0dGVyVG9TaWRlYmFySXRlbSksXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlcml2ZXMgPSBtYXR0ZXIuZGF0YS5kZXJpdmVzXG4gICAgICA/PyBwYXJzZWRGZWF0dXJlcy5maWx0ZXIoZiA9PiBmLm1hdHRlci5kYXRhLmRlcGVuZHM/LmluY2x1ZGVzKHBhdGgpKS5tYXAoZiA9PiBmLnBhdGgpXG5cbiAgICBpZiAoZGVyaXZlcy5sZW5ndGgpIHtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiAnRGVyaXZlcycsXG4gICAgICAgIGl0ZW1zOiBkZXJpdmVzLmZsYXRNYXAoZnJvbnRtYXR0ZXJUb1NpZGViYXJJdGVtKSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWFwW2AvJHtwYXRofWBdID0gaXRlbXNcbiAgfSlcblxuICByZXR1cm4gbWFwXG59XG4iLCAiaW1wb3J0IHsgc2xpZGViYXJzIH0gZnJvbSAnLnZpdGVwcmVzcy9jb25maWcnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcbmltcG9ydCB7IGdyb3VwSWNvblZpdGVQbHVnaW4gfSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLWdyb3VwLWljb25zJ1xuaW1wb3J0IGxsbXN0eHQgZnJvbSAndml0ZXByZXNzLXBsdWdpbi1sbG1zJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbXG4gICAgICAndnVlLWRlbWknLFxuICAgICAgJ0B2dWV1c2Uvc2hhcmVkJyxcbiAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgIF0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGxsbXN0eHQoe1xuICAgICAgaWdub3JlRmlsZXM6IFtcbiAgICAgICAgJ2luZGV4Lm1kJyxcbiAgICAgICAgJ1JFQURNRS5tZCcsXG4gICAgICBdLFxuICAgICAgc2lkZWJhcjogc2xpZGViYXJzLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZGlyczogW1xuICAgICAgICAnLi8udml0ZXByZXNzL3RoZW1lL2NvbXBvbmVudHMnLFxuICAgICAgICAnLi9ub2RlX21vZHVsZXMvQHNsaWRldi9jbGllbnQvYnVpbHRpbicsXG4gICAgICBdLFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkLywgL1xcLm1kXFw/dnVlL10sXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgcHJlZml4OiAnJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0pLFxuICAgIEljb25zKHtcbiAgICAgIGRlZmF1bHRTdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsnLFxuICAgIH0pLFxuICAgIEluc3BlY3QoKSxcbiAgICBVbm9DU1MoKSxcbiAgICBncm91cEljb25WaXRlUGx1Z2luKCksXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsaUJBQUFBLHNCQUFxQjtBQUM5QixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHlCQUF5Qjs7Ozs7O0FDSmxDLElBQU8seUJBQVE7QUFBQSxFQUNiO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGOzs7QUNqRU8sSUFBTSxTQUFTO0FBQUEsRUFDcEI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sVUFBVTtBQUFBLEVBQ3JCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sV0FBVztBQUFBLEVBQ3RCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVB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QUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZLENBQUMsT0FBTyxJQUFJO0FBQUEsTUFDeEIsU0FBUyxDQUFDLFVBQVUsY0FBYyxTQUFTLFdBQVc7QUFBQSxNQUN0RCxXQUFXO0FBQUEsUUFDVCxjQUFjO0FBQUEsVUFDWixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLG9CQUFvQjtBQUFBLEVBQ3RCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZmlsZVVSTFRvUGF0aCIsICJwYXRoIiwgImZpbGVVUkxUb1BhdGgiLCAiZGVmaW5lQ29uZmlnIl0KfQo=
