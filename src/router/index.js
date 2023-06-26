import { createRouter, createWebHistory } from 'vue-router';
import Home_test from '../views/Home_test.vue';
import About_test from '../views/About_test.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home_test',
      component: Home_test
    },
    {
      path: '/about',
      name: 'about_test',
      component: About_test
    }
  ]
});

export default router;
