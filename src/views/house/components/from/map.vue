<template>
  <div class="pl-5">
    <a-cascader :options="options" default-value="datunli" expand-trigger="hover" />
    <p class="pt-5 text-sm">
      地址：{{ address }}
    </p>
    <div id="map" class="float-right mt-5" style="width: 100%; height: 620px;"></div>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref} from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';
export default defineComponent({
  name: 'MapComponent',
  setup() {
    const options = [
      {
        value: 'beijing',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'ChaoYang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
          {
            value: 'haidian',
            label: 'Haidian',
          },
          {
            value: 'dongcheng',
            label: 'Dongcheng',
          },
          {
            value: 'xicheng',
            label: 'Xicheng',
            children: [
              {
                value: 'jinrongjie',
                label: 'Jinrongjie',
              },
              {
                value: 'tianqiao',
                label: 'Tianqiao',
              },
            ],
          },
        ],
      },
      {
        value: 'shanghai',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ];
    const address = ref('广州市天河区')
    onMounted(() => {
      AMapLoader.load({
        key: 'e52041e2fb830dd68740d5194f18b9f6', // 替换为你的API密钥
        version: '2.0',
        plugins: ['AMap.Marker'], // 根据需要加载插件
      }).then((AMap) => {
        const map = new AMap.Map('map', {
          center: [116.397428, 39.90923], // 设置地图中心点
          zoom: 5, // 设置缩放级别
        });
        // 添加标记等其他功能
        const marker = new AMap.Marker({
          position: new AMap.LngLat(116.397428, 39.90923),
        });
        marker.setMap(map);
      }).catch((e) => {
        console.error(e);
      });
    });

    return {
      options,
      address
    }
  },
});
</script>

<style scoped>

</style>
