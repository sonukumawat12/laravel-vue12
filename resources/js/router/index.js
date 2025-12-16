import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/user';

import Dashboard from '../pages/Dashboard.vue';
import Users from '../pages/Users.vue';
import Login from '../pages/Login.vue';
import AdminLayout from '../layouts/AdminLayout.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { guest: true, title: "Login" }
    },
    {
        path: '/',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '', name: 'dashboard', component: Dashboard, meta: { title: "Dashboard | Admin Panel" } },
            { path: 'users', name: 'users', component: Users, meta: { title: "Users | Admin Panel" } },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// ROUTE GUARD
router.beforeEach((to, from, next) => {
    const store = useUserStore();
    store.loadUserFromStorage(); // load from localStorage

    if (to.meta.requiresAuth && !store.user) {
        console.log('adsadsadasdsa222 333333333');
        // Not logged in, redirect to login
        return next({ path: '/login' });
    }

    if (to.meta.guest && store.user) {
        // Already logged in, redirect to dashboard
        return next({ path: '/' });
    }

    next();
});

// TITLE CHANGE LOGIC
router.afterEach((to) => {
    document.title = to.meta.title || "Admin Panel";
});

export default router;
