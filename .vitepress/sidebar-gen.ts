import type { DefaultTheme } from 'vitepress'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'
import graymatter from 'gray-matter'

const root = fileURLToPath(new URL('../', import.meta.url))

const RE_HEADING1 = /^#\s+(.*)/m
const RE_HASH_FRAGMENT = /#.*$/

interface ParsedFile {
  filepath: string
  path: string
  matter: graymatter.GrayMatterFile<string>
  title: string
}

function parseFile(file: string) {
  const filepath = join(root, file)
  const path = file.replace('docs/', '').replace('.md', '')
  const matter = graymatter.read(filepath)
  const title = matter.data.title || matter.content.match(RE_HEADING1)?.[1] || path
  return {
    filepath,
    path,
    matter,
    title,
  }
}

export async function getSidebarObject() {
  const map: Record<string, DefaultTheme.SidebarItem[]> = {}

  const parsedFeatures: ParsedFile[] = await fg([
    'features/*.md',
  ], {
    onlyFiles: true,
    cwd: root,
  })
    .then(files => files.map(parseFile))

  const parsedGuides: ParsedFile[] = await fg([
    'guide/*.md',
  ], {
    onlyFiles: true,
    cwd: root,
  })
    .then(files => files.map(parseFile))

  const parsedCustoms: ParsedFile[] = await fg([
    'custom/*.md',
  ], {
    onlyFiles: true,
    cwd: root,
  })
    .then(files => files.map(parseFile))

  parsedFeatures.forEach(({ matter, path }) => {
    const items: DefaultTheme.SidebarItem[] = [
      {
        text: '上位ページに戻る',
        items: [
          {
            text: 'すべての機能',
            link: '/features',
          },
        ],
      },
    ]

    function findParsed(related: string) {
      related = related.replace(RE_HASH_FRAGMENT, '')
      const feature = parsedFeatures.find(file => file.path === related)
      if (feature) {
        return {
          type: 'features',
          item: feature,
        }
      }
      const guide = parsedGuides.find(file => file.path === related)
      if (guide) {
        return {
          type: 'guide',
          item: guide,
        }
      }
      const custom = parsedCustoms.find(file => file.path === related)
      if (custom) {
        return {
          type: 'custom',
          item: custom,
        }
      }
      return undefined
    }

    function frontmatterToSidebarItem(path: string | Record<string, string>): DefaultTheme.SidebarItem[] {
      if (typeof path === 'string') {
        const match = findParsed(path)
        if (match?.type === 'features') {
          return [{
            text: `✨ ${match.item.title}`,
            link: `/${path}`,
          }]
        }
        if (match?.type === 'guide') {
          return [{
            text: `📖 ${match.item.title}`,
            link: `/${path}`,
          }]
        }
        if (match?.type === 'custom') {
          return [{
            text: `🛠️ ${match.item.title}`,
            link: `/${path}`,
          }]
        }
        console.warn(`Dependent file not found: ${path}`)
        return [{
          text: path,
          link: `/${path}`,
        }]
      }
      else {
        return Object.entries(path).map(([text, link]) => ({
          text,
          link,
        }))
      }
    }

    if (matter.data.depends) {
      items.push({
        text: '依存機能',
        items: matter.data.depends.flatMap(frontmatterToSidebarItem),
      })
    }

    if (matter.data.relates) {
      items.push({
        text: '関連機能',
        items: matter.data.relates.flatMap(frontmatterToSidebarItem),
      })
    }

    const derives = matter.data.derives
      ?? parsedFeatures.filter(f => f.matter.data.depends?.includes(path)).map(f => f.path)

    if (derives.length) {
      items.push({
        text: 'Derives',
        items: derives.flatMap(frontmatterToSidebarItem),
      })
    }

    map[`/${path}`] = items
  })

  return map
}
