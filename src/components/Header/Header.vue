<template>
  <header id="header">
    <span class="header_title">
      网易严选
    </span>
    <div class="search">
      <div class="search_content">
        <i class="iconfont icon-search"></i>
        <span class="search_title">搜索商品，共9771款好物</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #header
    width 100%
    height 1rem
    padding 8px
    display flex
    justify-content space-between
    align-items center
    .header_title
      font-size 0.45rem
      font-weight bold
      width 23%
    .search
      width 70%
      height 0.8rem
      font-size 0.049rem
      background-color: #ededed
      display flex
      justify-content center
      align-items center
      border-radius 5px
      margin-right 17px
      .icon_search
        font-size 0.3733rem
      .search_title
        font-size 0.3733rem
        font-weight bold

</style>
