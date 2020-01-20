import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Posts from '../views/Posts';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
];

const router = new VueRouter({
  routes
});

export default router
