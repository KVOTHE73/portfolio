import { createRouter, createWebHistory } from "vue-router";
import Preview from "../views/MainPreview.vue";
import NotFound from "../views/PageNotFound.vue";

const routes = [
   {
    path: "/",
    name: "Preview",
    component: Preview,
    meta: {
      title: "Nacho Rodríguez || Portfolio",
    },
  },
  {
    path: "/home-dark",
    name: "HomeDark",
    meta: {
      title: "Nacho Rodríguez || Portfolio",
    },
    component: () => import("../views/HomeDark.vue")
  },
  {
    path: "/home-light",
    name: "HomeLight",
    meta: {
      title: "Nacho Rodríguez || Portfolio",
    },
    component: () => import("../views/HomeLight.vue")    
  },
  {
    path: "/contact",
    component: () => import("@/components/portfolio/ContactForm.vue"),
    name: "ContactForm",
    meta: {
      title: "Nacho Rodríguez || Portfolio",
    },
  },
  // header para linkeding y el cv en pdf
  {
    path: "/linkedin",
    component: () => import("../views/Fondo_linkedin.vue"),
    meta: {
      title: "Nacho Rodríguez || Portfolio",    
    },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      title: "Not Found || Nacho Rodríguez - Portfolio",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
  window.scrollTo(0, 0);
});

export default router;
