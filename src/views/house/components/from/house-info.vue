<template>
  <Card style="margin-bottom: 15px;" title="房屋信息">
    <div class="flex justify-between">
      <div>
        <Form :model="form_data" :auto-label-width="true">
          <FormItem field="title" label="标题"
                    :validate-status="status" feedback>
            <Input v-model="form_data.name" placeholder="请输入标题"/>
          </FormItem>
          <FormItem field="community" label="小区"
                    :validate-status="status" feedback>
            <Input v-model="form_data.name" placeholder="请输入小区"/>
          </FormItem>
          <FormItem field="community" label="门牌号"
                    :validate-status="status" feedback>
            <Input v-model="form_data.name" placeholder="请输入门牌号"/>
          </FormItem>
          <FormItem field="community" label="户型">
            <input-number :style="{width:'80px'}"/>&nbsp;室 &nbsp;&nbsp;
            <input-number :style="{width:'80px'}"/>&nbsp;厅 &nbsp;&nbsp;
            <input-number :style="{width:'80px'}"/>&nbsp;卫
          </FormItem>
          <FormItem field="community" label="面积">
            <input-number :style="{width:'80px'}"/>&nbsp;m²
          </FormItem>
          <FormItem field="community" label="楼层">
            <input-number :style="{width:'80px'}"/>&nbsp;层&nbsp;&nbsp;&nbsp;
            总&nbsp;<input-number :style="{width:'80px'}"/>&nbsp;层
          </FormItem>
          <FormItem field="community" label="朝向">
            <input-number :style="{width:'80px'}"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            装修&nbsp;<input-number :style="{width:'80px'}"/>&nbsp;层
          </FormItem>
          <FormItem field="community" label="房屋设施">
            <div>
              <a-checkbox v-for="item in facilitys">{{ item.name }}</a-checkbox>
            </div>
          </FormItem>
          <FormItem field="community" label="家具描述">
            <a-textarea placeholder="详细描述家具设备和数量，如：空调3台" allow-clear/>
          </FormItem>
          <FormItem field="community" label="房屋特色">
            <div>
              <a-checkbox v-for="item in features">{{ item.name }}</a-checkbox>
            </div>
          </FormItem>
          <div class="flex">
            <FormItem field="community" label="水费">
              <input-number :style="{width:'80px'}"/>&nbsp;（元/吨） &nbsp;&nbsp;
            </FormItem>
            <FormItem field="community" label="电费">
              <input-number :style="{width:'80px'}"/>&nbsp;（元/度） &nbsp;&nbsp;
            </FormItem>
          </div>
          <div class="flex">
            <FormItem field="community" label="煤气费">
              <input-number :style="{width:'80px'}"/>&nbsp;（元/立方）
            </FormItem>
            <FormItem field="community" label="物业费">
              <input-number :style="{width:'80px'}"/>&nbsp;（元/月）
            </FormItem>
          </div>
          <FormItem field="community" label="其他费用">
            <input-number :style="{width:'80px'}"/>&nbsp;（元/月）
          </FormItem>
        </Form>
      </div>
      <div class="w-1/2 h-full">
           <house-map></house-map>
      </div>
    </div>
  </Card>
</template>

<script>
import {Card, Form, FormItem, Input, InputNumber, Select, Option} from "@arco-design/web-vue";
import {ref} from 'vue';
import HouseMap from "@/views/house/components/from/map.vue";

export default {
  name: "house-info",
  components: {
    HouseMap,
    Card,
    Form,
    FormItem,
    Select,
    Option,
    InputNumber,
    Input
  },
  setup() {
    const form_data = ref({});
    const status = ref(true)
    const facilitys = ref([
      {name: "床"},
      {name: "吹风机"},
      {name: "有电梯"},
      {name: "独立卫生间"},
      {name: "离地铁近"},
    ])
    const features = ref([
      {name: "首次出租"},
      {name: "首次出租"},
      {name: "首次出租"},
      {name: "首次出租"},
      {name: "首次出租"},
      {name: "首次出租"},
    ])
    return {
      form_data,
      status,
      facilitys,
      features
    }
  }
}
</script>

<style scoped>

</style>
