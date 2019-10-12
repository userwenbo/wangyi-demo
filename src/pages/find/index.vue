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
              <li class="navItem" :class="{active:current===index}" @click="checkout(index)" v-for="(item,index) in navList" :key="index"><span>{{item.tabName}}</span></li>
            </ul>
         </div>
         <div class="div-wrap">
           <div class="find-contnet">
            <!-- <ul class="find-list">
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
                <li class="findItem minImg">     
                         <div class="minImg-Info">
                            <div class="avatar">
                              <img src="https://yanxuan.nosdn.127.net/1e7c32184465565daabd253cfba8d2f5.jpg?imageView&quality=65&thumbnail=56y56" alt="">
                              <span>网易文漫:小黄</span>
                            </div> 
                            <span class="minImg-title">一边睡觉，一边“吨吨吨”地给脸补水</span>
                            <span class="Info-text">新西兰牛奶限时特惠</span>
                            <span class="see">8515人看过</span>
                         </div>
                         <div class="bigImg">
                             <img src="https://yanxuan.nosdn.127.net/f3ba0569c153409c4d35349e3e256570.jpg?imageView&quality=65&thumbnail=272y272" alt="">
                         </div>
                </li>
            </ul> -->
             <div v-for="(findItem,index) in findList" class="find-list">
                  <div v-show="findItem.ad">
                      <div class="findItem">
                         <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                     </div>
                  </div>
                <div v-for="(item,index) in findItem.topics">
                  <div class="findItem xuanmei" v-if="item.style===1">
                      <div class="name">
                        <img class="titleImg" :src="item.avatar" alt="">
                        <span>选妹</span>
                      </div> 
                      <p class="title">时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</p>
                      <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg?imageView&quality=65&thumbnail=690y376" alt="">
                      <span class="see">90%的人看过</span>
                  </div>
                  <div class="findItem minImg" v-if="item.style===2">     
                    <div class="minImg-Info">
                        <div class="avatar">
                          <img :src="item.avatar" alt="">
                          <span>网易文漫:小黄</span>
                        </div> 
                        <span class="minImg-title">一边睡觉，一边“吨吨吨”地给脸补水</span>
                        <span class="Info-text">新西兰牛奶限时特惠</span>
                        <span class="see">8515人看过</span>
                    </div>
                      <div class="bigImg">
                          <img src="https://yanxuan.nosdn.127.net/f3ba0569c153409c4d35349e3e256570.jpg?imageView&quality=65&thumbnail=272y272" alt="">
                      </div>
                  </div>
                </div> 
             </div>
         </div>
         </div>
      </div>
    </div>
    <!-- <div v-for="(i,index) in data">
      <div v-if="i.ad">
         
      </div>
      <div v-for="(item,index) in i.topics">
        <div v-if="item.style === 1">
           
        </div>
          
        <div v-if="item.style === 2">
          
        </div>
      </div> 
    </div>  -->
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import {reqTab,reqFIndlist} from  '../../api'
  export default {
    data(){
      return {
        navList:[],
        findList:[],
        current:0
      }
    },
    async mounted(){
      //发 导航栏请求
       const result =await reqTab()
          this.navList=result.data
       //推荐栏请求 
       const resultData =await reqFIndlist()
           this.findList=resultData.data
           console.log(this.findList)

       this.$nextTick(()=>{
         let scroll = new BScroll(".div-wrap",{
             scrollY:true,
             click:true
         })  
       })
        this.$nextTick(()=>{
          let scroll = new BScroll(".find-nav",{
             scrollX:true,
             click:true
         })
      })
    },
    methods:{
      checkout(index){
        this.current=index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../assets/mixins.styl"
    .find
       background #f4f4f4
       width 100%
       height 100%
       padding-top 86px
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
          width 375px
          height 36px
          font-size 14px
          color #7F7F7F
          position fixed
          z-index 2
          left 0
          top 50px
          background #fff
          .navList
            width 600px
            flex-shrink 0
            height 100%
            display flex
            align-items center
            flex none
            .navItem
              flex-shrink 0
              margin 0 10px
              padding 0 4px
              height 100%
              line-height 36px
              box-sizing border-box
              &.active
                color #B4282D
                border-bottom 2px solid #B4282D 
        .div-wrap
          width 100%
          height 100%
          .find-contnet
            position relative
            box-sizing border-box 
            width 100%
            .find-list
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
                &.minImg
                    display flex
                    .minImg-Info
                      display flex
                      font-size 18px
                      flex-direction column
                      width 200px
                      .avatar
                        display flex
                        font-size 14px
                        img 
                          width 27px 
                          height 27px
                          border-radius 50%
                          margin-right 5px
                        .minImg-title
                          font-size 20px
                          margin-bottom 10px 
                          margin-top 5px 
                      .Info-text
                        font-size 14px
                        margin-bottom 20px 
                        margin-top 10px
                      .see
                        font-size 14px      
                    .bigImg 
                        width 136px
                        height 136px
                        img 
                          width 100%
                          height 100% 
                       
</style>        
