<template>
  <div class="home common active">
      <div class="home-content"> 
          <Swiper/>
          <ShopNav/>
          <ShopContent/>
          <HomeFooter/>
      </div>
      <Header/> 
</div>    
</template>

<script type="text/ecmascript-6">
  import {mapState} from "vuex";
  import Header from './header/header'
  import Swiper from './swiper/swiper'
  import ShopNav from './shopnav/shopnav'
  import ShopContent from './shopContent/shopContent'
  import HomeFooter from './homefooter/homefooter'
  
  // import BScroll from '@better-scroll/core'
  import BScroll from "better-scroll";
  export default {
     components:{
       Header,
       Swiper,
       ShopNav,
       ShopContent,
       HomeFooter
     },
     data(){
       return{
         
       }
     },
     computed:{
       ...mapState({
          homeData:state=>state.home.homeData
       })
     },
     mounted(){
      this.$store.dispatch('reqhomeData')  

      this.$nextTick(()=>{
         let scroll = new BScroll(".home",{
             scrollY:true,
             click:true
         })
       })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/mixins.styl"
    .home
      position relative
      padding-top 74px 
      width 100%
      height 100%
      .home-content
        padding-top 74px
        padding-bottom 180px
</style>
