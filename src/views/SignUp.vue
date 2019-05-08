<template>
  <div>
    <Header></Header>
    <div class="signWarp">
      <el-form label-position="right" label-width="80px" :model="formLabelAlign" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="formLabelAlign.name"></el-input>
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
.signWarp{
  width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  .goSignUp{
    line-height: 30px;
    text-align: right;
    font-size: 14px;
  }
}
</style>


<script>
import Header from '../components/header'
import axios from 'axios'
export default {
  methods: {
    signup(){
      axios.post('/api/user/signup',{
        username:123456,
        password:123456
      })
    }
  },
  data() {
    return {
      formLabelAlign: {
        name: '',
        password: '',
      },
      rules:{
        name: [
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