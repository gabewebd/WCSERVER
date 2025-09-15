import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminForm from '../views/AdminForm.vue';
import StudentForm from '../views/StudentForm.vue';
import UserForm from '../views/UserForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adminForm',
    name: 'AdminForm',
    component: AdminForm
  },
  {
    path: '/studentForm',
    name: 'StudentForm',
    component: StudentForm
  },
  {
    path: '/userForm',
    name: 'UserForm',
    component: UserForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;