<template>
  <div class="personal common">
     <div class="header">
        <i class="iconfont icon-home" @click="$router.replace('/home')"></i>
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="logo">
        <div class="icon-right">
           <i class="iconfont icon-sousuo"  @click="$router.replace('/find')"></i>
           <i class="iconfont icon-gouwuche"  @click="$router.replace('/shopCart')"></i>
        </div>
     </div>
     <div class="wrap">
         <div class="logoImg">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
         </div>
         <div class="button-wrap">
              <div class="button-mobile">
                 <i class="iconfont icon-shouji"></i>
                 <span>手机号快速登录</span>
              </div>
              <div class="button-email">
                  <i class="iconfont icon-youxiang"></i>
                  <span>邮箱账号登录</span>
              </div>
         </div>
         <div class="contact">
             <div class="weixin item">
                <i class="iconfont icon-weixin"></i>
                <span>微信</span>    
             </div>
             <span>|</span>
             <div class="qq item">
                 <i class="iconfont icon-qq"></i>
                 <span>qq</span>
                 
             </div>
             <span>|</span>
             <div class="weibo item">
                 <i class="iconfont icon-weibo"></i>
                 <span>微博</span>
             </div>
         </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     methods:{
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/mixins.styl"
   .personal
      height 100%
      width 100%
      padding-top 40px
      background: #F2F5F4;
      position relative
      box-sizing border-box
      .header 
        width 100%
        height 40px
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
        img 
          width 80px
          height 25px
        i 
          font-size 30px
      
      .wrap
        width 100%
        height 100%
        .logoImg
          width 375px
          height 240px
          text-align center
          img 
            width 134px
            height 45px 
            display inline-block
            vertical-align middle
          &:after
            content:''
            display inline-block
            height 100%
            vertical-align middle
        .button-wrap
          padding 0 20px
          box-sizing border-box
          font-size 15px
          .button-mobile
            width 100%
            height 46px
            background #DD1A21
            color #fff
            border 1px solid #DD1A21 
            border-radius 2px
            text-align center
            line-height 46px
            span 
              margin-left 3px 
          .button-email
            width 100%
            height 46px
            border 1px solid #DD1A21
            border-radius 2px
            margin-top 16px 
            text-align center
            line-height 46px 
            span 
              margin-left 3px
            i 
             color #DD1A21   
        .contact 
          position absolute 
          bottom 40px
          left 0   
          display flex
          justify-content center
          width 100%
          color #7F7F7F
          font-size 14px
          .item
            padding 0 20px
            box-sizing border-box
            span 
             margin-left 4px 
</style>
