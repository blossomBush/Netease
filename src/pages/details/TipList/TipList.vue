<template>
  <div :class="'tipList'+a">
    <div class="tipContainer">
      <div class="tip" v-for="(item, index) in data" :key="index">
        <img v-lazy="item.picUrl" alt="">
        <div class="tNum">
          <span class="tNumCon">{{item.articleCount}}</span>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      data: Array,
      a: String
    },
    mounted() {
      this.$nextTick(() => {
        const a = this.a
        new BScroll('.tipList'+a, {
          scrollX: true,
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .tipList3
    height 3rem
    background #ffffff
    margin-bottom 0.22rem
    padding 0.35rem 0 0.28rem 0.32rem
    overflow hidden
    .tipContainer
      margin 0 auto
      height 100%
      font-size 0
      white-space nowrap
      float left
      margin-left 0.32rem
      .tip
        display inline-block
        text-align center
        height 100%
        position relative
        z-index 1
        margin-right 0.4rem
        vertical-align middle
        img
          width 2.2rem
          height 2.2rem
        .tNum
          position absolute
          top 0
          right 0.1rem
          color #ffffff
          width 2.2rem
          height 0.6rem
          .tNumCon
            position absolute
            top 0
            right 0
            width 2.2rem
            height 0.5rem
            line-height 0.5rem
            font-size 0.3rem
            text-align right
        .title
          color #333
          font-size 0.35rem
          text-align center
          height 0.5rem
          line-height 0.8rem
</style>
