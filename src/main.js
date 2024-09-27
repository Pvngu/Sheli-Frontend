import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './axios'
import './style.css'
import './less/custom.less'
import App from './views/App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import MenuPageFilter from './components/layouts/MenuPageFilters.vue'
import MenuPageTableContent from './components/layouts/MenuPageTableContent.vue'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Antd);

app.component('menu-page-filters', MenuPageFilter)
   .component('menu-page-table-content', MenuPageTableContent);

app.mount('#app');
