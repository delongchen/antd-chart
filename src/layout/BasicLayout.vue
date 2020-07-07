<template>
  <pro-layout
    :title="title"
    :menus="menus"
    :collapsed="collapsed"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
    :logo="logoRender"
    v-bind="settings"
  >
    <template #rightContentRender>
      <right-content
        :top-menu="true"
        :is-mobile="isMobile"
        :theme="settings.theme"
      />
    </template>

    <template #footerRender>
      <my-footer />
    </template>

    <router-view />
  </pro-layout>
</template>

<script>
  import defaultSettings from "@/config/defaultSettings";
  import { constantRouterMap } from "@/config/router.config";
  import { SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'
  import { mapMutations } from 'vuex'

  import MyFooter from '@/components/GlobalFooter'
  import RightContent from "@/components/GlobalHeader/RightContent";

  import LogoSvg from '../assets/logo.svg?inline'

  export default {
    name: "BasicLayout",
    components: {
      MyFooter,
      RightContent
    },
    data() {
      return {
        menus: [],
        collapsed: false,
        title: defaultSettings.title,
        settings: {
          layout: 'topmenu',
          contentWidth: defaultSettings.contentWidth === 'Fixed',
          theme: defaultSettings.navTheme,
          primaryColor: '#52C41A',
          fixedHeader: true,
          fixSiderbar: false,
          colorWeak: false
        },
        query: {},
        isMobile: false
      }
    },
    methods: {
      ...mapMutations('app', {
        set_sidebar_type: SIDEBAR_TYPE,
        toggle_mobile_type: TOGGLE_MOBILE_TYPE
      }),
      handleMediaQuery(val) {
        this.query = val
        if (this.isMobile && !val['screen-xs']) {
          this.isMobile = false
          return
        }

        if (!this.isMobile && val['screen-xs']) {
          this.isMobile = true
          this.collapsed = false
          this.settings.contentWidth = false
          // this.settings.fixSiderbar = false
        }
      },
      handleCollapse(val) {
        this.collapsed = val
      },
      logoRender() {
        return <LogoSvg />
      }
    },
    computed: {
    },
    created() {
      const routes = constantRouterMap.find(item => item.path === '/')
      this.menus = (routes && routes.children) || []
      this.$watch('collapsed', () => {
        this.set_sidebar_type(this.collapsed)
      })
      this.$watch('isMobile', () => {
        this.toggle_mobile_type(this.isMobile)
      })
    },
  }
</script>

<style lang="less">
  @import "./BasicLayout.less";
</style>
