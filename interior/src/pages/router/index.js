import { createRouter, createWebHistory } from "vue-router";
import Main from "@/components/Main.vue";
import ProjectList from "@/components/ProjectList.vue";
import Blog from "@/components/Blog.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/project",
    component: ProjectList,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/:CatchAll(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});
export default router;
