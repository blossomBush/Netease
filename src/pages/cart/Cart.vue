<template>
  <div id="cart">
    <header class="header">购物车</header>
    <ul class="guarantee">
      <li class="guarantee_title1">30天无忧退货</li>
      <li class="guarantee_title2">48小时快速退款</li>
      <li class="guarantee_title3">满88元免邮费</li>
    </ul>
    <div class="banner">
      <img src="../../assets/images/cart.png" alt="">
      <div class="inner">
        <span class="txtCon">
          去添加点什么吧
        </span>
        <input class="txtSub" type="submit" value="登录">
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #cart
    height 100%
    position relative
    background: #f4f4f4
    .header
      font-size 0.5rem
      background #fff
      text-align center
      height 1.2rem
      line-height 1.2rem
    .guarantee
      width 100%
      height 1rem
      display flex
      align-items center
      justify-content space-around
      li
        font-size 0.32rem
        display flex
        align-items center
    .banner
      position absolute
      left 0
      top -1rem
      right 0
      bottom 0
      margin auto
      height 3.2rem
      text-align center
      img
        width 3rem
        height 3rem
        display inline-block
      .inner
        font-size 0.4rem
        color #7f7f7f
        .txtCon
          display block
          line-height 1rem
          height 1rem
          margin-bottom 0.6rem
        .txtSub
          color #ffffff
          width 5.2rem
          height 1rem
          background-color #b4282d
</style>
