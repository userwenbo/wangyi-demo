import {reqcategory  } from "../../api";
import { RECEIVE_CATEGORY } from "../mutations-types";
const state={
  category:{}
}
const actions={
    async reqcategory({commit},cb){
     const result = await reqcategory()
     if(result.code===0){
        const category = result.data
        commit(RECEIVE_CATEGORY,{category})
          cb&&cb()
     }
  }
}
const mutations={
    [RECEIVE_CATEGORY](state,{category}){
        state.category=category
    }
}
const getters={
  
}


export default {
  state,
  actions,
  getters,
  mutations
}