<template>
  <a-modal :visible="props.visible" :width="props.width" :title="modalTitle" draggable title-align="start" :mask-closable="false"
    :on-before-ok="handleOk" @cancel="closeDialog(false)">
    <!--  -->
    <!-- <template #title>
      Title
    </template> -->
    <!-- <template #footer></template> -->
    <a-form ref="dataFormRef" :model="dataForm" :rules="dataFormRules" :disabled="props.openMode === EditModelOpenModeRef.VIEW">
      <a-form-item field="size" label="Form Size">
        <a-radio-group v-model="dataForm.size" type="button">
          <a-radio value="mini">Mini</a-radio>
          <a-radio value="small">Small</a-radio>
          <a-radio value="medium">Medium</a-radio>
          <a-radio value="large">Large</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="name" label="Username">
        <a-input v-model="dataForm.name" placeholder="please enter your username..." />
      </a-form-item>
      <a-form-item field="age" label="Age">
        <a-input-number v-model="dataForm.age" placeholder="please enter your age..." />
      </a-form-item>
      <a-form-item field="section" label="Section">
        <a-select v-model="dataForm.section" placeholder="Please select ..." allow-clear>
          <a-option value="section one">Section One</a-option>
          <a-option value="section two">Section Two</a-option>
          <a-option value="section three">Section Three</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="options" label="Options">
        <a-checkbox-group v-model="dataForm.options">
          <a-checkbox value="option one">Section One</a-checkbox>
          <a-checkbox value="option two">Option Two</a-checkbox>
          <a-checkbox value="option three">Option Three</a-checkbox>
          <a-checkbox value="option four">Option Four</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item field="date" label="Date">
        <a-date-picker v-model="dataForm.date" placeholder="Please select ..." />
      </a-form-item>
      <a-form-item field="time" label="Time">
        <a-time-picker v-model="dataForm.time" placeholder="Please select ..." />
      </a-form-item>
      <a-form-item field="radio" label="Radio">
        <a-radio-group v-model="dataForm.radio">
          <a-radio value="radio one">Radio One</a-radio>
          <a-radio value="radio two">Radio Two</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="slider" label="Slider">
        <a-slider v-model="dataForm.slider" :max="10" />
      </a-form-item>
      <a-form-item field="score" label="Score">
        <a-rate v-model="dataForm.score" allow-clear />
      </a-form-item>
      <a-form-item field="switch" label="Switch">
        <a-switch v-model="dataForm.switch" />
      </a-form-item>
      <a-form-item field="multiSelect" label="Multiple Select">
        <a-select v-model="dataForm.multiSelect" placeholder="Please select ..." multiple>
          <a-option value="section one">Section One</a-option>
          <a-option value="section two">Section Two</a-option>
          <a-option value="section three">Section Three</a-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>

</template>
<script setup>
import { reactive } from 'vue'
import useAddTableRowForm from '@/hooks/useAddTableRowForm.js';
import { EditModelOpenMode } from '@/config/globlaEnum.js'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  openMode: {
    type: Number, // 1 | 2 | 3, // 1新增 2编辑 3查看
    default: EditModelOpenMode.ADD
  },
  editData: {
    type: Object,
    default: () => ({})
  },
  width: {
    type:  [String, Number],
    default: 700
  },
});
const emits = defineEmits(['close']);
const closeDialog = (flag) => {
  emits('close', flag);
}
const EditModelOpenModeRef = reactive({
  ...EditModelOpenMode
})

const generateFormModel = () => ({
  name: null,
  age: null,
  size: 'medium',
  section: null,
  province: null,
  options: [],
  date: null,
  time: null,
  radio: null,
  slider: 0,
  score: 0,
  switch: false,
  multiSelect: [],
});

const {
  modalTitle,
  dataFormRef,
  dataForm,
  validateForm,
} = useAddTableRowForm({
  generateFormModel,
  editData: props.editData,
  openMode: props.openMode,
});


const dataFormRules = {
  name: [
    { required: true, message: 'Please enter your username' },
    { min: 3, max: 5, message: 'Length should be 3 to 5' },
  ],
  age: [
    { required: true, message: 'Please enter your age' },
  ],
  section: [
    { required: true, message: 'Please select your section' },
  ],
}

const handleOk = (done) => {
  // 如果是查看模式，直接关闭
  if (props.openMode === EditModelOpenMode.VIEW) {
    done(true);
    closeDialog(true)
    return
  }
  validateForm().then(() => {
    setTimeout(() => { //假装是你的请求函数
      done(true);
      closeDialog(true)
    }, 3000);
  }).catch(() => {
    done(false);
  })
};
</script>