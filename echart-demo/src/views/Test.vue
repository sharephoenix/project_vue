<template>
  <div>this is my test</div>
</template>

<script>
export default {
  name: 'Test',
  props: ['a1', 'a2'],
  watch: {
    a1: {
      handler (val) {
        window.console.log('aaaa1:', val, this.a1, this.a2)
      },
      immediate: true
    },
    a2: {
      handler (val) {
        window.console.log('bbbbb1:', val, this.a1, this.a2)
      },
      immediate: true
    }
  },
  mounted () {
    window.console.log(this.$router)
  }
}
</script>

<style lang="stylus" scoped>

</style>