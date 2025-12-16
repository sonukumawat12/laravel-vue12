import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const token = ref(null);

    function setUser(userData) {
        user.value = userData.user;
        token.value = userData.token;
        localStorage.setItem('user', JSON.stringify(user.value));
        localStorage.setItem('token', token.value);
    }

    function logout() {
        user.value = null;
        token.value = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    function loadUserFromStorage() {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
    
        if (storedUser && storedUser !== "undefined" && storedToken && storedToken !== "undefined") {
            try {
                user.value = JSON.parse(storedUser);
                token.value = storedToken;
            } catch (e) {
                console.error("Failed to parse user from localStorage", e);
                user.value = null;
                token.value = null;
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        } else {
            // Clear invalid entries
            user.value = null;
            token.value = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }
    

    return { user, token, setUser, logout, loadUserFromStorage };
});
