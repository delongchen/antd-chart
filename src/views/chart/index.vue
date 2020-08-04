<template>
  <page-header-wrapper>
    <template #content>
      <a-icon type="question-circle" @click="showDes = !showDes" style="font-size: 24px"/>
      <a-card
        v-show="showDes"
        :bordered="false"
        title="说明"
        :body-style="{ padding: 0 }">
        <div>
          <a-card-grid v-for="(v, k) in colorConfig" :key="k" style="width:25%;text-align:center">
            <a-card :bordered="false" :body-style="{ padding: 0 }">
              <a-card-meta >
                <div slot="title">
                  <a-icon
                    :type="v.icon"
                    theme="twoTone"
                    :two-tone-color="v.color"
                  />
                  <span>{{ v.tag }}</span>
                </div>
                <div slot="description" class="card-description">
                  {{ v.description }}
                </div>
              </a-card-meta>
            </a-card>
          </a-card-grid>
        </div>
      </a-card>
    </template>

    <a-row :gutter="24">
      <point-chart v-if="$store.state.historyStore.length !== 0"/>
      <a-spin size="large" v-show="$store.state.loading" tip="Loading...">
        <div class="spin-content">
          稍等片刻
        </div>
      </a-spin>
      <a-empty v-show="!$store.state.loading && $store.state.historyStore.length === 0">
        <span slot="description">No Data</span>
        <a-button @click="$router.push('/form')">Go To Form</a-button>
      </a-empty>
    </a-row>
  </page-header-wrapper>
</template>

<script>
  import PointChart from '@/components/PointChart'
  import { pointsColorConfig } from "@/config/pointsColorConfig";

  export default {
    name: "Chart",
    components: {
      PointChart
    },
    data() {
      this.colorConfig = pointsColorConfig.color_mapping
      return {
        showDes: false
      }
    }
  }
</script>

<style scoped>
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
