<template>
  <div class="shopCart common">
     <div class="header">
        <span class="cartText">购物车</span>
        <span class="money">领券</span>
     </div>
     <div class="shopCart-wrap">
        <div class="shop-header">
           <span>30天无忧退货</span>
           <span>48小时快速退款</span>
           <span>满80元免邮费</span>
        </div>
        <div class="shopCart-content">
           <div class="shopImg">
              <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png">
              <span>去添点什么吧</span>
           </div>
           <button class="login">
               登录
           </button>
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
     .shopCart
        .header
          height 44px
          display flex
          justify-content space-between
          padding 0 20px
          align-items center
          .cartText
            font-size 18px
          .money
            color #B4282D
        .shopCart-wrap
          width 100%
          height 100% 
          background #f4f4f4
          .shop-header
             width 100%
             height 35px
             padding 0 15px
             box-sizing border-box
             font-size 12px
             color #7F7F7F
             background #eee
             display flex
             justify-content space-between
             align-items center
          .shopCart-content
             width 100%
             height 100%
             display flex
             flex-direction column
             justify-content center
             align-items center
            .shopImg
              color #7F7F7F
              display flex
              flex-direction column
              align-items center
              margin-top -80px
              font-size 14px   
              img 
                width 124px
                height 124px
              span 
                margin-top -12px     
            .login
                width 240px
                height 46px
                background #b4282d
                color #fff 
                border none
                margin-top 20px
                font-size 14px      
</style>
