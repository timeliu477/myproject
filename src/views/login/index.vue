<template>
  <div class="login-container">
    <!--
        配置Form表单验证：
        1、必须给 el-form 组件绑定 model 为表单数据对象
        表单数据对象：例如 :model="loginData" 中的 loginData
        2、给需要验证的表单项 el-form-item 绑定 prop 属性
        注意：prop 属性需要指定表单对象中的数据名称
        3、通过 el-form 的 rules 属性配置验证规则,再去data中绑定数据
    -->
    <el-form class="login-form"
             ref="form"
             :model="loginData"
             :rules="formRules">
      <div class="login-head"></div>
      <el-form-item prop="login_account">
        <el-input v-model="loginData.login_account"
                  placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="login_password">
        <el-input v-model="loginData.login_password"
                  placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-checkbox class="login-check"
                   v-model="checked">我已阅读并同意条款</el-checkbox>
      <el-form-item>
        <el-button class="login-btn"
                   type="primary"
                   :loading="loginLoading"
                   @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      loginData: {
        login_account: '', // 账号
        login_password: '' // 密码
      },
      // 协议的默认状态
      checked: false,
      // 登录的loading状态
      loginLoading: false,
      // 单验证规则配置，是一个对象
      formRules: {
        // 要验证的数据名称 prop 中的name: 规则列表是一个数组[]
        login_account: [
          // required: true 表示必填项，不能为空，trigger:触发验证的机制  'blur'指失去焦点时候触发
          { required: true, message: '账号不能为空', trigger: 'blur' },
          { len: 11, message: '账号长度为11', trigger: 'blur' }
        ],
        login_password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // trigger:触发验证的机制  'change'指输入过程中动态检验
          { min: 6, message: '密码长度不得小于6位数', trigger: 'change' }
        ]
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    onLogin () {
      // 获取表单数据（根据接口要求绑定数据）
      const loginData = this.loginData// eslint-disable-line no-unused-vars
      // 表单验证
      // 验证通过，提交登录
      // 开启登陆中loading
      this.loginLoading = true
      request({
        method: 'POST',
        url: '/user_login/Login',
        // data 用来设置 POST 请求体
        data: loginData
        // 使用 .then 拿到请求结果
      }).then(res => {
        console.log(res.data)
        // 处理后端响应结果
        // 登录成功
        if (res.data.Result == 1) {//eslint-disable-line
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          this.loginLoading = false
        } else {
          this.$message.error('登陆失败，账号或密码错误')
          this.loginLoading = false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./地球.png") no-repeat;
  // 让图片显示完整 cover属性是让图片短边显示出来
  //  contain是让长边显示出来
  background-size: cover;
  .login-head {
    width: 247px;
    height: 50px;
    background: url("./logo_2017_v1.png") no-repeat;
    margin-bottom: 40px;
    //只对该盒子取消父盒子统一设置的padding值
    // 将子元素的margin-left和margin-right设为负的父元素padding值
    //     margin-left: -50px;（-50px = 父盒子padding值）
    //     margin-top: -50px;（-50px = 父盒子padding值）
    margin-left: -50px;
    margin-top: -50px;
    // 单独取消父盒子的padding值影响 还可以子绝父相
    // 父元素 position 设为 relative 或 absolute。
    // 子元素不设宽高， 给定top、right、bottom、left 四个值来基于父元素的宽高确定自身宽高。
    // 缺点就是父元素不能被该子元素撑开，必须给定宽高，或由其他子元素撑开。
  }
  .login-form {
    background-color: rgba(48, 48, 48, 0.6);
    // background: url("./小巷.png") no-repeat;
    padding: 50px;
    min-width: 300px;
    .login-check {
      color: black;
      font-weight: 600;
    }
    .login-btn {
      width: 100%;
      margin-top: 10px;
      background-color: rgb(247, 20, 20);
      border: 1px solid red;
    }
  }
}
</style>
