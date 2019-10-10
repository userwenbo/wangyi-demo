<template>
  <div id="app">
    <div class="content">
        <router-view></router-view> 
    </div>
     <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'app',
  components: {
     FooterGuide
  }
}
</script>
  
  <style lang="stylus">
   @import "./assets/mixins.styl"
#app
  width 100%
  height 100%
  .content
    width 100%
    height 100%
    .common
      padding-bottom 50px
      width 100%
      height 100%
      // display: none
      width 100%
      height 100%
      &.active
        display block
  </style>
