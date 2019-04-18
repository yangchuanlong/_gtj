<template>
    <div class="loginView">
        <el-form :model="loginData" label-position="right" label-width="80px" ref="loginData" class="loginForm">
            <div class="sysName">{{systemName}}</div>
            <el-form-item
                label="用户名"
                prop="username"
                :rules="[
                    {required: true, message: '请输入用户名'}
                ]"
            >
                <el-input
                    v-model="loginData.username"
                    placeholder="请输入用户名"
                ></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="password"
                :rules="[{
                    required: true, message: '请输入密码'
                }]"
            >
                <el-input
                    v-model="loginData.password"
                    placeholder="请输入密码"
                ></el-input>
            </el-form-item>
            <el-form-item
                label=""
            >
                <el-button
                        type="primary"
                        @click="submit('loginData')"
                        class="loginBtn"
                        :loading="loading"
                >登录</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import config from '../config.js';
    export default {
        name: "Login",
        data: function () {
            return {
                loginData: {
                    username: '',
                    password: ''
                },
                systemName: config.systemName
            }
        },
        computed: {
            loading: function () {
                return this.$store.state.login.loading
            }
        },
        methods: {
            submit(formName){
                const _t = this;
                this.$refs[formName].validate(valid => {
                    if(valid) {
                        console.log(_t.loginData)
                        _t.$store.dispatch('login/login', {..._t.loginData})
                    }
                })
            }
        }
    }
</script>

<style lang="stylus">
    .loginView{
        background:url("../assets/login_backImg.png") 0 0 /100% 100% no-repeat;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .loginForm{
        width: 400px;
        padding: 50px 40px;
        background-color: rgba(200,200,200,0.3);
        label.el-form-item__label{
            font-size: 16px;
        }
        border: 1px solid transparent;
    }
    .sysName{
        color: white;
        font-size: 28px;
        margin: 0 auto 20px;
        width: 80%;
    }
    .loginBtn{
        width: 320px;
    }
</style>