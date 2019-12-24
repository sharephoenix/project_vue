<template>
  <div>
    <div>
      <div>
        <div class="button" @click="get">get</div>
        <div class="button" @click="clearGet">clear</div>
      </div>
      <textarea class="button-get-res" v-html="getResponse"></textarea>
    </div>
  </div>
</template>

<script>
import { test } from '@/lys-request/index'

export default {
  name: 'Request',
  data () {
    return {
      getResponse: 'empty'
    }
  },
  methods: {
    get () {
      // window.console.log(test())
      test().then(res => {
        this.getResponse = res
      })
    },
    clearGet () {
      this.getResponse = 'empty'
    }
  }
}
</script>

<style lang="scss" scoped>
$width: 100%;
  .button {
    display: inline-block;
    color: #fff;
    width: $width / 2;
    height: 44px;
    font-size: 16px;
    padding: 12px 0;
    text-align: center;
    font-weight: 600;
    background: #383838;
    border-radius: 4px;
  }

  .button-get-res {
    display: block;
    width: $width;
    min-height: 99px;
    border: 1px solid lightgray;
  }
</style>