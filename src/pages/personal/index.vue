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
     <div class="wrap" v-show="isShow==0">
         <div class="logoImg">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
         </div>
         <div class="button-wrap">
              <div class="button-mobile" @click="goMebile">
                 <i class="iconfont icon-shouji"></i>
                 <span>手机号快速登录</span>
              </div>
              <div class="button-email" @click="goEmail">
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
     <div v-show="isShow==1" class="wrap-phone">
           <div class="logo">
               <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
           </div>
           <form action="submit" class="inputbox" @submit.prevent>
               <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" name="phone" v-validate="{required: true,regex: /^1\d{10}$/}">
                 <span style="color: red;" v-show="errors.has('phone')&&!isShowPwd"">{{ errors.first('phone') }}</span>
              <input type="text" v-show="!isShowPwd" maxlength="6" placeholder="请输入短信验证码" v-model="code" name="code" v-validate="{required: true,regex: /^[1-9]\d{5}$/}">
              <span style="color: red;" v-show="errors.has('code')&&!isShowPwd"">{{ errors.first('code') }}</span>
              <input type="password" placeholder="请输入密码" v-show="isShowPwd" v-model="pwd" name="pwd" v-validate="{required: true,regex: /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g}">
              <button :disabled="!isRightPhone||computedTime>0" v-show="!isShowPwd"
                 class="yanzheng" 
                 :class="{right_phone_number:isRightPhone}"
                 @click.prevent="sendCode">
                   {{computedTime>0?`(${computedTime}s) 后重发`:'发送验证码'}} 
                 </button>
              <div class="text">
                 <span>{{isShowPwd?"忘记密码":"遇到问题?"}}</span>
                 <span @click="pwdlogin">{{isShowPwd?'短信快捷登录':'使用密码验证登录'}}</span>
              </div>
              <button @click.prevent="login">登录</button>
              <div class="back_btn" @click="isShow=0">
              <span>其他登录方式></span>
           </div>
           </form>
     </div>
     <div v-show="isShow==2" class="wrap-phone wrap-email">
          <div class="logo">
               <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
           </div>
           <form action="submit" class="inputbox" @submit.prevent>
               <input type="email" maxlength="20" placeholder="邮箱" v-model="email" name="email" v-validate="{required: true,regex:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/}">
                 <span style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
              <input type="password" maxlength="20" placeholder="请输入密码" v-model="pwd" name="pwd" v-validate="{required: true,regex: /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g}">
              <span style="color: red;" v-show="errors.has('pwd')&&!isShowPwd"">{{ errors.first('pwd') }}</span>
              
              <div class="text">
                 <span>注册账号</span>
                 <span>忘记密码</span>
              </div>
              <button @click.prevent="login">登录</button>
              <div class="back_btn" @click="isShow=0">
                   <span>其他登录方式></span>
              </div>
           </form>

     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     data(){
       return {
         isShow:0,
         phone:'',
         code:'',
         email:'',
         pwd:'',
         computedTime:0,
         isShowPwd:false
       }
     },
     computed:{
       //判断手机号
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
     },
     methods:{
       goMebile(){
         this.isShow=1
       },
      goEmail(){
        this.isShow=2
      },
      async login(){
        let names 
        names=['phone','code']
        const success=await this.$validator.validateAll(names)
      },
      sendCode(){
           this.computedTime=30
            const TimeId= setInterval(() => {
             this.computedTime--
            if(this.computedTime<=0){
               clearInterval(TimeId)
            }
         }, 1000);
      },
      pwdlogin(){
         this.isShowPwd=!this.isShowPwd
      }
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
      padding-bottom  0
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
        background: #F2F5F4;
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
      .wrap-phone 
         width 100%
         height 100%
         background #fff
         position relative
        .logo
          width 100%
          text-align center
          padding-top 28px
          box-sizing border-box
          margin-bottom 20px
          img 
            width 96px
            height 32px
            display inline-block
        .inputbox  
          display flex
          flex-direction column
          margin 0 auto
          padding 0 20px
          input 
             width 100%
             height 46px
             border-top 0
             border-left 0
             border-right 0
             border-1px(#666,bottom)
             margin-bottom 10px
          .text
            display flex
            justify-content space-between
            font-size 14px
            margin-bottom 20px 
            color #666
            span:nth-child(2)
              color #333    
          button 
             width 100%
             height 46px
             background #b4282d
             border none 
             color #fff
             margin-bottom 20px 
          .back_btn
             width 100% 
             text-align center
             font-size 15px 
          .yanzheng
            position absolute
            right 20px
            top 150px 
            width 90px
            height 26px
            background #fff
            color #333
            border 1px solid #666
            &.right_phone_number
              color #666 
                  
</style>
