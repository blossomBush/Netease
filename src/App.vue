<template>
  <div id="app">
    <router-view />
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    name: 'App',
    components: {
      FooterGuide
    },
    mounted() {
      this.$store.dispatch('getHomeData')
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
    background #ffffff
    position relative
</style>
