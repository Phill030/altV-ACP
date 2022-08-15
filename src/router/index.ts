import { createWebHistory, createRouter } from "vue-router";
import { checkToken } from "../services/auth";
import Login from "../views/Login.vue";
import Panel from "../views/Panel.vue";

// Router
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/panel",
    name: "Panel",
    component: Panel,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware
router.beforeEach(async (to, from, next) => {
  const authRequired = to.meta.requiresAuth;

  const key = localStorage.getItem("key");

  if (!key && authRequired) return next("/");

  const isLoggedIn = await checkToken(key as string);
  if (!authRequired && isLoggedIn) return next("/panel");
  if (authRequired && !isLoggedIn) return next("/");

  next();
});

export default router;
