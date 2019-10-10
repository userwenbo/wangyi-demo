<template>
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
        <div class="nav">
          <div class="header-bottom wrapper" v-show="!isShowTab">
            <ul>
              <li class="item on" @click="checkout">
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

        <div class="mask" v-show="isShowTab"></div>
      </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
  export default {
  data(){
    return{
      isShowTab:false,
    }
  },
  methods:{
      toggle(){
         this.isShowTab=!this.isShowTab
      },
      checkout(){
         
      }
  },
     mounted(){
        this.$nextTick(()=>{
          let scroll = new BScroll(".header-bottom",{
             scrollX:true,
             click:true
         })
      })
    }
  }  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../../assets/mixins.styl"
    .header
        position fixed
        left 0
        top 0
        width 100%
        background #fff
        .header-top
          z-index 5
          display flex
          position relative
          padding 8px 15px 8px 15px
          box-sizing border-box
          width 100%
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
        .nav 
           position relative     
          .header-bottom
            font-size 16px
            width 80%
            height  30px
            display flex
            padding 0 15px 0 5px
            box-sizing border-box
            overflow hidden
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
                box-sizing border-box
                min-width 68px
                flex-shrink: 0;
                text-align center
                line-height 30px
                font-size 13px
                &.on
                  border-bottom 3px solid #b4282d       
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
          .toggleWrap
            position absolute
            right 0
            top 0
            width 20%
            z-index 3
            background #fff
            text-align center
            line-height 30px
            height 30px
            .iconfont
               font-size 24px  
</style>
