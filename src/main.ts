import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/iconfont.css'
import './assets/style.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import vue3PreviewImage from 'vue3-preview-image'
import router from './router'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import print from 'vue3-print-nb'
import DataVVue3 from '@kjgl77/datav-vue3'


const pinia = createPinia()
pinia.use(piniaPluginPersist)

const app = createApp(App);
app.use(ElementPlus, { locale })
app.use(pinia)
app.use(DataVVue3)
app.use(print)
app.use(router)
app.use(vue3PreviewImage)
app.mount('#app')