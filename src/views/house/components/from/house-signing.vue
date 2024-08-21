<template>
  <Card title="签约信息" style="margin-bottom: 15px;">
    <Form :model="form_data" :style="{ width: '680px', marginTop: '20px' }">
      <FormItem field="title" label="签约年限">
        <Select :style="{width:'200px'}" placeholder="请选择">
          <Option>Beijing</Option>
        </Select>
      </FormItem>
      <FormItem field="title" label="租金交付">
        <Select :style="{width:'200px'}" placeholder="请选择">
          <Option>Beijing</Option>
        </Select>
      </FormItem>
      <FormItem field="title" label="押金方式">
        <Select :style="{width:'200px'}" placeholder="请选择">
          <Option>Beijing</Option>
        </Select>
      </FormItem>
      <FormItem field="title" label="交租日期">
        <date-picker style="width: 200px;" />
      </FormItem>
      <FormItem field="title" label="当前水表">
        <input-number :style="{width:'200px'}" placeholder="请选择当前水表" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </FormItem>
      <FormItem field="title" label="当前电表">
        <input-number :style="{width:'200px'}" placeholder="请选择当前电表" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </FormItem>
      <FormItem field="title" label="当前煤气">
        <input-number :style="{width:'200px'}" placeholder="请选择当前煤气" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </FormItem>
      <FormItem field="title" label="选择日期">
        <Range-picker :style="{width:'300px'}" :time-picker-props="{defaultValue:['00:00:00','00:00:00']}" @change="onChange" @select="onSelect"/>
      </FormItem>
    </Form>
  </Card>
</template>
<script>
import {Card, Form, FormItem, InputNumber, Select, Option,RangePicker,DatePicker} from "@arco-design/web-vue";

export default {
  name: "house-sign-info",
  components: {Card, Form, FormItem, InputNumber, Select, Option,RangePicker,DatePicker},
  setup() {
    const form_data = {};
    return {
      form_data
    }
  }
}
</script>

<style scoped>

</style>
