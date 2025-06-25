import { createApp } from 'vue'
import App from './App.vue'
import XcElement, { zhCn } from 'xc-element'
import 'xc-element/dist/index.css'

createApp(App).use(XcElement, { locale: zhCn }).mount('#app')
