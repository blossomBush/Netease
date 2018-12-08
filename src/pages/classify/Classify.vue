<template>
  <div id="classify">
    <div class="classify_content">
      <header class="header">
        <div class="search_content">
          <i class="iconfont icon-search"></i>
          <span class="search_title">搜索商品，共9771款好物</span>
        </div>
      </header>
      <div class="list">
        <NavList></NavList>
        <Details></Details>
      </div>
    </div>
  </div>
</template>

<script>
  import NavList from './NavList/NavList.vue'
  import Details from './Details/Details.vue'
  export default {
    components: {
      NavList,
      Details
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #classify
    width 100%
    height 100%
    .classify_content
      background: #ffffff
      /*margin-top 2rem*/
      .header
        width 100%
        height 1rem
        position fixed
        top 0
        left 0
        z-index 100
        padding 0 0.32rem
        border-bottom 1px solid #eee
        .search_content
          margin 0.2rem 0
          background-color #ededed
          display flex
          justify-content center
          align-items center
          border-radius 0.1rem
          width 94%
          height 0.7rem
          i
            font-size 0.4rem
          .search_title
            font-size 0.35rem
      .list
        margin-top 1rem
        width 100%
        height 100%
</style>
