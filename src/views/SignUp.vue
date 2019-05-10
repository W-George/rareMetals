<template>
  <div class="logoWarp">
    <Header></Header>
    <div class="signWarp">
      <h3>欢迎您注册</h3>
      <el-form label-position="right" label-width="80px" :model="formLabelAlign" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formLabelAlign.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <p class="goSignUp" @click="$router.push(`/signin`)">已有账号? 点击登录</p>
      <el-button type="primary" @click="signup">注册</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logoWarp{
  padding-bottom: 300px;
  .signWarp{
    width: 600px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    h3{
      font-size: 20px;
      text-align: left;
      font-weight: normal;
      margin-bottom: 15px;
    }
    .goSignUp{
      line-height: 30px;
      text-align: right;
      font-size: 14px;
    }
  }
}
</style>


<script>
import Header from '../components/header'
import axios from 'axios'
export default {
  methods: {
    signup(){
      const username = this.formLabelAlign.username
      const password = this.formLabelAlign.password
      if ((username.length >= 6 && username.length <= 10) && (password.length >= 6 && password.length <= 10)) {
        axios.post('/api/user/signup',{
          username,
          password
        }).then(result => {
          const data = result.data
          if (data.ret) {
            this.$message.success('注册成功');
            this.$router.push(`/signin`)
          }else{
            this.$message.error(data.data.msg);
          }
        })
      }else{
        this.$message.error('请输入正确的密码或用户名');
      }
    }
  },
  data() {
    return {
      formLabelAlign: {
        username: '',
        password: '',
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  components:{
    Header
  },
}
</script>