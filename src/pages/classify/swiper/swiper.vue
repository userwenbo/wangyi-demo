<template>
      
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
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

<style lang="stylus" rel="stylesheet/stylus">
        // .swiper-container 
        //     width: 264px
        //     height: 96px
        //     img 
        //       width 100%
        //       height 100%
        //     .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
        //       width 100%
        //       height 2px
        //       bottom 25px
        //       .swiper-pagination-customs
        //         display block
        //         width 20px
        //         height 2px
        //         display inline-block
        //         margin-right 5px
        //         background-color rgba(255, 255, 255, .5)
        //       .swiper-pagination-customs-active
        //         width 20px
        //         height 2px
        //         display inline-block
        //         border-radius 2px
        //         background-color #b4282d
 
</style>
