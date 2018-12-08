<template>
  <div class="details" v-if="navData[navIndex]">
    <div class="detail_wrap">
      <div class="banner">
        <img  v-lazy="navData[navIndex].wapBannerUrl"
              :key="navData[navIndex].wapBannerUrl">
      </div>
      <div class="detailTit">
          <span class="text">
            <span>{{navData[navIndex].name}}</span>
            <span>分类</span>
          </span>
      </div>
      <section class="detail">
        <ul class="list">
          <li class="item" v-for="(item) in navData[navIndex].subCateList" :key="item.id">
            <a href="javascript:;">
              <img  v-lazy="item.wapBannerUrl" :key="item.wapBannerUrl" alt="" >
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('getNavData', ()=>{
        this.$nextTick(() => {
          new BScroll('.details', {
            scrollY: true,
            click: true
          })
        })
      })
    },
    computed: {
      ...mapState(['navData','navIndex'])
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .details
    margin-left 2.2rem
    height 15rem
    overflow hidden
    .detail_wrap
      padding 1.5rem 0.3rem 0.2rem
      .banner
        width 100%
        height 2.3rem
        border-radius 0.2rem
        img
          width 100%
          height 100%
      .detailTit
        height 1.2rem
        line-height 1.2rem
        font-size 0.3rem
        color #333
        .text
          font-size 0
          position relative
          span
            font-size 0.3rem
      .detail
        width 100%
        li
          display inline-block
          vertical-align top
          font-size 0
          width 2rem
          margin-right 0.4rem
          a
            color #333
            img
              width 1.9rem
              height 1.9rem
            span
              display block
              text-align center
              height 1rem
              line-height 0.5rem
              font-size 0.3rem

</style>
