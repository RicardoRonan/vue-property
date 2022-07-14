import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/Landing.vue"),
  },
  {
    path: "/",
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/allProperties",
    name: "AllProperties",
    component: () => import("../views/allProperties.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/admin.vue"),
  },
  {
    path: "/allProperties/:id",
    name: "propertyDetails",
    component: () => import("../views/propertyDetails.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
