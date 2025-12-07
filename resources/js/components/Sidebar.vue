<template>
    <v-navigation-drawer
      app
      v-model="drawer"
      :width="drawer ? 260 : 72"
      :rail="!drawer"
      rail-width="72"
      class="sidebar-drawer"
      :class="{ 'pa-4': drawer, 'px-2': !drawer }"
    >
      <!-- Top Dashboard -->
      <div
        class="text-white rounded-lg mb-4 d-flex align-center pa-3 dashboard-item"
        @click="navigateToDashboard"
        style="cursor: pointer; background-color: var(--primary-color);"
      >
        <v-icon class="mr-2">mdi-view-dashboard-outline</v-icon>
        <span v-if="drawer" class="flex-grow-1">Dashboard</span>
      </div>
  
      <!-- Category -->
      <p v-if="drawer" class="text-grey-darken-1 text-caption font-weight-medium mb-2">Application</p>
  
      <v-list density="comfortable" nav>
        <v-list-item
          prepend-icon="mdi-account-group"
          title="Users"
          to="/users"
          value="users"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-email-outline"
          title="Email"
        ></v-list-item>
  
        <v-list-item
          prepend-icon="mdi-forum-outline"
          title="Chat"
        ></v-list-item>
  
        <v-list-item
          prepend-icon="mdi-calendar-month-outline"
          title="Calendar"
        ></v-list-item>
  
        <v-list-item
          prepend-icon="mdi-view-kanban"
          title="Kanban"
        ></v-list-item>
  
        <!-- Invoice with dropdown -->
        <v-list-group
          prepend-icon="mdi-receipt-text-outline"
          value="invoice"
        >
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Invoice" />
          </template>
  
          <v-list-item title="List" />
          <v-list-item title="Details" />
        </v-list-group>
  
        <!-- AI Application -->
        <v-list-group
          prepend-icon="mdi-robot-excited-outline"
          value="ai"
        >
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Ai Application" />
          </template>
  
          <v-list-item title="Chatbot" />
          <v-list-item title="Analytics" />
        </v-list-group>
  
        <!-- Crypto -->
        <v-list-group
          prepend-icon="mdi-bitcoin"
          value="crypto"
        >
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Crypto Currency" />
          </template>
  
          <v-list-item title="Market" />
          <v-list-item title="Wallet" />
        </v-list-group>
      </v-list>
  
      <!-- UI Elements -->
      <p v-if="drawer" class="text-grey-darken-1 text-caption font-weight-medium mt-4 mb-2">
        UI Elements
      </p>
  
      <v-list density="comfortable" nav>
        <v-list-group prepend-icon="mdi-view-grid-outline" value="components">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Components" />
          </template>
          <v-list-item title="Buttons" />
          <v-list-item title="Cards" />
        </v-list-group>
  
        <v-list-group prepend-icon="mdi-form-select" value="forms">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Forms" />
          </template>
          <v-list-item title="Form Elements" />
          <v-list-item title="Form Layouts" />
        </v-list-group>
  
        <v-list-group prepend-icon="mdi-table" value="table">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Table" />
          </template>
          <v-list-item title="Basic Table" />
          <v-list-item title="Data Table" />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { reactive, ref, inject } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const drawer = inject('sidebarDrawer', ref(true));
  
  const open = reactive({
    dashboard: false,
  });
  
  const toggle = (key) => {
    open[key] = !open[key];
  };

  const navigateToDashboard = () => {
    router.push('/');
  };
  </script>
  
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s ease;
}

:deep(.v-list-item) {
  border-radius: 8px;
  transition: background-color 0.2s ease;
  margin-bottom: 4px;
}

:deep(.v-list-item:hover) {
  background-color: rgba(0, 0, 0, 0.04) !important;
}

:deep(.v-list-item:hover .v-list-item__prepend > .v-icon) {
  color: rgb(var(--v-theme-primary)) !important;
}
:deep(.v-list-item__append) {
    display: block!important;
}
:deep(.v-list-item--active) {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
}

