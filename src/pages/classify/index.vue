<template>
  <div class="classify common">
       <div class="header">
           <div class="searchInput" @click="$router.push('/search')">
                <i class="iconfont icon-sousuo find"></i>
                <span class="placeholder">搜索商品，共xxxxx款好物</span>
          </div>
       </div>
       <div class="searchContent">
           <div class="search-left">
               <ul class="searchList">
                  <li class="searchItem" :class="{'active':index===current}" @click="checkout(index)" v-for="(categoryItem,index) in category.categoryL1List" :key="index">
                      <span>{{categoryItem.name}}</span>
                  </li>
               </ul>
           </div>
           <div class="search-right">
            <div class="name">
        <div class="swiper-container">
          <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
          </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      </div>
            <div class="shopInfo">
                 <ul class="shopInfoList" v-if="categoryList[current]">
                  <li class="shopInfoItem" v-for="(categoryItem,index) in categoryList[current].subCateList" :key="index">
                  <img v-lazy="categoryItem.wapBannerUrl" :src="categoryItem.wapBannerUrl" alt="">
                  <span class="text">{{categoryItem.name}}</span>
                 </li>
                </ul>  
          </div>
        </div>

        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "better-scroll";
  import Swiper from 'swiper'   
  import 'swiper/css/swiper.min.css'
  import {mapState} from "vuex";
  import axios from "axios";
  // import BScroll from '@better-scroll/core'
  export default {
     data(){
        return {
          current:0,
          isShowList:false
        }
     },
     methods:{
       checkout(index){
         this.current=index
       }
     },
     computed:{
       ...mapState({
         category:state=>state.category.category,
         categoryList:state=>state.categorylist.categoryList
       })
     },
     async mounted(){
      this.$store.dispatch('reqcategory')
      this.$store.dispatch('reqcategorylist')
      // const res= await axios ({
      //   url:"/category"
      // })
      // console.log("res",res)
      this.$nextTick(()=>{
         let scroll = new BScroll(".search-left",{
             scrollY:true,
             click:true
         })
       })
       this.$nextTick(()=>{
         let scroll = new BScroll(".search-right",{
             scrollY:true,
             click:true
         })
       })
     var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
         autoplay:true, 
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
            autoplayDisableOnInteraction : true,
            renderCustom: function (swiper, current, total) {
              var paginationHtml = " ";
              for (var i = 0; i < total; i++) {
                // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                if (i === (current - 1)) {
                  paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                }else{
                  paginationHtml += '<span class="swiper-pagination-customs"></span>';
                }						  
              }
              return paginationHtml;
            },
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
     .classify
        .header
          position fixed
          left 0
          top 0
          height 44px
          width 100%
          display flex
          justify-content center
          align-items center
          z-index 4
          background #fff
         .searchInput
            width 345px 
            height 28px
            border-radius 5px
            border none
            background-color rgba(0,0,0,.1)
            text-align center
            line-height 28px
            justify-content center
            .find
              font-size 20px
              margin-right 5px
              vertical-align middle
            .placeholder
              font-size 14px
              color #666 
              vertical-align middle
        .searchContent 
          padding-top 44px
          box-sizing border-box
          display flex
          justify-content space-between
          width 100%
          height 100%
          .search-left
            padding 20px 0
            box-sizing border-box
            display flex
            .searchList 
              display flex
              flex-direction column
              flex none
              height 800px
              .searchItem  
                width 81px 
                height 25px
                text-align center
                line-height 25px
                font-size 14px
                margin-top 20px
                &:nth-child(1)
                  margin-top 0
                &.active
                  color #b4282d
                  border-left 2px solid #b4282d
          .search-right
             padding 10px
             box-sizing border-box
            .swiper-container 
              width: 264px
              height: 96px
            img 
              width 100%
              height 100%
          >>>.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
              width 100%
              height 2px
              bottom 25px
              .swiper-pagination-customs
                display block
                width 20px
                height 2px
                display inline-block
                margin-right 5px
                background-color rgba(255, 255, 255, .5)
              .swiper-pagination-customs-active
                width 20px
                height 2px
                display inline-block
                border-radius 2px
                background-color #b4282d 
            .name
              height 624px
              width 100%     
              .shopInfo
                padding-top 15px
                box-sizing border-box
                .shopInfoList
                  display flex
                  flex-wrap wrap
                  .shopInfoItem
                    display flex
                    flex-direction column
                    font-size 12px
                    justify-content center
                    align-items center
                    margin-right 17px
                    img 
                      width 72px
                      height 72px
                    .text
                      text-align center
                      max-width 72px
 
              
</style>
