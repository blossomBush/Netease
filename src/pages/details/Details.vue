<template>
  <div id="details">
    <HeaderTitle/>
    <div class="detail_container">
      <DetailSwiper :data="topicData.banner"></DetailSwiper>
      <TipList :data="topicData.column" a="3"></TipList>
      <Recommend :data="topicData.recommend"></Recommend>
      <QuarterTen :data="topicData.tenfifteen"></QuarterTen>
      <Recommend :data="topicData.zhen"></Recommend>
      <Strict></Strict>
      <MoreBrilliant :data="topicData.yxWeek"></MoreBrilliant>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTitle from '../../components/Header/HeaderTitle.vue'
  import DetailSwiper from './DetailSwiper/DetailSwiper.vue'
  import TipList from './TipList/TipList.vue'
  import Recommend from './Recommend/Recommend.vue'
  import QuarterTen from './QuarterPastTen/QuarterPastTen.vue'
  import Strict from './Strict/Strict.vue'
  import MoreBrilliant from './MoreBrilliant/MoreBrilliant.vue'

  export default {
    components: {
      HeaderTitle,
      DetailSwiper,
      TipList,
      Recommend,
      QuarterTen,
      Strict,
      MoreBrilliant
    },
    computed: {
      ...mapState(['topicData'])
    },
    mounted() {
      this.$store.dispatch('getTopicData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #details
    margin-bottom 1rem
    background #eee
    .detail_container
      margin-top 1.2rem

</style>
