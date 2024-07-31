// Router
import { createRouter as _createRouter, createWebHistory } from 'vue-router';
// Components
import HomeView from '../views/HomeView.vue';
import CardDetailView from '../views/CardDetailView.vue';

// Create routes
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'CardDetailView',
    component: CardDetailView
  }
];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}
