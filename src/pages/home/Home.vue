<template>
  <div id="content">
    <Header/>
    <Nav/>
    <HomeSwiper/>

  </div>
</template>

<script>

  import Header from '../../components/Header/Header.vue'
  import Nav from '../../pages/Nav/Nav.vue'
  import HomeSwiper from './HomeSwiper/HomeSwiper.vue'
  export default {
    name: 'Home',
    components: {
      Header,
      Nav,
      HomeSwiper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
