<template>
  <div id="personal">
    <!--头部-->
    <HeaderTitle />
    <!--内容-->
    <section class="cont">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="btns">
        <div class="btnPhone" @click="this.$router.push('/login')">
          <i class="iconfont icon-shouji"></i>
          <span class="btnPhoneCon">手机号码登录</span>
        </div>
        <div class="btnEmail" @click="goLogin(false)">
          <i class="iconfont icon-youxiang"></i>
          <span class="btnPhoneCon">邮箱账号登录</span>
        </div>
      </div>
      <div class="register">
        <span class="regCon">手机号快捷注册</span>
        <i class="iconfont icon-arrow"></i>
      </div>
    </section>
  </div>
</template>

<script>
  import HeaderTitle from '../../components/Header/HeaderTitle.vue'
  export default {
//    data() {
//      return {
//        loginWay: null
//      }
//    },
    components: {
      HeaderTitle
    },
//    methods: {
//      goLogin(loginWay) {
//        this.loginWay = loginWay
//        this.$router.push('/login')
//
//      }
//    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #personal
    background #F2F5F4
    width 100%
    height 100%
    .cont
      margin-top 1.2rem
      .logo
        text-align center
        padding 1.4rem 0
        img
          width 3.9rem
          height 1.3rem
      .btns
        padding  0 0.5rem
        .btnPhone
          margin-bottom 0.4rem
          border-radius 0.1rem
          background: #b4282d
          font-size 0.4rem
          color #ffffff
          width 100%
          height 1.2rem
          line-height 1.2rem
          text-align center
          vertical-align middle
          border 1px solid #b4282d
          .icon-shouji
            width 0.3rem
            height 0.3rem
            font-size 0.5rem
        .btnEmail
          margin-bottom 0.4rem
          border-radius 0.1rem
          background: #f2f5f4
          font-size 0.4rem
          color #b4282d
          width 100%
          height 1.2rem
          line-height 1.2rem
          text-align center
          vertical-align middle
          border 1px solid #b4282d
          .icon-youxiang
            width 0.3rem
            height 0.3rem
            font-size 0.5rem


      .register
        color #333
        font-size 0.4rem
        text-align center
        width 100%
        .regCon
          font-size 0.4rem

</style>
