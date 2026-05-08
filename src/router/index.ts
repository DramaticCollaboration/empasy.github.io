import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomePage.vue') },
  { path: '/hydra', name: 'Hydra', component: () => import('../views/HydraPage.vue') },
  { path: '/syncboot', name: 'SyncBoot', component: () => import('../views/SyncBootPage.vue') },
  { path: '/synceta', name: 'SyncEta', component: () => import('../views/SyncEtaPage.vue') },
  { path: '/synccms', name: 'SyncCMS', component: () => import('../views/SyncCMSPage.vue') },
  { path: '/syncapim', name: 'SyncAPIM', component: () => import('../views/SyncAPIMPage.vue') },
  { path: '/syncshop', name: 'SyncShop', component: () => import('../views/SyncShopPage.vue') },
  { path: '/cases', name: 'UseCases', component: () => import('../views/UseCasesPage.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/ContactPage.vue') },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