:deep(.v-list-item--active:hover) {
  background-color: rgba(var(--v-theme-primary), 0.15) !important;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s ease;
}

:deep(.v-list-item) {
  border-radius: 8px;
  transition: background-color 0.2s ease;
  margin-bottom: 4px;
}

:deep(.v-list-item:hover) {
  background-color: rgba(0, 0, 0, 0.04) !important;
}

:deep(.v-list-item:hover .v-list-item__prepend > .v-icon) {
  color: rgb(var(--v-theme-primary)) !important;
}

:deep(.v-list-item--active) {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
}

:deep(.v-list-item--active:hover) {
  background-color: rgba(var(--v-theme-primary), 0.15) !important;
}

/* Dashboard item primary background */
.dashboard-item {
  background-color: var(--primary-color) !important;
}

/* Remove hover effect from Dashboard item */
.dashboard-item:hover {
  background-color: var(--primary-color) !important;
}

:deep(.dashboard-item:hover .v-list-item__prepend > .v-icon) {
  color: white !important;
}

.dashboard-item .v-icon {
  color: white !important;
}

/* --- New Styles for Scrollbar and Scrolling --- */

/* 1. Target the navigation drawer's content area. 
   Vuetify often wraps the scrollable content in a container like .v-navigation-drawer__content.
   We use :deep() to penetrate the scoped boundaries. */
:deep(.v-navigation-drawer__content) {
  /* For smooth scrolling */
  scroll-behavior: smooth;
  
  /* Hides the default scrollbar for various browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* 2. WebKit browsers (Chrome, Safari) specific scrollbar styling */
:deep(.v-navigation-drawer__content)::-webkit-scrollbar {
  width: 4px; /* Thin width */
  height: 4px;
}

/* 3. Make the track transparent/invisible */
:deep(.v-navigation-drawer__content)::-webkit-scrollbar-track {
  background: transparent;
}

/* 4. Style the thumb (the moving part of the scrollbar) */
:deep(.v-navigation-drawer__content)::-webkit-scrollbar-thumb {
  background-color: rgba(158, 158, 158, 0.5); /* Light gray, semi-transparent */
  border-radius: 4px; /* Rounded corners for the thumb */
}

/* 5. Optional: Change thumb color on hover */
:deep(.v-navigation-drawer__content)::-webkit-scrollbar-thumb:hover {
  background-color: rgba(158, 158, 158, 0.8);
}

/* Sidebar touches top */
.sidebar-drawer {
  top: 0 !important;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

:deep(.v-navigation-drawer) {
  top: 0 !important;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

:deep(.v-navigation-drawer__content) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Rail mode styles */
:deep(.v-navigation-drawer--rail) .v-list-item__prepend {
  width: 100%;
  justify-content: center;
}

:deep(.v-navigation-drawer--rail) .v-list-item {
  justify-content: center;
  padding: 8px !important;
}

:deep(.v-navigation-drawer--rail) .v-list-item__content {
  display: none;
}

:deep(.v-navigation-drawer--rail) .v-list-group__items {
  display: none;
}

/* Smooth transitions for list groups to prevent jitter */
:deep(.v-list-group__items) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  overflow: hidden;
}

:deep(.v-list-group__header) {
  transition: all 0.2s ease !important;
}

:deep(.v-list-group__header .v-list-item) {
  transition: all 0.2s ease !important;
}

/* Prevent layout shift during expansion */
:deep(.v-list-group) {
  will-change: height;
}

:deep(.v-list-group__items .v-list-item) {
  transition: opacity 0.2s ease, transform 0.2s ease !important;
}

/* Smooth chevron rotation */
:deep(.v-list-group__header .v-icon) {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  transform-origin: center;
}

/* Fix for smooth expand/collapse */
:deep(.v-list-group--active .v-list-group__header .v-icon) {
  transform: rotate(180deg);
}
</style>
  