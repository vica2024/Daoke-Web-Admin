<template>
  <div class="container">
    <Breadcrumb :items="['menu.profile', 'menu.profile.basic']" />
    <a-space direction="vertical" :size="16" fill>
      <a-card class="general-card" :title="$t('basicProfile.title.form')">
        <template #extra>
          <a-space>
            <a-button>{{ $t('basicProfile.cancel') }}</a-button>
            <a-button type="primary">
              {{ $t('basicProfile.goBack') }}
            </a-button>
          </a-space>
        </template>
        <a-steps v-model:current="step" line-less class="steps">
          <a-step>{{ $t('basicProfile.steps.commit') }}</a-step>
          <a-step>{{ $t('basicProfile.steps.approval') }}</a-step>
          <a-step>{{ $t('basicProfile.steps.finish') }}</a-step>
        </a-steps>
      </a-card>
      <a-card class="general-card">
        <ProfileItem :loading="loading" :render-data="currentData" />
      </a-card>
      <a-card class="general-card">
        <ProfileItem :loading="preLoading" type="pre" :render-data="preData" />
      </a-card>
      <OperationLog />
    </a-space>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { queryProfileBasic } from '@/api/profile';
  import ProfileItem from './components/profile-item.vue';
  import OperationLog from './components/operation-log.vue';

  const { loading, setLoading } = useLoading(true);
  const { loading: preLoading, setLoading: preSetLoading } = useLoading(true);
  const currentData = ref({});
  const preData = ref({});
  const step = ref(1);
  const fetchCurrentData = async () => {
    try {
      const { data } = await queryProfileBasic();
      currentData.value = data;
      step.value = 2;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const fetchPreData = async () => {
    try {
      const { data } = await queryProfileBasic();
      preData.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      preSetLoading(false);
    }
  };
  fetchCurrentData();
  fetchPreData();
</script>

<script >
  export default {
    name: 'Basic',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  .steps {
    max-width: 548px;
    margin: 0 auto 10px;
  }
</style>
