import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Users from '../pages/Users.vue';
import AdminLayout from '../layouts/AdminLayout.vue';

const routes = [
    {
        path: '/',
        component: AdminLayout,
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 🟦 Title Change Logic (IMPORTANT)
router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = "Admin Panel";
    }
});

export default router;
