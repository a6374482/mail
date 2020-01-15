<template>
    <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
        <div>
          <img src="../assets/img/heima.png" />
          <span>用户管理系统</span>
        </div>
        <el-button type="info" @click="logout()">退出登录</el-button>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 侧边栏 -->   
         <!--  -->
        <el-aside width='60px'>
          
          <!-- menu属性请到element官网查看 -->
          <!-- 一级菜单index用于区分 二级菜单index用于跳转 menu中router属性开启路由
          collapse是否折叠 collapse-transition折叠动画 -->
          <el-menu :default-active="this.$route.fullPath"  router  background-color="#333744" text-color="#fff" active-text-color="#409EFF" :unique-opened='true' >
            <!-- 一级菜单 -->
              <div class="menudiv"><span>功能列表</span></div>
              <el-menu-item style="padding:0px" index="/user" >
                  <span>录入用户</span>                
              </el-menu-item>
              <el-menu-item style="padding:0px;color:pink" index="/use" >
                  <span>功能2</span>                
              </el-menu-item>
              <el-menu-item style="padding:0px;color:pink" index="/use" >
                  <span>功能...</span>                
              </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 右侧主体区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  
</template>

<script>
export default {
  data(){
    return {    
      iscollapse:true,
    }
  },
  methods: {
    logout() {
      
      this.$router.push('/login')
    },
    changeic(){
      this.iscollapse=!this.iscollapse;
    },
    
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  color: #fff;
  font-size: 20px;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    > span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}
.iconfont{
  margin-right: 10px;
}
.zhedie{
  color:#fff;
  text-align: center;
  cursor: pointer;
}
.el-menu{
  border: 0px;
  
}
.el-menu-item{
  font-size: 20px;
  text-align: center;
}
.menudiv{
  text-align: center;
  color: grey;
  font-size: 30px;
  margin-top: 5px;
   margin-bottom: 5px;
   
  
}
</style>