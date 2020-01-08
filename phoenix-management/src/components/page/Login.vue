<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">{{error}}</p>
            </el-form>
        </div>
    </div>
</template>

<script>
import { sendCode, getCode, login } from '../../api/index'

export default {
    data: function() {
        return {
            param: {
                username: '18817322819',
                password: '123',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            error: '用户和密码随便填写'
        };
    },
    methods: {
        async submitForm() {
            const { code, msg } = await sendCode({mobile: this.param.username})
            if (code === 0) {
                const {code, data, msg} = await getCode({mobile: this.param.username})
                if (code === 0) {
                    this.param.password = data.code
                } else {
                    this.setError(msg)
                }
            } else {
                this.setError(msg)
            }
            const { code: codeR, data: dataR, msg: msgR } = await login({mobile: this.param.username, code: this.param.password})
            if (codeR === 0) {
                this.$eventBus.$emit('loginUserInfo', dataR)
                window.console.log('rrrresponse::', dataR)
                localStorage.setItem('loginUserinfo', JSON.stringify(dataR))
                this.$router.push('/home');
            } else {
                this.setError(msgR)
            }
            // this.$refs.login.validate(valid => {
            //     if (valid) {
            //         this.$message.success('登录成功');
            //         localStorage.setItem('ms_username', this.param.username);
            //         this.$router.push('/');
            //     } else {
            //         this.$message.error('请输入账号和密码');
            //         window.console.log('error submit!!');
            //         return false;
            //     }
            // })
        },
        setError (msg) {
            alert(msg)
            this.error = msg
            setTimeout(() => {
                this.error = '用户和密码随便填写'
            }, 3000)
        }
    }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>