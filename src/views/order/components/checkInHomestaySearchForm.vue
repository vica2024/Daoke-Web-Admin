<script setup>
import {useI18n} from "vue-i18n";
import {reactive} from "vue";

const {t} = useI18n();

const searchFormModel = reactive({
  keyWord: '',
  address: '',
  rent: null,
  status: null,
});
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
  <div class="p-5 bg-white mb-5">
    <a-row>
      <a-col :flex="1">
        <a-form :model="searchFormModel" :auto-label-width="true" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }"
                label-align="right">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item field="keyWord" label="房客手机号">
                  <a-input :placeholder="$t('house.form.keyWordPlaceholder')"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="address" label="房源">
                <a-input
                    v-model="searchFormModel.address"
                    :placeholder="$t('house.form.addressPlaceholder')"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="rent" label="订单状态">
                <a-select
                    v-model="searchFormModel.rent"
                    :options="contentTypeOptions"
                    :placeholder="$t('house.form.rent')"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="status" label="服务管家">
                <a-input
                    v-model="searchFormModel.address"
                    :placeholder="$t('house.form.addressPlaceholder')"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item field="status" label="入住日期">
                <a-range-picker
                    show-time
                    :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
                    format="YYYY-MM-DD HH:mm"
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
</template>

<style scoped lang="less">

</style>
