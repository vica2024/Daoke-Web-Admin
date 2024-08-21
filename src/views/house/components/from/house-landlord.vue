<template>
  <Card title="房东信息">
    <Form :model="form_data" :style="{ width: '680px', marginTop: '20px' }">
      <FormItem field="title" label="房东手机号">
        <Input :style="{width:'200px'}" placeholder="请输入房东手机号" />&nbsp;
      </FormItem>
      <FormItem field="title" label="真实姓名">
        <Input :style="{width:'200px'}" placeholder="请输入真实姓名" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </FormItem>
      <FormItem field="title" label="身份证号">
        <Input :style="{width:'200px'}" placeholder="请输入18位身份证号码" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </FormItem>
      <FormItem field="title" label="身份证照">
        <upload
            list-type="picture-card"
            action="/"
            :default-file-list="fileList"
            image-preview
        />
      </FormItem>
      <FormItem field="title" label="房产证号">
        <Input :style="{width:'300px'}" placeholder="请输入房产证号" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </FormItem>
      <FormItem field="title" label="截止日期">
        <date-picker style="width: 200px;" placeholder="请选择截止日期" />
      </FormItem>
      <FormItem field="title" label="房产证照">
        <upload
            list-type="picture-card"
            action="/"
            :default-file-list="fileList"
            image-preview
        />
      </FormItem>
    </Form>
  </Card>
</template>
<script>
import {Card, Form, FormItem, Input,RangePicker,DatePicker,Upload} from "@arco-design/web-vue";

export default {
  name: "house-landlord-info",
  components: {Card, Form, FormItem,Input,RangePicker, DatePicker,Upload},
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
