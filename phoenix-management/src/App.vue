<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
        this.$eventBus.$on('loginUserInfo', (u) => {
            this.$eventBus.$data.loginInfo = u
            if (!this.$eventBus.$data.loginInfo) {
              this.$router.push('/login');
            }
            window.console.log('response::', this.$eventBus.$data.loginInfo)
        })
    }
}
</script>

<style>
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css";     /*深色主题*/
  /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>
