import axios from 'axios'

export function multiRequest(urls, maxNum) {
  const ret = [];
  let i = 0;
  let resolve;
  const promise = new Promise(r => resolve = r);
  const addTask = () => {
    if (i >= urls.length) {
      return resolve();
    }

    const task = request(urls[i++]).finally(() => {
      addTask();
    });
    ret.push(task);
  }

  while (i < maxNum) {
    addTask();
  }

  return promise.then(() => Promise.all(ret));
}

const request = (configs) => {
  const params = {
    key: '5b1cac64c76e701dcaf6aea6605118f8',
    city: '上海市',
    address: configs.map(item => `上海市${item}`).join('|'),
    batch: true,
    city_limit: true
  }
  return axios.get(`https://restapi.amap.com/v3/geocode/geo`, {
    params,
  }).then(res => res.data);
}

export const getNewArray = (arr, size) => {
  const arrNum = Math.ceil(arr.length / size);
  let index = 0; // 定义初始索引
  let resIndex = 0; // 用来保存每次拆分的长度
  const result = [];
  while (index < arrNum) {
    result[index] = arr.slice(resIndex, size + resIndex);
    resIndex += size;
    index++;
  }
  return result;
}