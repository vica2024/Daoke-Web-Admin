import axios from 'axios';
import qs from 'query-string';

export function queryHouseList(params) {
  return axios.get('/api/house/list', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function queryOperatorData(params) {
  return axios.get('/api/house/price-list', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}
