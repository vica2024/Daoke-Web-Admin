import axios from 'axios';
// import type { TableData } from '@arco-design/web-vue/es/table/interface';

// export interface ContentDataRecord {
//   x: string;
//   y: number;
// }

export function queryContentData() {
  return axios.get('/api/content-data');
}

// export interface PopularRecord {
//   key: number;
//   clickNumber: string;
//   title: string;
//   increases: number;
// }

export function queryPopularList(params) {
  return axios.get('/api/popular/list', { params });
}
