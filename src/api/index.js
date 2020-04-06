// 所有的接口请求

import ajax from './ajax.js'
const BASE_URL=''

// 首页获取数据的接口
export const reqTrendsList = () => ajax(`${BASE_URL}/data/TrendsList.json`)
// 首页获取数据的接口
export const reqTrend = () => ajax(`${BASE_URL}/data/TrendsList.json`)