<template>
  <div class="NavList">
    <div class="inner">
      <ul>
        <li class="item" v-for="(item, index) in navData" :key="index"
            @click="currentIndex(index)"
            :class="{'active': navIndex === index}">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
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
          new BScroll('.inner', {
            scrollY: true,
            click: true
          })
        })
      })
    },
    computed: {
      ...mapState(['navData','navIndex'])
    },
    methods: {
      currentIndex(index) {
        this.$store.dispatch('setNavIndex', index)
//        this.$store.dispatch('getNavDetail')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .NavList
    position fixed
    left 0
    top 1rem
    bottom 0
    z-index 5
    width 2.2rem
    height 100%
    border-right 1px solid #eee
    .inner
      width 100%
      height 100%
      padding-top 0.4rem
      overflow hidden
      ul
        padding-bottom 3rem
        li
          width 100%
          height 1.5rem
          line-height 1.5rem
          text-align center
          &.active
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              bottom 0
              width 0.08rem
              height 1rem
              background #b4282d
            a
              color #b4282d
              font-size 0.5rem
              font-weight bold
          a
            font-size 0.4rem
            color #333
            line-height 1rem
            height 1rem
            display block

</style>
