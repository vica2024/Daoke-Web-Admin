<script setup>
import {reactive, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import HouseItems from "@/views/house/components/houseItems.vue";

const {t} = useI18n();

const searchFormModel = reactive({
  keyWord: '',
  address: '',
  rent: null,
  status: null,
});


const buttonStates=ref([{
  label:"全部",
  value:0
},{
  label:"待出租",
  value:1
},{
  label:"已出租",
  value:2
},{
  label:"已到期",
  value:3
},{
  label:"已下架",
  value:4
}])
const houseList = ref([{
  title: "房源标题",
  tags: ['¥ 1200.00','三室一厅','68m²'],
  state: 0,
  address: null
},  {
  title: "房源标题",
  tags: ['¥ 1200.00','三室一厅','68m²'],
  state: 0,
  address: null
}])

const contentTypeOptions = [
  {label: t('house.form.rent.option1'), value: 'option1'},
  {label: t('house.form.rent.option2'), value: 'option2'},
  // Add more options as needed
];

const statusOptions = [
  {label: t('house.form.status.option1'), value: 'option1'},
  {label: t('house.form.status.option2'), value: 'option2'},
  // Add more options as needed
];

const fetchTableData = () => {

  // Add your API call logic here
};

const resetFn = () => {
  searchFormModel.keyWord = '';
  searchFormModel.address = '';
  searchFormModel.rent = null;
  searchFormModel.status = null;

};
</script>

<template>
  <div>
    <div class="p-5 bg-white mb-5">
      <a-row>
        <a-col :flex="1">
          <a-form :model="searchFormModel" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }"
                  label-align="right">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="keyWord" :label="$t('house.form.keyWord')">
                  <a-input
                      v-model="searchFormModel.keyWord"
                      :placeholder="$t('house.form.keyWordPlaceholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="address" :label="$t('house.form.address')">
                  <a-input
                      v-model="searchFormModel.address"
                      :placeholder="$t('house.form.addressPlaceholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="rent" :label="$t('house.form.rent')">
                  <a-select
                      v-model="searchFormModel.rent"
                      :options="contentTypeOptions"
                      :placeholder="$t('house.form.rent')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="status" :label="$t('house.form.status')">
                  <a-select
                      v-model="searchFormModel.status"
                      :options="statusOptions"
                      :placeholder="$t('house.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical"/>
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="fetchTableData">
              <template #icon>
                <IconSearch/>
              </template>
              {{ $t("house.form.search") }}
            </a-button>
            <a-button @click="resetFn">
              <template #icon>
                <IconRefresh/>
              </template>
              {{ $t("house.form.reset") }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
    </div>
    <div class="w-full mb-3 flex justify-between">
      <a-button type="primary">采集房源</a-button>
      <a-radio-group type="button" class="bg-white">
        <a-radio v-for="item in buttonStates" :value="item.value">{{ item.label }}</a-radio>
      </a-radio-group>
    </div>
    <div class="w-full">
      <a-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }" :colGap="12" :rowGap="16" class="grid-demo-grid">
        <a-grid-item class="bg-white p-5" v-for="item in houseList">
          <HouseItems :house="item"/>
        </a-grid-item>
      </a-grid>
    </div>
  </div>
</template>

<style scoped lang="less">
/* Add any scoped styles here if needed */
</style>
