import { createApp } from 'vue'
import App from './App.vue'
import XcElement from 'xc-element'
import { XcButton, XcAlert } from 'xc-element'
// import "xc-element/dist/index.css";
import 'xc-element/dist/theme/Button.css'
import 'xc-element/dist/theme/Alert.css'

createApp(App).use(XcElement).use(XcButton).use(XcAlert).mount('#app')
