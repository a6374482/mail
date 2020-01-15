<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form ref="formref" :rules="rule" :model="form" class="login_form" label-width="0px">
        <el-form-item prop="orderId">
          <el-input v-model="form.orderId" placeholder="请输入订单号" prefix-icon="iconfont  icon-user" ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span=12>
        <el-form-item class="onerow" prop="productCode">
          <el-input  v-model="form.productCode " placeholder="请输入产品编号" prefix-icon="iconfont  icon-user" ></el-input>
        </el-form-item>
          </el-col>
          <el-col :span=12>
        <el-form-item  prop="productName">
          <el-input v-model="form.productName " placeholder="请输入产品名称" prefix-icon="iconfont  icon-user" ></el-input>
        </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span=12>
        <el-form-item class="onerow" prop="groupId">
          <el-input  v-model="form.groupId  " placeholder="请输入班组ID" prefix-icon="iconfont  icon-user" ></el-input>
        </el-form-item>
          </el-col>
          <el-col :span=12>
        <el-form-item prop="groupName">
          <el-input v-model="form.groupName " placeholder="请输入班组名称" prefix-icon="iconfont  icon-user" ></el-input>
        </el-form-item>
          </el-col>
        </el-row>
        <el-form-item prop="staffID">
          <el-input  v-model="form.staffID" placeholder="请输入员工编号" prefix-icon="iconfont  icon-user" ></el-input>
        </el-form-item>
        <el-form-item prop="groupHours">
          <el-input v-model="form.groupHours " placeholder="请输入工时" prefix-icon="iconfont  icon-user" ></el-input>
        </el-form-item>
         <el-form-item class="form_btn">
            <el-button type="primary" @click="commit()" size="mini" >提交</el-button>
            <el-button type="info" @click="reset()" size="mini">重置</el-button>
            <el-button type="info" @click="postt()" size="mini">重置</el-button>
          </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        orderId: "",
        productCode:'',
        productName:'',
        groupId:'',
        groupName:'',
        staffID:'',
        groupHours:''
      },
       rule: {
        groupHours: [
          { required: true, message: '工时不为空否则后端会出异常', trigger: 'blur' },
       
        ],
       
      }
    };
  },methods:{
   async postt(){
       const { data: res } = await this.$http.post('user/add', this.form)
          console.log(res)
         if (res.state !== 200) {
        return this.$message.error(res.message)
         }
        
        this.$message.success(res.message)
        console.log(res)
    },
      async commit(){
        const { data: res } = await this.$http.get('user/add', {
          params:this.form})
          console.log(res)
         if (res.state !== 200) {
        return this.$message.error(res.message)
         }
        
        this.$message.success(res.message)
        console.log(res)
      },
      reset(){
        this.$refs.formref.resetFields()
      }
  }
};
</script>

<style lang=
less>
.form_btn {
  display: flex;
  justify-content: flex-end;
  
}
.onerow{
  margin-right: 15px;
}
</style>