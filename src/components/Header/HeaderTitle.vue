<template>
  <header class="headerTitle">
    <div class="header">
      <div class="home" @click="$router.replace('/home')">
        <i class="iconfont icon-home"></i>
      </div>
      <div class="title">网易严选</div>
      <div class="search">
        <i class="iconfont icon-search"></i>
      </div>
      <div class="cart">
        <i class="iconfont icon-cart"></i>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .headerTitle
    position fixed
    left 0
    top 0
    z-index 99
    width 100%
    height 1.2rem
    .header
      width 100%
      height 1rem
      background: #ffffff
      padding 0.1rem
      text-align center
      position relative
      border-bottom 1px solid #EDEEED
      .home
        display inline-block
        position absolute
        top 0
        left 0.3rem
        i
          font-size 0.6rem
          vertical-align middle
      .title
        font-size 0.5rem
        display inline-block
        vertical-align middle
        margin-bottom 0.2rem
      .search
        display inline-block
        position absolute
        top 0
        right 1.5rem
        i
          font-size 0.6rem
          vertical-align middle
      .cart
        display inline-block
        position absolute
        top 0
        right 0.5rem
        i
          font-size 0.6rem
          vertical-align middle
</style>
