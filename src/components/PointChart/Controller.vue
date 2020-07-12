<template>
  <div class="icons-list">
    <a-button
      v-for="(v, k) in colorMapping"
      :key="k"
      type="link"
      size="large"
      @click="$store.commit('chart/SET_SELECTED_COLOR', k)"
    >
      <a-icon
        :type="v.icon"
        theme="twoTone"
        :two-tone-color="v.color"
      />
    </a-button>
  </div>
</template>

<script>
  import { pointsColorConfig } from "@/config/pointsColorConfig";

  export default {
    name: "Controller",
    data() {
      return {
        colorMapping: pointsColorConfig.color_mapping,
      }
    }
  }
</script>

<style scoped>
  .icons-list >>> .anticon {
    margin-right: 6px;
    font-size: 24px;
  }

  .icons-list {
    text-align: center;
  }
</style>
