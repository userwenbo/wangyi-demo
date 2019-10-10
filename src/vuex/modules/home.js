import {reqhomeData} from '../../api'
import {RECEIVE_HOMEDATA} from "../mutations-types";

const state={
   homeData:{}
}

const actions={
  async reqhomeData({commit},cb){
     const result=await reqhomeData()
     if(result.code===0){
        const homeData=result.data
        commit(RECEIVE_HOMEDATA,{homeData})
          cb&&cb()
     }
  }
}
const mutations={
   [RECEIVE_HOMEDATA](state,{homeData}){
     state.homeData=homeData
   }
}
const getters={
  
}

export default {
   state,
   mutations,
   actions,
   getters
}