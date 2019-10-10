<template>
  <div class="footer">
    <div class="footerItem" :class="{active:'/home'===$route.path}" @click="goto('/home')">
        <span class="iconfont icon-home"></span>
        <span class="text">首页</span>
    </div>
    <div class="footerItem" :class="{active:'/classify'===$route.path}" @click="goto('/classify')">
        <span class="iconfont icon-leimupinleifenleileibie"></span>
      <span class="text">分类</span>
    </div>
    <div class="footerItem" :class="{active:'/find'===$route.path}" @click="goto('/find')">
        <span class="iconfont icon-faxian"></span>
      <span class="text">识物</span>
    </div>
    <div class="footerItem" :class="{active:'/shopCart'===$route.path}" @click="goto('/shopCart')">
        <span class="iconfont icon-gouwuche"></span>
      <span class="text">购物车</span>
    </div>
    <div class="footerItem" :class="{active:'/personal'===$route.path}" @click="goto('/personal')">
        <span class="iconfont icon-person"></span>
      <span class="text">个人</span>
    </div>
      </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goto(path){
        if(this.$route.path!=path){
           this.$router.replace(path)
        }else{
          window.location.reload()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/mixins.styl"
  .footer
     border-1px(gray, top)
     width: 100%;
     position fixed
     bottom 0
     left 0
     display flex
     justify-content: space-around
     height 50px
     background-color  #fff
     z-index 2
     .footerItem    
       font-size 12px
       display flex
       flex-direction column
       justify-content center
       align-items center
       &.active
         color red
       .iconfont
         font-size 18px
       .text
         margin 2px 0 2px 0 

 
</style>
