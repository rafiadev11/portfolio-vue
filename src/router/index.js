import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";
import Contact from "@/views/Contact";
import Education from "@/views/Education";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/education",
    name: "Education",
    component: Education
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
