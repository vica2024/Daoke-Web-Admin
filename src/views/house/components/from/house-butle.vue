<template>
  <Card title="管家信息" style="margin-bottom: 15px;">
    <Form :model="form_data" :style="{ width: '680px', marginTop: '20px' }">
      <FormItem field="title" label="绑定管家">
        <Select :style="{width:'320px'}" placeholder="请输入管家">
          <Option>Beijing</Option>
        </Select>
      </FormItem>
      <FormItem field="community" label="管家有话说">
        <Textarea placeholder="请输入内容" allow-clear/>
      </FormItem>
    </Form>
  </Card>
</template>

<script>
import {Card, Form, FormItem, Textarea, Select, Option} from "@arco-design/web-vue";

export default {
  name: "house-butle-info",
  components: {Card, Form, FormItem,Textarea,Select, Option},
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
