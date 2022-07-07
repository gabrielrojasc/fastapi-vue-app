import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterView from "@/views/RegisterView";
import LoginView from "@/views/LoginView";
import DashboardView from "@/views/DashboardView";
import ProfileView from "@/views/ProfileView";
import NoteView from "@/views/NoteView";
import EditNoteView from "@/views/EditNoteView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: "/note/:id",
    name: "Note",
    component: NoteView,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/note/:id",
    name: "EditNote",
    component: EditNoteView,
    meta: { requiresAuth: true },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
