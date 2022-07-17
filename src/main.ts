import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

//路由配置
import router from './router'
app.use(router)

//vuex配置
import store from './store'
app.use(store)

//引入UI
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
app.use(Antd)


app.mount('#app')
