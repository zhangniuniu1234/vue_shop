import Vue from 'vue'
// import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入弹框提示组件
import { Button, Message, Form, FormItem, Input } from 'element-ui'

// Vue.use(Element)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
