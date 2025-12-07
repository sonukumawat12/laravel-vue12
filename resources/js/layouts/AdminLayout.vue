<template>
    <v-app>
      <Sidebar />
      <Topbar />
  
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref, provide } from 'vue';
  import Sidebar from '../components/Sidebar.vue';
  import Topbar from '../components/Topbar.vue';

  const sidebarDrawer = ref(true);
  provide('sidebarDrawer', sidebarDrawer);
  </script>

  <style scoped>
  :deep(.v-main) {
    padding-top: 64px !important;
    transition: padding-left 0.3s ease;
  }
  </style>
  