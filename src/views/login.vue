<template>
  <el-form :model="form" :rules="rules">
        <h3 class="login_title">测试用例管理系统登录</h3>
        <el-from-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-from-item>
        <el-from-item label="密码" prop="password">
             <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-from-item>
    </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" }
        ],
        password: [{ required: true, trigger: "blur", mesage: "请输入密码" }]
      }
    }
  }
}
</script>