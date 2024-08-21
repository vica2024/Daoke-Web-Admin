<template>
  <div style="padding: 15px 0;">
    <form :model="form_data">
      <row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
        <Col :span="6" v-for="item in format">
          <form-item :field="item.fileds" :label="item.title" label-col-flex="100px">
            <Input v-if="item.tag=='input'" v-model="item.value" placeholder="please enter..." style="width: 100%;"/>
            <Select v-if="item.tag=='select'" v-model="item.value" style="width: 100%;">
              <Option v-for="option in item.options" :value="option.value">{{ option.label }}</Option>
            </Select>
          </form-item>
        </Col>
        <Col :span="6">
          <form-item label-col-flex="100px">
            <Button type="primary" style="width: 100px;margin-right: 20px;">查询</Button>
            <Button type="outline" style="width: 100px;">重置</Button>
          </form-item>
        </Col>
      </row>
    </form>
  </div>
</template>

<script>
import {Row, Col, Form, FormItem, Input, Select, Option, Button} from "@arco-design/web-vue";
import {ref} from 'vue';

export default {
  name: "house-search-form",
  components: {Row, Col, Form, FormItem, Input, Select, Option, Button},
  setup() {
    const format_data = ref({});
    const format = ref([
      {
        title: '房源标题',
        tag: 'input',
        fileds: '',
        value: ''
      },
      {
        title: '位置',
        tag: 'select',
        fileds: '',
        value: '',
        options: [{label: "option1", value: 1}]
      },
      {
        title: '租金',
        tag: 'select',
        fileds: '',
        value: '',
        options: [{label: "option1", value: 1}]
      },
      {
        title: '全景看房',
        tag: 'select',
        fileds: '',
        value: '',
        options: [{label: "option1", value: 1}]
      },
      {
        title: '房东手机',
        tag: 'input',
        fileds: '',
        value: '',
        options: [{label: "option1", value: 1}]
      }
    ]);
    return {
      format,
      format_data
    }
  }
}
</script>

<style scoped>

</style>