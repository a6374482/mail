import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
// 弹窗提示 小  短暂
Vue.prototype.$message = Element.Message
// 弹窗提示 大 持久
Vue.prototype.$confirm =Element. MessageBox.confirm