<template>
  <div class="goodsWrap">
    <div class="goods ellipsis">
      <div class="good" v-for="item in data" :key="item.id">
        <a href="javascript:;">
          <div class="image">
            <img :src="item.primaryPicUrl" alt="">
          </div>
          <div class="name ellipsis">{{item.name}}</div>
          <div class="nameDoc ellipsis">{{item.simpleDesc}}</div>
          <div class="price">¥{{item.retailPrice}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      data: Array
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll('.goodsWrap', {
          scrollX: true,
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .goodsWrap
    height 4.7rem
    overflow hidden
    margin 0.22rem 0
    background: #ffffff
    .goods
      height 100%
      margin-left 0.4rem
      float left
      .good
        display inline-block
        width 3rem
        height 4.7rem
        margin 0 0.4rem 0.4rem 0
        vertical-align middle
        a
          width 3rem
          height 4.7rem
          .image
            width 3rem
            height 3rem
            background: #f4f4f4
            img
              width 100%
              height 100%
          .name
            font-size 0.4rem
            color #333
          .nameDoc
            font-size 0.3rem
            color #333
            margin 0.2rem 0
          .price
            font-size 0.3rem
            color #333
</style>
