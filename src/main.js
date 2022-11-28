import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import store from './store'
import router from './route'

import 'normalize.css'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
