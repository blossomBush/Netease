<template>
  <nav id="nav" ref="nav">
    <ul class="navList">
      <li class="navList_item" v-for="(title, index) in navList" :key="index"
          :class="{'active': current===index}" @click="currentIndex(index)">
        <span>{{title}}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        current: 0, //初始化下标为0
        navList:['推荐','居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区']
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.nav, {
          scrollX: true,
          click: true
          })
      })
    },
    methods: {
      currentIndex(index) {
        this.current = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #nav
    width 100%
    overflow hidden
    /*padding-bottom 6px*/
    display flex
    flex-wrap nowrap
    background: #fff
    .navList
      width 100%
      padding-bottom 6px
      display flex
      justify-content space-between
      align-items center
      flex-wrap  nowrap
      flex-direction row
      padding-left 0.4rem
      .navList_item
        display flex
        flex-wrap nowrap
        justify-content space-around
        width 3rem
        height 1rem
        margin-right 0.1rem
        &.active
          span
            position relative
            color red
            &:after
              content ''
              width .7rem
              height 0.053rem
              background red
              position absolute
              left 0
              bottom 0
        span
          font-size 0.3733rem
          display flex
          text-align center
          line-height 1rem
</style>
