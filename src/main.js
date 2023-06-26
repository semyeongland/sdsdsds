import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
library.add(fas);

app.config.globalProperties.axios = axios; // axios를 Vue 앱의 전역 속성으로 등록합니다.

app.use(router);
app.mount('#app');
