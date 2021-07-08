import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import Main from "../components/Main.vue";
import Notice from '../components/Notice.vue';
import NoticeList from '../components/NoticeList.vue';
import Photo from "../components/Photo.vue";
import Uploader from "../components/Uploader.vue";
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/noticelist',
    name: 'NoticeList',
    component: NoticeList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/uploader',
    name: 'Uploader',
    component: Uploader,
    meta: {
      requiresAuth: true,
    },  
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.getAccount) {
      next();
      return;
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
