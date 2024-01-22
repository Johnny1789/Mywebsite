import {createRouter, createWebHashHistory} from "vue-router";
import report from './report';
import stock from './stock';
import money from './money';
import account from './account';
import manage_data from './manage_data';
import staff from './staff';
import user from './user';

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("../pages/home.vue"),
    meta: {
      title: "home",
      requireAuth: true
    },
  },
  {
    name: "managefood",
    path: "/manage_food",
    component: () => import("../pages/manageitem/manage_food.vue"),
    meta: {
      title: "manage food",
      requireAuth: true
    },
  },
  {
    name: "manage_drink",
    path: "/manage_drink",
    component: () => import("../pages/manageitem/manage_drink.vue"),
    meta: {
      title: "manage drink",
      requireAuth: true
    },
  },
  {
    name: "sale",
    path: "/sale",
    component: () => import("../pages/sale/sale.vue"),
    meta: {
      title: "sale",
      requireAuth: true
    },
  },
  ...report,
  ...stock,
  ...money,
  ...account,
  ...manage_data,
  ...staff,
  ...user,
];

const index = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default index;