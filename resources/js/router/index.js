import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Users from '../pages/Users.vue';
import Login from '../pages/Login.vue';
import AdminLayout from '../layouts/AdminLayout.vue';

const routes = [

    // LOGIN PAGE — NO ADMIN LAYOUT
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { guest: true, title: "Login" }
    },

    // ADMIN LAYOUT — SIDEBAR + TOPBAR INSIDE
    {
        path: '/',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            { 
                path: '', 
                name: 'dashboard', 
                component: Dashboard,
                meta: { title: "Dashboard | Admin Panel" }
            },
            { 
                path: 'users', 
                name: 'users', 
                component: Users,
                meta: { title: "Users | Admin Panel" }
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// TITLE CHANGE LOGIC
router.afterEach((to) => {
    document.title = to.meta.title || "Admin Panel";
});

export default router;
