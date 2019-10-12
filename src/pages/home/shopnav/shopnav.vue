<template>
<div class="nav">
  <div class="nav-top">
        <span class="text">网易自营品牌</span>                                                   
        <span class="text">30天无忧退货</span>      
        <span class="text">48小时快速退款</span> 
  </div>
  <div class="nav-content">
      <ul class="navList" v-if="homeData.kingKongModule">
        <li class="navItem" v-for="(item,index) in homeData.kingKongModule.kingKongList">
          <img :src="item.picUrl">
          <span>{{item.text}}</span>
        </li>
      </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
 import {mapState} from 'vuex'
  export default {
    computed:{
       ...mapState({
          homeData:state=>state.home.homeData
       })
     },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
     @import "../../../assets/mixins.styl"
        .nav
          .nav-top
             display flex
             height 36px
             line-height 36px
             justify-content space-around
             .text
               font-size 12px  
          .nav-content
             .navList
               display flex
               flex-wrap wrap
              .navItem 
                 display flex
                 flex-direction column
                 justify-content center
                 align-items center
                 font-size 12px
                 width 55px
                 height 78px
                 margin 5px 10px 4px 10px
                 img 
                   width 55px
                   height 55px

 
</style>
