<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('/home')"
       :class="{on: isChange('/home')}" >
      <span class="icon_item">
        <i class="iconfont icon-home"></i>
      </span>
      <span class="title">首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/details')"
       :class="{on: isChange('/details')}" >
      <span class="icon_item">
        <i class="iconfont icon-detail"></i>
      </span>
      <span class="title">识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/classify')"
       :class="{on: isChange('/classify')}">
      <span class="icon_item">
        <i class="iconfont icon-classify"></i>
      </span>
      <span class="title">分类</span>
    </a>
    <a href="javascript:;" class="guide_item"  @click="goto('/cart')"
       :class="{on: isChange('/cart')}">
      <span class="icon_item">
        <i class="iconfont icon-cart"></i>
      </span>
      <span class="title">购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/personal')"
       :class="{on: isChange('/personal')}">
      <span class="icon_item">
        <i class="iconfont icon-personal"></i>
      </span>
      <span class="title">个人</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isChange(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer_guide
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    position fixed
    left 0
    bottom 0
    z-index 100
    width 100%
    background: #f5f5f5
    display flex
    justify-content space-around
    align-items center
    .guide_item
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      margin 6px 0
      &.on
        color red
      .icon_item
        display flex
        .iconfont
          font-size 0.5rem
      .title
        font-size 0.32rem
        margin-top 4px
</style>
