<template>
  <Card title="房屋照片" style="margin-bottom: 10px;">
    <Form :model="form_data" :style="{ width: '680px', marginTop: '20px' }">
      <FormItem field="title" label="封面">
        <upload
            list-type="picture-card"
            action="/"
            :default-file-list="fileList"
            image-preview
        />
      </FormItem>
      <FormItem field="community" label="照片">
        <upload
            list-type="picture-card"
            action="/"
            :default-file-list="fileList"
            image-preview
        />
      </FormItem>
      <FormItem field="community" label="全景VR">
        <Input :style="{width:'100%'}" />
      </FormItem>
    </Form>
  </Card>
</template>

<script>
import {Card, Form, FormItem, Input,Upload} from "@arco-design/web-vue";
import {ref} from 'vue';

export default {
  name: "house-photos",
  components: {
    Card,
    Upload,
    Form,
    FormItem,
    Option,
    Input
  },
  setup() {
    const form_data = ref({});
    const status = ref(true)
    const fileList = [
      {
        uid: '-2',
        name: '20200717-103937.png',
        url: 'https://pic.tujia.com/upload/landlordunit/day_240419/thumb/202404191714156824_700_467.jpg',
      },
      {
        uid: '-1',
        name: 'hahhahahahaha.png',
        url: 'https://pic.tujia.com/upload/landlordunit/day_240419/thumb/202404191714156824_700_467.jpg',
      },
    ];
    return {
      form_data,
      status,
      fileList
    }
  }
}
</script>

<style scoped>

</style>
