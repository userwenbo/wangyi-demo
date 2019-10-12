<template>
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
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
     @import "../../../assets/mixins.styl"
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
