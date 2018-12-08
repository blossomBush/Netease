<template>
  <section class="strict" v-if="topicData.yxLook">
    <div class="header">严选LOOK</div>
    <a href="javascript:;">
      <img v-lazy="topicData.yxLook.picUrl" alt="">
      <div class="authorContainer">
        <div class="author">
          <div class="authorPic">
            <img v-lazy="topicData.yxLook.avatar" alt="">
          </div>
          <div class="authorName">{{topicData.yxLook.nickname}}</div>
        </div>
      </div>
      <div class="desc">{{topicData.yxLook.content}}</div>
    </a>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['topicData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .strict
    background #ffffff
    margin-bottom 0.3rem
    .header
      font-size 0.4rem
      text-align center
      color #333
      line-height 1.6rem
    a
      color #eee
      img
        width 100%
        height auto
      .authorContainer
        padding 0.2rem 0.2rem 0.2rem
        .author
          display flex
          align-items center
          font-size 0.25rem
          .authorPic
            width 0.7rem
            height 0.7rem
            margin-right 0.2rem
            img
              width 100%
              height 100%
              border-radius 50%
          .authorName
            color #333
            font-size 0.4rem
            letter-spacing 0.05rem


      .desc
        font-size 0.4rem
        color #7f7f7f
        line-height 0.6rem
        padding 0.15rem 0.2rem

</style>
