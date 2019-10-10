<template>
  <div class="home common active">
      <div class="mask" v-show="isShowTab"></div>
      <div class="header">
        <div class="header-top">
            <a href="javascript:" class="logo">
                <img
                  src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
                  alt="logo"/>
            </a>  
            <div class="searchInput">
                <i class="iconfont icon-sousuo find"></i>
                <span class="placeholder">搜索商品，共xxxxx款好物</span>
            </div>
            <button>登录</button>
        </div>
        <div class="header-bottom wrapper" v-show="!isShowTab" ref="top">
            <ul>
              <li class="item on">
                <span>推荐</span>
              </li>
              <li class="item">
                <span>居家生活</span>
              </li>
              <li class="item">
                <span>居家生活</span>
              </li>
              <li class="item">
                <span>居家生活</span>
              </li>
              <li class="item">
                <span>服饰鞋包</span>
              </li>
              <li class="item">
                <span>美食酒水</span>
              </li>
              <li class="item">
                <span>个人清洁</span>
              </li>
              <li class="item">
                <span>个人清洁</span>
              </li>
              <li class="item">
                <span>个人清洁</span>
              </li>                                                       
            </ul>
        </div>  
        <div class="toggleWrap">
                <i class="iconfont icon-toTop" @click="toggle" :class="[isShowTab?'icon-toTop':'icon-toBottom']"></i>
        </div>
        <div class="tabWrap" v-show="isShowTab">
            <div class="tabWrap-nav">
              <span>全部频道</span>
            </div>
            <div class="tabWrap-list">
              <ul>
                <li class="item">
                  <span>推荐</span>
                </li>
                <li class="item">
                  <span>居家生活</span>
                </li>
                <li class="item">
                  <span>服饰鞋包</span>
                </li>
                <li class="item">
                  <span>美食酒水</span>
                </li>
                <li class="item">
                  <span>个人清洁</span>
                </li>
              </ul>
            </div>
        </div> 
      </div>
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集">
            </div>
            2
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

        <div class="nav">
            <div class="nav-top">
                  <span class="text">网易自营品牌</span>                                                   
                  <span class="text">30天无忧退货</span>      
                  <span class="text">48小时快速退款</span> 
            </div>
            <div class="nav-content">
                <ul class="navList">
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                  <li class="navItem">
                    <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png">
                    <span>居家</span>
                  </li>
                </ul>
            </div>
        </div>
        <div class="newPerson">
          <div class="head">
            <span>- 新人专享礼 -</span>
          </div> 
          <div class="newPerson-content">
            <div class="newPerson-left">
              <span>新人专享礼包</span>
              <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"/>
              </div>
              <div class="newPerson-right">
              <div class="minImg">
                  <div class="title">
                      <span>福利社</span>
                      <span>今日特价</span>
                  </div>
                  <img src="https://yanxuan-item.nosdn.127.net/eddaeb4852b8a4732102eab839641c95.png?imageView&thumbnail=200x200&quality=75">
              </div>
              <div class="minImg orgin">
                  <div class="title">
                    <span>新人拼团</span>
                    <span>1元起包邮</span>
                    <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75">
                  </div>
              </div>
          </div>
          </div>
          
          
        </div>
        <div class="content-d">
          <div class="title-head">
            <span>品牌制造商直供</span>
            <span>更多></span>
          </div>
          <ul class="content-list">
            <li class="contentItem">
                <span>海外制造商</span>
                <span>9.9元起</span>
            </li>
            <li class="contentItem">
                <span>CK制造商</span>
                <span>29.9元起</span>
            </li>
            <li class="contentItem">
                <span>新秀丽制造商</span>
                <span>159元起</span>
            </li>
            <li class="contentItem">
                <span>Armaniu制造商</span>
                <span>199元起</span>
            </li>
          </ul>
          
        </div>
        <div class="content-d">
          <div class="title-head">
            <span>品牌制造商直供</span>
            <span>更多></span>
          </div>
          <ul class="content-list">
            <li class="contentItem">
                <span>海外制造商</span>
                <span>9.9元起</span>
            </li>
            <li class="contentItem">
                <span>CK制造商</span>
                <span>29.9元起</span>
            </li>
            <li class="contentItem">
                <span>新秀丽制造商</span>
                <span>159元起</span>
            </li>
            <li class="contentItem">
                <span>Armaniu制造商</span>
                <span>199元起</span>
            </li>
          </ul>
          
        </div>
        <div class="content-d">
          <div class="title-head">
            <span>品牌制造商直供</span>
            <span>更多></span>
          </div>
          <ul class="content-list">
            <li class="contentItem">
                <span>海外制造商</span>
                <span>9.9元起</span>
            </li>
            <li class="contentItem">
                <span>CK制造商</span>
                <span>29.9元起</span>
            </li>
            <li class="contentItem">
                <span>新秀丽制造商</span>
                <span>159元起</span>
            </li>
            <li class="contentItem">
                <span>Armaniu制造商</span>
                <span>199元起</span>
            </li>
          </ul>
          
        </div>
        <div class="content-footer">
            <div class="row">
              <button>下载App</button>
              <button>电脑版</button>
            </div>
            <div class="info">
              <span>网易公司版权所有 © 1997-2019</span>
              <span>食品经营许可证：JY13301080111719</span>
            </div>
        </div>
    </div>  
         
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  // import BScroll from '@better-scroll/core'
  import BScroll from "better-scroll";
  export default {
     data(){
       return{
         isShowTab:false
       }
     },
     created(){
  
     },
     mounted(){
      this.$nextTick(()=>{
         let scroll = new BScroll(".header-bottom",{
             scrollX:true,
             click:true
         })
       })
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
    },
    methods:{
      toggle(){
         this.isShowTab=!this.isShowTab
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/mixins.styl"
    .home
      padding-top 74px 
      width 100%
      height 100%
      .mask
        width 100%
        height 100%
        position absolute
        z-index 3
        left 0
        top 0
        background rgba(0,0,0,.5)
      .header
        width: 100%
        height 74px
        position fixed
        left 0
        top 0
        z-index 4
        background-color  #fff
        .header-top
          display flex
          position relative
          padding 8px 15px 8px 15px
          box-sizing border-box
          .logo
            width 69px
            height 20px
            img 
              width 100%
              height 100%        
          .searchInput
            width 243px 
            height 28px
            border-radius 5px
            border none
            background-color rgba(0,0,0,.1)
            text-align center
            line-height 28px
            margin -3px 5px 0 5px
            .find
              font-size 15px
            .placeholder
              font-size 15px
              color #666  
          button 
            width 40px
            height 20px
            margin-left 5px
            font-size 12px
            border-radius 5px
            outline none
            color #b4282d
            border 1px solid #b4282d
            background-color #fff  
        .header-bottom
          font-size 16px
          width 250px
          height  30px
          // white-space nowrap
          display flex
          // padding 0 15px 0 5px
          // box-sizing border-box
          // overflow hidden
          ul
            display flex
            flex-wrap nowrap
            height 30px
            margin-left 5px
            overflow hidden 
            // width 2000px
            flex-shrink: 0;
            .item
              height 30px
              // box-sizing border-box
              // display inline-block
              min-width 68px
              flex-shrink: 0;
              text-align center
              line-height 30px
              font-size 13px
              // margin-right 20px
              &.on
                border-bottom 3px solid #b4282d
        .toggleWrap
            position absolute
            right 0
            bottom 0
            width 100px
            z-index 3
            background #fff
            text-align center
            line-height 30px
            .iconfont
               font-size 24px        
        .tabWrap
          background #fff 
          border-1px(gray, top)
          padding 0 15px 0 15px
          box-sizing border-box
          .tabWrap-nav
            display flex
            justify-content space-between
            align-items center
            height 30px
            font-size 12px
            .icon-toTop
              width 20%
              font-size 24px
              text-align center
          .tabWrap-list
            ul
              display flex
              flex-wrap wrap 
              width 100%
              padding-top 12px
              box-sizing border-box
              .item
                border 1px solid#ccc
                text-align center
                line-height 28px
                width 75px
                height 28px
                border-radius 5px
                margin-bottom 20px
                margin-left 15px
                font-size 12px
      >>>.swiper-container 
          width: 375px
          height: 195px
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
                 width 55px
                 height 78px
                 margin 5px 10px 4px 10px
                 img 
                   width 55px
                   height 55px 
        .newPerson
          padding 0 15px 0 15px
          box-sizing border-box
          width 100%
          padding-bottom 15px
          margin 10px 0 10px 0
          border-bottom 7px solid rgba(0,0,0,.1) 
          border-top 7px solid rgba(0,0,0,.1)
          box-sizing border-box 
          .head
            text-align center
            width 100%
            height 45px
          .newPerson-content
            display flex
            justify-content space-between
            .newPerson-left
              width 171px
              height 217px
              text-align center
              background #F9E9CF
              display flex
              flex-direction column
              align-items center
              justify-content center
              span 
                padding 0px 25px 25px 0px
              img 
                width 129px
                height 129px
            .newPerson-right
                display flex
                flex-direction column
                justify-content space-between
                .minImg
                  display flex
                  padding 10px 0 0 15px
                  box-sizing border-box
                  height 106px
                  width 200px
                  background #FBE2D3
                  position relative
                  .title
                    display flex
                    flex-direction column
                  img 
                    width 100px
                    height 100px
                    position absolute
                    right 0
                    bottom 0
                  &.orgin
                    background #FFECC2
        .content-d
           padding 0 15px
           box-sizing border-box
          .title-head
             display flex
             justify-content space-between
          .content-list
             display flex
             flex-wrap wrap
             font-size 12px  
            .contentItem
               width 171px
               height 130px
               display flex
               flex-direction column
               align-items center
               &:nth-child(1)
                  background-image url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
                  background-size 100% 100%
               &:nth-child(2)
                  background-image url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
                  background-size 100% 100%   
               &:nth-child(3)
                  background-image url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
                  background-size 100% 100%          
               &:nth-child(4)
                  background-image url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
                  background-size 100% 100%

          .content-footer
            background #333
            padding 27px 10px 14px 10px
            box-sizing border-box
            .row
              display flex
              justify-content center
              button
                background #333
                color #fff
                width 85px
                height 30px
                border 2px solid #999
                margin-left 10px
                border-radius 5px
            .info
              display flex
              flex-direction column
              font-size 12px
              justify-content center
              align-items center
              color #fff   
 
</style>
