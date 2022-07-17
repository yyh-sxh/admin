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

//全量引入antd样式
import 'ant-design-vue/dist/antd.css'

app.mount('#app')
