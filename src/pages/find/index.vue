<template>
    <div class="find common">
      <div class="header">
        <i class="iconfont icon-home"></i>
        <div class="title">
           <span class="active">发现</span>
           <span>甄选家</span>
        </div>
        <div class="icon-right">
           <i class="iconfont icon-sousuo"></i>
           <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
      <div class="find-wrap">
         <div class="find-nav">
            <ul class="navList">
              <li class="navItem active"><span>推荐</span></li>
              <li class="navItem"><span>好货内部价</span></li>
              <li class="navItem"><span>晒单</span></li>
              <li class="navItem"><span>选购指南</span></li>
              <li class="navItem"><span>回购榜</span></li>
              <li class="navItem"><span>达人</span></li>
              <li class="navItem"><span>HOME</span></li>
            </ul>
         </div>
         <div class="find-contnet">
            <ul class="find-list">
                <li class="findItem">
                   <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                </li>
                <li class="findItem xuanmei">
                   <div class="name">
                     <img class="titleImg" src="https://yanxuan.nosdn.127.net/daa4738f9298731c301e71214c754244.png?imageView&quality=65&thumbnail=56y56" alt="">
                     <span>选妹</span>
                   </div>
                    <p class="title">时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</p>
                   <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                   <span class="see">90%的人看过</span>
                </li>
                 <li class="findItem xuanmei">
                   <div class="name">
                     <img class="titleImg" src="https://yanxuan.nosdn.127.net/daa4738f9298731c301e71214c754244.png?imageView&quality=65&thumbnail=56y56" alt="">
                     <span>选妹</span>
                   </div>
                    <p class="title">时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</p>
                   <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                   <span class="see">90%的人看过</span>
                </li>
                 <li class="findItem xuanmei">
                   <div class="name">
                     <img class="titleImg" src="https://yanxuan.nosdn.127.net/daa4738f9298731c301e71214c754244.png?imageView&quality=65&thumbnail=56y56" alt="">
                     <span>选妹</span>
                   </div>
                    <p class="title">时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</p>
                   <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                   <span class="see">90%的人看过</span>
                </li>
                 <li class="findItem xuanmei">
                   <div class="name">
                     <img class="titleImg" src="https://yanxuan.nosdn.127.net/daa4738f9298731c301e71214c754244.png?imageView&quality=65&thumbnail=56y56" alt="">
                     <span>选妹</span>
                   </div>
                    <p class="title">时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</p>
                   <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                   <span class="see">90%的人看过</span>
                </li>
                 <li class="findItem xuanmei">
                   <div class="name">
                     <img class="titleImg" src="https://yanxuan.nosdn.127.net/daa4738f9298731c301e71214c754244.png?imageView&quality=65&thumbnail=56y56" alt="">
                     <span>选妹</span>
                   </div>
                    <p class="title">时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</p>
                   <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                   <span class="see">90%的人看过</span>
                </li>
            </ul>
         </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../assets/mixins.styl"
    .find
       background #f4f4f4
       width 100%
       height 100%
       padding-top 50px
       box-sizing border-box
      .header 
        width 100%
        height 50px
        display flex
        justify-content space-between
        padding 0 15px
        box-sizing border-box
        align-items center
        border-1px(gray,bottom)
        background #fff
        z-index 2
        position fixed
        left 0
        top 0   
        .title
          width 160px
          height 100%
          color #7F7F7F
          display flex
          justify-content center
          align-items center
          span 
            font-size 14px
            &:nth-child(1)
              margin-right 5px
            &:nth-child(2)
              margin-left 5px
            &.active
              color #B4282D
              font-size 20px
              font-weight bold    
        i 
          font-size 30px
      .find-wrap
        // padding 0 10px
        width 100%
        height 100%
        .find-nav   
          width 100%
          height 36px
          font-size 14px
          color #7F7F7F
          position fixed
          left 0
          top 50px
          background #fff
          .navList
            width 1000px
            height 100%
            display flex
            align-items center
            flex none
            .navItem
              margin 0 10px
              padding 0 4px
              height 100%
              line-height 36px
              box-sizing border-box
              &.active
                color #B4282D
                border-bottom 2px solid #B4282D 
        .find-contnet
          padding-top 36px
          box-sizing border-box 
          width 100%
          .find-list
             width 100%
            .findItem
              background #fff
              width 100%
              padding 18px 15px
              box-sizing border-box
              margin 12px 0 
              img 
                width 345px
                height 183px       
              &.xuanmei
                .name
                  display flex
                  font-size 15px
                  .titleImg 
                   width 27px 
                   height 27px
                   display block
                   border-radius 50%
                   margin-right 5px
                .title
                  font-size 20px
                  margin-bottom 10px 
                  margin-top 10px 
                .see
                  display block
                  font-size 12px 
                  margin-top 10px  
 
</style>
