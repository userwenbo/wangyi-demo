/* 使用mockjs定义mock接口的模块 */

import Mock from 'mockjs'
import category from './category.json'
import homeData from './homeData.json'
import categoryList from './categoryList.json'



//定义mock接口
Mock.mock('/api/homedata',{code:0,data:homeData})
Mock.mock('/api/category',{code:0,data:category})
Mock.mock('/api/categorylist',{code:0,data:categoryList})