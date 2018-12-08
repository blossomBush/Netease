<template>
  <div class="detailSwiper">
    <div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <a href="javascript:;">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
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
          new Swiper ('#swiper2', {
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

  .detailSwiper
    width 100%
    background #ffffff
    padding 0.32rem 0
    .swiper-container
      width 100%
      position relative
      margin 0 auto
      z-index 5
      .swiper-wrapper
        height 5rem
        display flex
        position relative
        z-index 5
        box-sizing content-box
        .swiper-slide
          width 100%
          margin-right 0.6rem
          a
            color #eee
            width 100%
            height 5rem
            display block
            .content
              position absolute
              top 0
              left 0
              bottom 0
              right 0
              margin auto
              display flex
              flex-direction column
              justify-content center
              align-items center
              width 5rem
              height 2.2rem
              background-color rgba(255,255,255,0.9)
              .subTitle
                position relative
                font-size 0.3rem
                color #7f7f7f
                line-height 0.5rem
              .title
                font-size 0.4rem
                line-height 1rem
                color #333
                margin-top 0.2rem
                font-weight bold
              .desc
                font-size 0.4rem
                line-height 0.6rem
                margin-top 0.08rem
                color #333
            img
              width 100%
              height 100%
              border-radius 0.1rem
</style>
