
<template>
  <div>
  <!--品牌制造商直供-->
    <section class="brandShow">
    <header class="brandShow_header">
      <a href="javascript:;">
        <span>品牌制造商直供</span>
        <i class="iconfont icon-zhankai"></i>
      </a>
    </header>
    <div class="brandList">
      <div class="list_item" v-for="(item, index) in homeData.tagList" :key="item.id"
            v-if="index<=3">
        <div class="list_title">
          <span class="brand">{{item.name}}</span>
          <span class="item_price">{{item.floorPrice}}</span>
        </div>
        <img :src="item.picUrl" alt="">
      </div>
    </div>
  </section>
  <!--新品首发-->
    <section class="newProduct">
      <div class="new">
        <a href="javascript:;" class="new_move">
          <span class="new_title">新品首发</span>
          <div class="all">
            <span class="new_all">查看全部</span>
            <i class="iconfont icon-arrow"></i>
          </div>
        </a>
      </div>
      <!--滑动图-->
      <GoodList :data="homeData.newItemNewUserList"/>
  </section>
    <!--人气推荐-->
    <section class="newProduct">
      <div class="new popular">
        <a href="javascript:;" class="new_move">
          <span class="new_title">人气推荐，好物精选</span>
          <div class="all">
            <span class="new_all">查看全部</span>
            <i class="iconfont icon-arrow"></i>
          </div>
        </a>
      </div>
      <!--滑动图-->
      <GoodList :data="homeData.popularItemList"/>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import GoodList from '../GoodList/GoodList.vue'
  export default {
    computed: {
      ...mapState(['homeData'])
    },
    components: {
      GoodList
    },
    mounted () {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .brandShow
    background: #ffffff
    margin-bottom 0.2rem
    .brandShow_header
      height 1.2rem
      display flex
      justify-content center
      /*align-items center*/
      margin-bottom 5px
      a
        text-align: center
        span
          font-size 16px
        .icon-zhankai
          font-size 14px
    .brandList
      padding-bottom 4px
      /*background: pink*/
      overflow hidden
      margin 0 8px
      .list_item
        margin 0 4px 4px 0
        width 4.7rem
        height 3.3rem
        float left
        position relative
        overflow hidden
        background #f4f4f4
        &:nth-child(2)
          margin-right 0
        &:nth-child(4)
          margin-right 0
        .list_title
          font-size 14px
          position absolute
          left 0
          top 0
          z-index 5
          padding-left 10px
          .brand
            display block
            padding 5px 0
        img
          width 100%
          height 100%
          position absolute
          left 0
          top 0

  .newProduct
    background #ffffff
    .new
      background lightskyblue
      width 100%
      height 3.7rem
      margin-bottom 0.6rem
      position relative
      .new_move
        width 6.5rem
        height 2.6rem
        position absolute
        left 50%
        top 50%
        margin-left -3.5rem
        margin-top -1.2rem
        text-align center
        .new_title
          font-size 0.4rem
          color #8ba0b6;
        .all
          position relative
          margin 0.2rem
          width 5.12rem
          height 1.19rem
          line-height 1.19rem
          font-size 0
          margin 0 auto
          .new_all
            font-size 0.3rem
</style>
