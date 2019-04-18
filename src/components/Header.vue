<template>
    <div class="header">
        <img src="../assets/logo.png" alt="logo" class="logoImg">
        <div class="title">{{systemName}}</div>
        <div style="flex:1;"></div>
        <img src="../assets/user.png" alt="用户头像" class="avatar">
        <el-dropdown @command="handleMenuItemClick">
            <i class="el-icon-arrow-down el-icon--right"></i>
            <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command="about">关于我们</el-dropdown-item>
                <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import router from '../router';
    export default {
        name: "Header",
        props: {
            systemName: String
        },
        methods: {
            handleMenuItemClick(action) {
                if(action === 'logout') {
                    Object.keys(Cookies.get()).forEach(function(cookie) {
                        const attributes = {};
                        Cookies.remove(cookie, attributes);
                        router.push('/login');
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 100%;
        display: flex;
        align-items: center;
        background: #4d9eff;
        padding: 0 16px;
        color:white;
        font-size: 22px;
    }
    .logoImg{
        width: 40px;
        margin-right: 16px;
    }
    .avatar{
        width: 32px;
        height: 32px;
    }
    .header .el-icon-arrow-down{
        color: white;
    }
</style>