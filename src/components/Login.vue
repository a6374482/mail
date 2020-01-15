<!-- 登录组件 -->
<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/img/logo.png" />
      </div>
      <!-- 登录表单开始 -->
      <div>
        <el-form
          ref="loginformref"
          :rules="loginrule"
          :model="loginform"
          class="login_form"
          label-width="0px"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginform.username"
              placeholder="请输入用户名"
              prefix-icon="iconfont  icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginform.password"
              placeholder="请输入密码"
              prefix-icon="iconfont icon-3702mima"
            ></el-input>
          </el-form-item>
          <el-form-item class="log_btn">
            <el-button type="primary" @click="login()">登录</el-button>
            <el-button type="info" @click="reset()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单的数据绑定对象
      loginform: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则 element规定
      loginrule: {
        username: [
          { required: true, message: '用户名不为空', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码不为空', trigger: 'blur' }]
      }
    }
  },
  created(){
      // this.islogin();
  },
  methods: {
    reset: function() {
      //调用refs的属性对象选择  restfields为清空此对象数据
      this.$refs.loginformref.resetFields()
    },
    login() {
        this.$router.push('/home')
      // //调用refs的属性对象选择  validate为验证此对象数据正确性
      // this.$refs.loginformref.validate(async valid => {
      //   console.log(valid)
      //   if (valid) {
      //     //不加await是个promiss对象 加了await那前面紧挨着的方法要加async修饰
      //     //加了await返回一个axios帮忙封装好的对象 其中data才是后台真正发来的数据
      //     const result = await this.$http.post('login', this.loginform)
      //     const status = result.data.meta.status
      //     if (status != 200) {
      //       return this.$message.error('登陆失败 ')
      //     } else {
      //       console.log(result.data.data.token)
      //       window.sessionStorage.setItem('token', result.data.data.token)
      //       this.$message.success('登陆成功 正在跳转 ')
      //       this.$router.push('/home')
      //     }
      //   }
      // })
    },
    //  islogin(){
    //    const token=sessionStorage.getItem('token')
    //    console.log(token)
    //    if(token!=null){
    //       this.$router.push('/home')
    //    }
    //  }
  }
}
</script>
<style lang='less' scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 650px;
  height: 500px;
  background-color: #fff;
  border-radius: 3px;
  // 居中
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.log_btn {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}
.el-form-item{
  height: 100px;
}
.el-input__inner {
  
    height: 100px;
    font-size: 13px;
    box-shadow: none;
    border: 1px solid #e9e9e9;
}
 
.el-input__inner:hover {
    border-color: #e9e9e9;
}
 
.el-input__inner:focus {
    border-color: #42a5f5;
    box-shadow: none;
    transition-duration: .5s;
}
 
.el-input__inner::-webkit-input-placeholder {
    line-height: 20px;
}
 
.el-input__inner, .el-checkbox__inner, .el-textarea__inner, .el-button {
    border-radius: 0;
}
</style>