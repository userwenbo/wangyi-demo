<template> 
   <div class="container">
      <div class="search">
       <div class="searchTop">
          <input type="text" placeholder="假期恢复指南" v-model="value" @keyup.13="gotoSearch">
          <span class="cancel" @click="$router.back()" v-show="!searchResult.directlyList||!value">取消</span>
          <i class="iconfont icon-sousuo searchIcon"></i>
       </div>
      <div class="result_show">
         <ul v-if="searchResult.directlyList" class="result-list">
             <li class="result-content" v-for="(item,index) in searchResult.directlyList">
                   <img :src="item.listPicUrl">
                   <span class="title">{{item.simpleDesc}}</span>
                   <span>{{item.name}}</span>
                   <span class="price">￥{{item.counterPrice}}</span>
             </li>
         </ul>
       <div class="searchContent" v-show="!searchResult.directlyList&&!value">
          <div class="title1">
             <span>热门搜索</span>
          </div>
          <ul class="hotList">
              <li v-for="(item,index) in searchInit.hotKeywordVOList">{{item.keyword}}</li>
          </ul>
       </div>
    </div>
   </div>  
</div>   
</template>

<script type="text/ecmascript-6">
 import {reqInitSearch,reqSearchResult} from '../../api'
 import axios from "axios";
  export default {
      data(){
         return {
            value:'',
            searchResult:{},
            searchInit:{}
         }
      },
      async mounted(){
            const result = await reqInitSearch()
               this.searchInit=result.data
               console.log(this.searchInit)
      },  
       methods:{
        async gotoSearch(){
            const result = await reqSearchResult(this.value)
              this.searchResult=result.data
              console.log(this.searchResult)         
         },
         // async gotoSearch(){
         //    const res = await axios({
         //       method:"GET",
         //       url:"/api/xhr/search/search.json",
         //       params:{
         //          keyword:this.value
         //       }
         //    })
         //    console.log("111",res)
         // }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .container
       width 100%
       height 100%
       background #eee
       .search
         background #fff
         .searchTop
            position relative
            background #fff
            display flex
            justify-content space-around
            padding 0 15px 0 15px
            font-size 15px
            height 50px
            justify-content space-between
            align-items center
            input 
               padding-left 25px
               box-sizing border-box
               height 28px
               background #eee
               border 1px solid #fff
               border-radius 5px
               width 85%
              .searchIcon
                 position absolute
                 left 22px
                 top 17px
         .result_show
           position absolute
           background #fff
           width 100%
           height 100%
           padding 0 10px
           box-sizing border-box
           .result-list  
             display flex
             justify-content space-between
             flex-wrap wrap  
            .result-content
               display flex
               flex-direction column
               justify-content center
               align-items center
               img 
                  width 172px
                  height 172px
                  background-color #f4f4f4
               span 
                  width 172px
                  font-size 12px
                  color #999
                  &.title
                     background #F1ECE2
                     width 172px
                     text-align center
                     padding 0
                  &.price
                     color red         
         .searchContent
             padding 0 15px
             width 100%
            .title1
              padding 10px 15px
              font-size 14px
              color #999
            .hotList
              display flex
              flex-wrap wrap
              width 100%
              li
                padding 0 7px
                border 1px solid #999f
                font-size 12px
                display inline-block
                margin 0 16px 16px 0
                
</style>
