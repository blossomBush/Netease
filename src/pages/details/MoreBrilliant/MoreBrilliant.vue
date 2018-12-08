<template>
  <section class="more">
    <div class="moveTit">
      <span class="inner">更多精彩</span>
    </div>
    <a href="javascript:;" class="item" v-for="item in data" :key="item.topicId">
      <img v-lazy="item.itemPicUrl" alt="img">
      <div class="desc">{{item.title}}</div>
    </a>
  </section>
</template>

<script>
  export default {
    props: {
      data: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .more
    margin 0 0.32rem 0.32rem
    .moveTit
      height 1.5rem
      display flex
      align-items center
      &:before
        content ''
        display block
        width 3.6rem
        height 1px
        background #d9d9d9
      &:after
        content ''
        display block
        width 3.6rem
        height 1px
        background #d9d9d9
      span
        margin 0 0.3rem
        color #333
        font-size 0.35rem
    .item
      display block
      background #ffffff
      padding 0.3rem
      margin-bottom 0.35rem
      img
        width 8.8rem
        height 4.8rem
      .desc
        font-size 0.4rem
        padding 0.3rem
        line-height 1rem
        color #333

</style>
