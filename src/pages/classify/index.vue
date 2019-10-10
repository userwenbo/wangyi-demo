<template>
  <div class="classify common">
       <div class="header">
           <div class="searchInput">
                <i class="iconfont icon-sousuo find"></i>
                <span class="placeholder">搜索商品，共xxxxx款好物</span>
          </div>
       </div>
       <div class="searchContent">
           <div class="search-left">
               <ul class="searchList">
                  <li class="searchItem active">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
                  <li class="searchItem">
                      <span>推荐专区</span>
                  </li>
               </ul>
           </div>
           <div class="search-right">
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
             <ul class="shopInfoList">
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
               <li class="shopInfoItem">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <span class="text">明星商品低至69元</span>
               </li>
             </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import BScroll from "better-scroll";
  // import BScroll from '@better-scroll/core'
  export default {
     mounted(){
      this.$nextTick(()=>{
         let scroll = new BScroll(".search-left",{
             scrollY:true,
             click:true
         })
       })
      //  new BScroll(".search-left", {click: true, scrollX: true})
      //  new BScroll(".search-right", {click: true, scrollX: true})
       var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
            autoplayDisableOnInteraction : false,
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
            .searchList
               height 2000px
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
            >>>.swiper-container 
                  width: 264px
                  height: 96px
                  img 
                    width 100%
                    height 100%
                  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
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
