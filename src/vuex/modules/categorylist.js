import {reqcategorylist} from "../../api";
import {RECEIVE_CATEGORYLIST} from "../mutations-types";
const state={
  categoryList:{}
}
const actions={
    async reqcategorylist({commit},cb){
     const result = await reqcategorylist()
     if(result.code===0){
        const categoryList = result.data
        commit(RECEIVE_CATEGORYLIST,{categoryList})
          cb&&cb()
     }
  }
}
const mutations={
    [RECEIVE_CATEGORYLIST](state,{categoryList}){
        state.categoryList = categoryList
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