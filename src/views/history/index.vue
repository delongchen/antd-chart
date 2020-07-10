<template>
  <page-header-wrapper>
    <a-list
      rowKey="id"
      :data-source="rooms"
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :hoverable="true">
          <a-card-meta>
            <p slot="title">{{ item.title }}</p>
            <div class="meta-content" slot="description">{{ `id=${item.id}` }}</div>
          </a-card-meta>
          <template class="ant-card-actions" #actions>
            <a @click="goToChart(item.id)">图表</a>
            <a>详情</a>
          </template>
        </a-card>
      </a-list-item>
    </a-list>
  </page-header-wrapper>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "History",
    computed: {
      ...mapState({
        rooms: 'historyStore'
      })
    },
    methods: {
      goToChart(id) {
        this.$router.push('/chart')
        this.$store.commit('SET_NOW', id)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~ant-design-vue/lib/style/index";

  // The prefix to use on all css classes from ant-pro.
  @ant-pro-prefix             : ant-pro;
  @ant-global-sider-zindex    : 106;
  @ant-global-header-zindex   : 105;

  .card-list {
    /deep/ .ant-card-body:hover {
      .ant-card-meta-title>a {
        color: @primary-color;
      }
    }

    /deep/ .ant-card-meta-title {
      margin-bottom: 12px;

      &>a {
        display: inline-block;
        max-width: 100%;
        color: rgba(0,0,0,.85);
      }
    }

    /deep/ .meta-content {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      height: 64px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      margin-bottom: 1em;
    }
  }

  .ant-card-actions {
    background: #f7f9fa;

    li {
      float: left;
      text-align: center;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      width: 50%;

      &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
      }

      a {
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
        display: inline-block;
        width: 100%;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }
</style>
