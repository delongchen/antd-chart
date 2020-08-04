<template>
  <a-card :bordered="false" class="ant-pro-components-tag-select">
    <a-form :form="form" layout="inline" @submit="handleSubmit">
      <standard-form-row title="所属类目" block style="padding-bottom: 11px;">
        <a-form-item>
          <tag-select @change="handleChanged">
            <tag-select-option
              v-for="(v, k) in standards"
              :key="k"
              :value="v.key"
            >{{ v.title }}
            </tag-select-option>
          </tag-select>
        </a-form-item>
      </standard-form-row>

      <standard-form-row title="其它选项" grid last>
        <a-row :gutter="16">
          <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
            <a-form-item label="百分之" :wrapper-col="{ xs: 24, sm: 24, md: 12 }">
              <a-input
                v-decorator="['pre']"
                style="width: 100%"
              >
                <a-select
                  slot="addonBefore"
                  v-decorator="['prefix', { initialValue: 'f' }]"
                >
                  <a-select-option value="f">前</a-select-option>
                  <a-select-option value="a">后</a-select-option>
                </a-select>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="8">
            <a-form-item :wrapper-col="{ xs: 24, sm: 24, md: 12 }">
              <a-button type="primary" html-type="submit">检索</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </standard-form-row>
    </a-form>

    <a-card style="margin-top: 24px;" :bordered="false">
      <single-room
        v-if="$store.getters.ROOM_COUNT !== 0 && toShowList.length !== 0"
        :pagination="true"
        :record="toShowList"/>
      <a-empty v-else/>
    </a-card>
  </a-card>
</template>

<script>
  import StandardFormRow from '@/components/StandardFormRow'
  import TagSelect from '@/components/TagSelect'
  import {TagStandard} from "@/config/tagStandard";

  import SingleRoom from "@/components/PointChart/DialogPage/SingleRoom";

  const TagSelectOption = TagSelect.Option

  export default {
    name: "SearchStu",
    components: {
      StandardFormRow,
      TagSelect,
      TagSelectOption,
      SingleRoom
    },
    data() {
      this.standards = TagStandard

      return {
        form: this.$form.createForm(this),
        empty: true,
        pre: 0
      }
    },
    methods: {
      handleChanged(event) {
        console.log(event)
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.pre = values.pre
          }
        });
      },
    },
    computed: {
      rank() {
        return this.$store.getters.CURRENT_ROOM.rank
      },
      standardStore() {
        return this.$store.state.stuTag.standards
      },
      toShowList() {
        return {list: this.rank.frontPercent(this.pre)}
      }
    }
  }
</script>

<style scoped lang="less">
  .ant-pro-components-tag-select {
    /deep/ .ant-pro-tag-select .ant-tag {
      margin-right: 24px;
      padding: 0 8px;
      font-size: 14px;
    }
  }

  .list-articles-trigger {
    margin-left: 12px;
  }
</style>
