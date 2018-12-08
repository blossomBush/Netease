<template>
  <div class="login_container">
    <div class="login">
      <div class="login_header">
        <div class="login_logo">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="login_title">
          <span class="title">账号登录</span>
        </div>
      </div>
      <div class="login_content">
        <input type="text" placeholder="手机/邮箱/用户名">
        <div class="login_pwd">
          <input type="text" placeholder="密码">
        </div>
        <div class="login_pac">
          <input type="text" placeholder="验证码">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .login_container
    width 100%
    height 100%
    background: #ffffff
    .login
      padding-top 1.8rem
      width 80%
      margin 0 auto
      .login_logo
        text-align center
        padding-top 0.6rem
        padding-bottom 0.1rem
        img
          width 3.5rem
          height 1.2rem
      .title
        font-size 0.4rem
        padding-top 1.2rem
        color #b4282d
        font-weight bold
</style>
