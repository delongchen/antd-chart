<template>
  <div class="page-header-index-wide page-header-wrapper-grid-content-main">
    <a-row :gutter="24">
      <a-col :md="24" :lg="7">
        <a-card :bordered="false">
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img :src="`http://cqupt.online/pic/${record.num_stu}.jpg`" :alt="record.name_stu">
            </div>
            <div class="username">{{ record.name_stu }}</div>
            <div class="bio">{{ `${record.sex} ${record.old}岁` }}</div>
          </div>
          <div class="account-center-detail">
            <p>
              <i class="title"></i>{{ `${record.num_gr}-${record.name_college}-${record.name_major}` }}
            </p>
            <p>
              <i class="group"></i>学号: {{ record.num_stu }}
            </p>
            <p>班级: {{ record.num_class }}</p>
            <p>辅导员: {{ record.leader }}</p>
            <p>
              <i class="address"></i>
              <span>{{ record.live }}</span>
            </p>
          </div>
        </a-card>
      </a-col>
      <a-col :md="24" :lg="17">
        <a-card
          class="score"
          style="margin-bottom: 24px;"
          :bordered="false"
          :body-style="{ padding: 0 }">
          <a-card-grid style="width:50%;text-align:center">
            <a-card :bordered="false" :body-style="{ padding: 0 }">
              <a-card-meta :title="`平均成绩${record.score}`">
                <template #title>
                  <div class="card-title"></div>
                </template>
                <template #description>
                  <div class="card-description"></div>
                </template>
              </a-card-meta>
            </a-card>
          </a-card-grid>

          <a-card-grid style="width:50%;text-align:center">
            <a-card :bordered="false" :body-style="{ padding: 0 }">
              <a-card-meta title="1">
                <template #title>
                  <div class="card-title"></div>
                </template>
                <template #description>
                  <div class="card-description"></div>
                </template>
              </a-card-meta>
            </a-card>
          </a-card-grid>
        </a-card>

        <a-card
          style="width:100%"
          :bordered="false"
          title="过往经历"
          :tab-list="tabList"
          :active-tab-key="tabKey"
          @tabChange="k => void handleTagChange(k, 'tabKey')"
        >
          {{ tabKey }}
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "StuProfile",
  props: {
    record: {
      type: Object,
      default() {
        return {
          name_stu: 'fuck',
          num_stu: '2017214770'
        }
      }
    }
  },
  data() {
    return {
      tabList: [
        {key: '2017', tab: '2017'},
        {key: '2018', tab: '2018'},
        {key: '2019', tab: '2019'},
      ],
      tabKey: '2017',
    }
  },
  methods: {
    handleTagChange(k, type) {
      this[type] = k
    },
    isGua(gua) {
      const color = 'color:' + gua ? 'red' : 'green'
      const text = gua ? '有' : '无'
      return (<p>
        <span style={color}>{text}</span>挂科
      </p>)
    }
  }
}
</script>

<style scoped lang="less">
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      width: 104px;
      //height: 104px;
      margin: 0 auto 20px;
      border-radius: 50%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
    }

    .title {
      background-position: 0 0;
    }

    .group {
      background-position: 0 -22px;
    }

    .address {
      background-position: 0 -44px;
    }
  }

  .account-center-tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .tagsTitle,
  .teamTitle {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }

  .score {

    .card-title {
      font-size: 0;

      a {
        color: rgba(0, 0, 0, 0.85);
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;

        &:hover {
          color: #1890ff;
        }
      }
    }

    .card-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
  }
}
</style>
