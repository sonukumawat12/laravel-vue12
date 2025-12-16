<template>
  <v-app>
    <v-main class="bg-gradient-to-bl" style="min-height: 100vh;">
      <div class="login-center-container">
        <v-card
          class="mx-auto px-12 py-12"
          elevation="16"
          max-width="700"
          style="
            border-radius: 18px;
            backdrop-filter: blur(23px);
            box-shadow: 0 12px 28px 0 rgba(63,60,156,.09), 0 1.5px 3px rgba(255,82,29,.09);
            border: 1px solid #ffecd7;padding: 48px 40px; width: 100%; min-width: 440px; max-width: 400px;
          "
        >
          <div class="text-center mb-6">
            <h2 class="font-weight-semibold text-2xl mt-4 mb-2">Welcome Back</h2>
            <div class="text-grey-darken-1 mb-1">Sign in to unlock your dashboard</div>
          </div>
          <v-form
            v-model="valid"
            @submit.prevent="login"
            class="w-100"
            style="max-width:540px;margin:0 auto;width:100%;"
          >
            <v-text-field
              v-model="email"
              label="Email"
              :rules="emailRules"
              prepend-inner-icon="mdi-email"
              type="email"
              autocomplete="username"
              variant="outlined"
              color="deep-orange"
              :disabled="loading"
              required
              class="mb-3"
            />

            <v-text-field
              v-model="password"
              label="Password"
              :rules="passwordRules"
              prepend-inner-icon="mdi-lock"
              :type="showPassword ? 'text' : 'password'"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPassword = !showPassword"
              autocomplete="current-password"
              variant="outlined"
              color="deep-orange"
              :disabled="loading"
              required
              class="mb-4"
            />

            <v-alert
              v-if="error"
              type="error"
              dense
              class="mb-3"
              border="start"
              color="deep-orange darken-3"
            >{{ error }}</v-alert>

            <v-btn
              :loading="loading"
              :disabled="!valid || loading"
              block
              color="deep-orange"
              size="large"
              type="submit"
              class="mt-1 text-base font-weight-bold"
              elevation="4"
            >
              <template #loader>
                <v-progress-circular indeterminate color="white" size="20" width="2"/>
              </template>
              Login
            </v-btn>

            <div v-if="loadingUser" class="flex justify-center mt-4 mb-0">
              <v-progress-circular indeterminate color="indigo" size="32" width="3"/>
            </div>
          </v-form>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../plugins/axios";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

// Vuetify 3 (composables and icons load on root)
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const error = ref("");
const valid = ref(false);
const loading = ref(false);
const loadingUser = ref(true);

const emailRules = [
  v => !!v || "Email is required",
  v => /.+@.+\..+/.test(v) || "E-mail must be valid",
];
const passwordRules = [
  v => !!v || "Password is required",
  v => (v && v.length >= 6) || "Min 6 characters",
];

const store = useUserStore();
const router = useRouter();

onMounted(async () => {
  // Simulate user loading - check token
  try {
    loadingUser.value = true;
    await new Promise(resolve => setTimeout(resolve, 350)); // nice smooth effect
    store.loadUserFromStorage();
    if (store.user) {
      await router.replace("/"); // Already logged in!
    }
  } finally {
    loadingUser.value = false;
  }
});

async function login() {
  error.value = "";
  if (!valid.value) return;
  loading.value = true;
  try {
    // Stylish API call delay for UX (premium feel)
    await new Promise(res => setTimeout(res, 450));
    const res = await api.post("/login", {
      email: email.value,
      password: password.value
    });

    store.setUser({
      user: res.data.data.user,
      token: res.data.data.token
    });

    // router to dashboard
    await router.replace("/");
  } catch (err) {
    // Friendly error messaging
    error.value =
      err.response?.data?.message ||
      (err.response?.data?.errors
        ? Object.values(err.response.data.errors).flat().join(" ")
        : "Invalid login. Please check your credentials.");
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.bg-gradient-to-bl {
  /* fallback BG for premium look */
  background: linear-gradient(135deg, #6366f1 0%, #ffecd7 58%, #fff9ea 100%);
}
.font-weight-semibold {
  font-weight: 600 !important;
}
.login-center-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>