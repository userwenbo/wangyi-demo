import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import classify from './modules/classify'
import home from './modules/home'
import find from './modules/find'
import shopCart from './modules/shopCart'
import personal from './modules/personal'

Vue.use(Vuex)

export default new Vuex.Store({
   actions,
   getters,
   mutations,
   modules:{
     home,
     classify,
     find,
     shopCart,
     personal
   }
})