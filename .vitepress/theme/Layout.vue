<template>
  <div class="deprecate-banner">
    翻訳はもう維持されていません、<a href="https://sli.dev/">英語のドキュメント</a>をご覧ください.
  </div>

  <div class="theme" :class="pageClasses">
    <NavBar
      v-if="showNavbar"
      :show-sidebar="showSidebar"
      :class="isHome ? '!border-transparent !bg-opacity-50 !md:bg-transparent <md:(backdrop-filter backdrop-blur)' : ''"
      @toggle="toggleSidebar"
    >
      <template #search>
        <slot name="navbar-search">
          <AlgoliaSearchBox v-if="theme.algolia" :options="theme.algolia" />
        </slot>
      </template>
    </NavBar>

    <SideBar :open="openSideBar">
      <template #sidebar-top>
        <slot name="sidebar-top" />
      </template>
      <template #sidebar-bottom>
        <slot name="sidebar-bottom" />
      </template>
    </SideBar>
    <!-- TODO: make this button accessible -->
    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Content v-if="isCustomLayout" />

    <Home v-else-if="enableHome">
      <template #hero>
        <slot name="home-hero" />
      </template>
      <template #features>
        <slot name="home-features" />
      </template>
      <template #footer>
        <slot name="home-footer" />
      </template>
    </Home>

    <Page v-else>
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>

  <!-- <Debug /> -->

  <ClientOnly>
    <WorkingInProgress />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import {
  useRoute,
  useSiteData,
  useSiteDataByRoute,
} from 'vitepress'
import type { DefaultTheme } from './config'

// components
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import Page from './components/Page.vue'
const Home = defineAsyncComponent(() => import('./components/Home.vue'))

// generic state
const route = useRoute()
const siteData = useSiteData<DefaultTheme.Config>()
const siteRouteData = useSiteDataByRoute()
const theme = computed(() => siteData.value.themeConfig)

const AlgoliaSearchBox = defineAsyncComponent(
  () => import('./components/AlgoliaSearchBox.vue'),
)

// custom layout
const isCustomLayout = computed(() => !!route.data.frontmatter.customLayout)
// home
const enableHome = computed(() => !!route.data.frontmatter.home)

// navbar
const showNavbar = computed(() => {
  const { themeConfig } = siteRouteData.value
  const { frontmatter } = route.data
  if (frontmatter.navbar === false || themeConfig.navbar === false)
    return false

  return (
    siteData.value.title
    || themeConfig.logo
    || themeConfig.repo
    || themeConfig.nav
  )
})

const isHome = computed(() => route.path === '/' || route.path === '/index.html')

// sidebar
const openSideBar = ref(false)

const showSidebar = computed(() => {
  const { frontmatter } = route.data
  const { themeConfig } = siteRouteData.value
  return (
    !frontmatter.home
    && frontmatter.sidebar !== false
    && ((typeof themeConfig.sidebar === 'object'
      && Object.keys(themeConfig.sidebar).length !== 0)
      || (Array.isArray(themeConfig.sidebar) && themeConfig.sidebar.length !== 0))
  )
})

const toggleSidebar = (to?: boolean) => {
  openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value
}

const hideSidebar = toggleSidebar.bind(null, false)
// close the sidebar when navigating to a different location
watch(route, hideSidebar)
// TODO: route only changes when the pathname changes
// listening to hashchange does nothing because it's prevented in router

// page classes
const pageClasses = computed(() => {
  return [
    {
      'no-navbar': !showNavbar.value,
      'sidebar-open': openSideBar.value,
      'no-sidebar': !showSidebar.value,
    },
  ]
})
</script>

<style>
.deprecate-banner {
  position: fixed;
  left: 0;
  right: 0;
  top: -32px;
  padding: 4px;
  min-height: 32px;
  background-color: rgb(250,200,89);
  color: black;
  text-align: center;
}

.deprecate-banner a {
  text-decoration: underline;
  color: rgb(4,96,132);
}

:root {
  margin-top: 32px;
  transform: translateX(0);
}
</style>
