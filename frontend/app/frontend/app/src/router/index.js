import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main page",
      component: Main,
    },
    {
      path: "/receive_address",
      name: "receive address",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ReceiveAddress.vue"),
    },
    {
      path: "/scan_qr",
      name: "scan qr",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ScanQr.vue"),
    },
    {
      path: "/select_crypto_to_receive",
      name: "select crypto to receive",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SelectCryptoToReceive.vue"),
    },
    {
      path: "/select_crypto_to_send",
      name: "select crypto to send",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SelectCryptoToSend.vue"),
    },
    {
      path: "/select_network",
      name: "select network",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SelectNetwork.vue"),
    },
    {
      path: "/swap",
      name: "swap",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Swap.vue"),
    },
  ],
});

export default router;
