<template>
    <div class="h-screen d-flex align-center justify-center bg-grey-lighten-4">
      <v-card width="360" class="pa-6 text-center" elevation="6">
        
        <v-progress-circular
          indeterminate
          size="48"
          width="5"
          color="primary"
          class="mb-4"
        />
  
        <h3 class="text-h6 font-weight-bold">Logging you out...</h3>
        <p class="text-body-2 text-grey mt-2">
          Please wait a moment
        </p>
      </v-card>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useUserStore } from "@/stores/user";
  
  const router = useRouter();
  const store = useUserStore();
  
  onMounted(() => {
    setTimeout(() => {
      store.logout();      // clear user + token
      router.replace("/login");
    }, 1200);  // wait 1.2 sec for smooth animation
  });
  </script>
  
  <style scoped>
  .bg-grey-lighten-4 {
    background-color: #f3f4f6;
  }
  </style>
  