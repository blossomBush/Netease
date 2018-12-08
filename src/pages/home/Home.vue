<template>
  <div id="home">
    <div class="home_header">
      <Header/>
      <Nav/>
    </div>
    <div class="home_container">
      <HomeSwiper/>
      <BrandShow/>
      <Goods :data="homeData.cateList"></Goods>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from '../../components/Header/Header.vue'
  import Nav from '../../pages/Nav/Nav.vue'
  import HomeSwiper from './HomeSwiper/HomeSwiper.vue'
  import BrandShow from './BrandShow/BrandShow.vue'
  import Goods from './Goods/Goods.vue'
  export default {
    components: {
      Header,
      Nav,
      HomeSwiper,
      BrandShow,
      Goods
    },
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home
    background #eee
    /*margin-bottom 0.8rem*/
    .home_header
      position fixed
      left 0
      top 0
      z-index 100
      width 100%
    .home_container
      padding-top 2rem
      overflow hidden
      padding-bottom 2rem
</style>
