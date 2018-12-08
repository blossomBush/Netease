<!--为你推荐-->
<template>
  <div v-if="data" class="recommend" >
    <div class="header">{{data.name}}</div>
    <div class="mainItem">
      <div class="imgCon">
        <img  v-lazy="data.Item[0].picUrl" alt="">
      </div>
      <div class="abstract">
        <div class="abstract_quiz">
          <span class="quiz">{{data.Item[0].title}}</span>
          <span class="price">{{data.Item[0].priceInfo}}元起</span>
        </div>
        <div class="abstract_info">{{data.Item[0].subTitle}}</div>
      </div>
    </div>
    <div class="items">
      <div class="topicInfo">
        <div class="line1">
          <div class="topicTitle">{{data.Item[1].title}}</div>
        </div>
        <div class="line2">
          <div class="cont ellipsis">{{data.Item[1].subTitle}}</div>
        </div>
      </div>
      <div class="topicPic">
        <img v-lazy="data.Item[1].picUrl" alt="">
        <div class="topicTag">
          <div class="tag">{{data.Item[1].typeName}}</div>
        </div>
      </div>
    </div>
    <div class="items">
      <div class="topicInfo">
        <div class="line1">
          <div class="topicTitle">{{data.Item[2].title}}</div>
        </div>
        <div class="line2">
          <div class="cont ellipsis">{{data.Item[2].subTitle}}</div>
        </div>
      </div>
      <div class="topicPic">
        <img v-lazy="data.Item[2].picUrl" alt="">
        <div class="topicTag">
          <div class="tag">{{data.Item[2].typeName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .recommend
    padding 0 0.4rem 0.55rem
    margin-bottom 0.3rem
    background #ffffff
    .header
      font-size 0.4rem
      text-align center
      color #333
      line-height 1.6rem
    .mainItem
      margin-bottom 0.4rem
      color #333
      border 1px solid #d9d9d9
      border-radius 0.1rem
      .imgCon
        height 4.5rem
        img
          width 100%
          height 100%
      .abstract
        box-sizing border-box
        padding 0.3rem 0.22rem 0.7rem
        .abstract_quiz
          margin-bottom 0.4rem
          line-height 1rem
          height 0.8rem
          color #333
          .quiz
            font-size 0.45rem
            vertical-align top
          .price
            font-size 0.4rem
            float right
            margin-right 0.2rem
            line-height 1rem
        .abstract_info
          font-size 0.35rem
          color #7f7f7f
          line-height 0.6rem

    .items
      border 1px solid #d9d9d9
      box-sizing border-box
      margin-bottom 0.4rem
      color #333
      display flex
      .topicInfo
        display flex
        flex-direction column
        justify-content center
        padding 0 0.25rem 0 0.32rem
        width 5rem
        .line1
          margin-bottom 0.2rem
          line-height 0.8rem
          box-sizing border-box
          .topicTitle
            font-size 0.4rem
            margin-right 0.32rem
        .line2
          width 100%
          .cont
            font-size 0.35rem
            color #7f7f7f
      .topicPic
        position RELATIVE
        width 3.6rem
        height 3.6rem
        overflow hidden
        img
          width 100%
          height 100%
        .topicTag
          position absolute
          top 0.2rem
          left 0.2rem

          .tag
            font-size 0.2rem
            color #333
            background #ffffff
            border-radius 0.2rem
            border 1px solid #d9d9d9
            padding 0 0.3rem
            height 0.5rem
            line-height 0.5rem

      &:last-child
        margin-bottom 0

</style>
