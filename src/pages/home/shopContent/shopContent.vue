<template>
  <div>
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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
     @import "../../../assets/mixins.styl"
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
 
</style>
