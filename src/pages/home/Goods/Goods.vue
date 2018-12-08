<template>
  <div>
    <div class="goods" v-for="items in data" :key="items.id">
      <header class="header">
        {{items.name}}好物
      </header>
      <ul class="list">
        <li class="item" v-for="(item, index) in items.itemList"
            :key="item.id" v-if="index<=6">
          <a href="javascript:;">
            <img v-lazy="item.listPicUrl" alt="">
            <div class="desc ellipsis">{{item.simpleDesc}}</div>
            <div class="name ellipsis">{{item.name}}</div>
            <div class="price">￥{{item.retailPrice}}</div>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;" class="move">
            <p>更多{{items.name}}好物</p>
            <i class="iconfont icon-arrow"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .goods
    background #ffffff
    margin-bottom 0.4rem
    .header
      font-size 0.4rem
      text-align center
      color #333
      height 1.3rem
      line-height 1.3rem
    .list
      overflow hidden
      position relative
      .item
        float left
        width 50%
        box-sizing border-box
        &:nth-child(odd)
          padding 0 0.15rem 0.5rem 0.3rem
        &:nth-child(even)
          padding 0 0.3rem 0.5rem 0.15rem
        a
          display block
          height 6.6rem
          font-size 0
          overflow hidden
          &.move
            padding 1.2rem 0
            box-sizing border-box
            display flex
            flex-direction column
            justify-content center
            align-items center
            height 5.4rem
            background: #f4f4f4
          p
            color #333
            font-size 0.4rem
            line-height 0.4rem
            margin-bottom 0.8rem
          .arrow
            font-size 0.5rem
          img
            width 4.4rem
            height 4.4rem
            background #f4f4f4
          .desc
            width 4.2rem
            background #f1ece2
            padding 0.3rem 0.1rem
            color #9f8a60
            line-height 0.4rem
            font-size 0.3rem
          .name
            font-size 0.35rem
            padding 0 0.1rem
            margin-top 0.2rem
            color #333
          .price
            margin-top 0.2rem
            font-size 0.45rem
            color #b4282d
            padding 0 0.1rem


</style>
