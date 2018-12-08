<template>
  <div class="quarterTen">
    <div class="header">十点一刻</div>
    <div class="swiper-container" id="swiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data" :key="item.id">
          <a href="javascript:;">
            <div class="lineTitle">
              <span class="inner">今日话题</span>
            </div>
            <div class="tsTitle">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="joinInfo">{{item.participantNum}}人参与话题</div>
          </a>
        </div>
        <div class="swiper-slide last">
          <a href="javascript:;">
            <div class="move">
              <span>查看全部话题</span>
              <i></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props: {
      data: Array
    },
    watch: {
      data () {
        //页面重新渲染执行这个函数
        this.$nextTick(() => {
          new Swiper ('#swiper3', {
            loop: true, // 循环模式选项
            pagination: {
              el: '.swiper-pagination',
            },
            spaceBetween : 20,
            centeredSlides : true,
            slidesPerView : 1.15
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .quarterTen
    margin-bottom 0.3rem
    background #ffffff
    .header
      font-size 0.4rem
      text-align center
      color #333
      line-height 1.6rem
    .swiper-container
      .swiper-slide
        background url('../../../assets/images/qipao.png') no-repeat
        background-size 100% 100%
        margin-bottom 0.3rem
        a
          display block
          position relative
          width 100%
          height 5.6rem
          padding 0.5rem 0.5rem 1rem
          text-align center
          color #333
          box-sizing border-box
          .lineTitle
            display flex
            justify-content center
            align-items center
            margin-bottom 0.4rem
            &:before
              content ''
              display block
              width 0.4rem
              height 1px
              background #7f7f7f
            &:after
              content ''
              display block
              width 0.4rem
              height 1px
              background #7f7f7f
            .inner
              font-size 0.3rem
              margin 0 0.1rem
              color #7f7f7f


          .tsTitle
            font-size 0.5rem
            font-weight bold
            margin-top 0.8rem
            margin-bottom 0.2rem
          .desc
            font-size 0.4rem
            margin-top 0.3rem
            margin-bottom 0.2rem
            line-height 0.6rem
          .joinInfo
            width 7rem
            height 1rem
            font-size 0.35rem
            text-align center
            position absolute
            left 50%
            bottom 0.8rem
            transform translateX(-50%)
      .last
        background none
        a
          position relative
          border 10px solid #e6e6e6
          padding 0
          background-color #fafafa
          width 100%
          height 5.6rem
          .move
            position absolute
            top 0
            right 0
            left 0
            bottom 0
            margin auto
            width 4rem
            height 1rem
            display flex
            align-items center
            span
              color #7f7f7f
              font-size 0.4rem
              line-height 1rem
              margin-right 0.4rem
            i
              display inline-block
              width 0.8rem
              height 0.8rem
              background url('../../../assets/images/right.png')
              background-repeat no-repeat
              background-size 100% 100%

</style>
