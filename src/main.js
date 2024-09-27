import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './axios'
import './style.css'
import App from './views/App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Antd);

app.mount('#app')