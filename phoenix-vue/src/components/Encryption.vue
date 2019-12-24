<template>
  <div>
    <h1>AES</h1>
    <input v-model="encryptionRaw"/>
    <div @click="convertTo">转二进制</div>
    <textarea v-model="result"></textarea>
    <div @click="encryption">加密</div>
  </div>
</template>

<script>
import cryptico from 'cryptico'

export default {
  name: "Encryption",
  data () {
    return {
      encryptionRaw: 'abc',
      result: []
    }
  },
  methods: {
    encryption () {
      var PassPhrase = "592622ab-af59-4e3c-b5b3-25c84ec1e702"; 
      var Bits = 1024; 
      // private key
      var MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
      
      // public key
      var MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey); 
      var PlainText = "Matt, I need you to help me with my Starcraft strategy.";
      // 加密 - publickey
      var EncryptionResult = cryptico.encrypt(PlainText, MattsPublicKeyString);
      // 解密 - privatekey
      var DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, MattsRSAkey);
      window.console.log(EncryptionResult.cipher)
      window.console.log(DecryptionResult.plaintext)
    },
    /// 生成唯一用户 id
    getUUID () {
      const uuidv4 = require('uuid/v4')
      window.console.log(uuidv4())
      return uuidv4()
    },

    convertTo () {
      this.result = this.changeToData(this.encryptionRaw)
    },
    /// 将字符串转换成二进制
    changeToData (msg) {
      let result = []
      if (msg.length === 0) {
        return result
      }
      for (let i = 0; i < msg.split('').length; i++) {
        const ch = msg.split('')[i].charCodeAt().toString(2)
        result.push(Number(ch))
      }
      window.console.log('result', result)
      return result
    }
  }
}
</script>