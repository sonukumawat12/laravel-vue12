<template>
  <v-app-bar
    app
    elevation="1"
    color="white"
    height="64"
    :class="['topbar', drawer ? 'sidebar-open' : 'sidebar-closed']"
  >
    <v-container class="d-flex align-center pa-0" fluid>
      <!-- Hamburger Menu -->
      <v-btn
        icon
        variant="text"
        size="small"
        @click="toggleSidebar"
        class="mr-2"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- Search Bar -->
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        placeholder="Search"
        variant="outlined"
        density="compact"
        hide-details
        class="search-field"
        style="max-width: 400px;"
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Right Side Icons -->
      <div class="d-flex align-center ga-2">
        <!-- Theme Toggle -->
        <v-btn
          icon
          variant="text"
          size="small"
        >
          <v-icon>mdi-weather-sunny</v-icon>
        </v-btn>

        <!-- Language -->
        <v-btn
          icon
          variant="text"
          size="small"
        >
          <v-icon>mdi-web</v-icon>
        </v-btn>

        <!-- Messages -->
        <v-btn
          icon
          variant="text"
          size="small"
        >
          <v-badge
            content="3"
            color="error"
            overlap
          >
            <v-icon>mdi-email-outline</v-icon>
          </v-badge>
        </v-btn>

        <!-- Notifications -->
        <v-menu location="bottom end" offset="8">
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              variant="text"
              size="small"
              v-bind="props"
            >
              <v-badge
                content="5"
                color="error"
                overlap
              >
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <v-card width="300" class="notification-card">
            <!-- Header -->
            <v-card-item class="text-white pa-2 d-flex align-center justify-space-between notification-header" style="background-color: var(--primary-color);">
              <div class="text-body-2 text-white font-weight-bold">Notifications</div>
              <v-btn
                icon
                variant="text"
                size="x-small"
                class="text-white"
              >
                <v-icon size="16">mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-item>

            <!-- Notification List -->
            <v-list density="compact" class="pa-1" max-height="320" style="overflow-y: auto;">
              <!-- Notification Item 1 -->
              <v-list-item class="notification-item">
                <template v-slot:prepend>
                  <v-avatar size="32" color="primary" class="mr-2">
                    <v-icon color="white" size="18">mdi-account-plus</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-caption font-weight-medium">
                  New user registered
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption" style="font-size: 11px;">
                  John Smith just joined
                </v-list-item-subtitle>
                <template v-slot:append>
                  <span class="text-caption text-grey" style="font-size: 10px;">2m</span>
                </template>
              </v-list-item>

              <v-divider class="my-1"></v-divider>

              <!-- Notification Item 2 -->
              <v-list-item class="notification-item">
                <template v-slot:prepend>
                  <v-avatar size="32" color="success" class="mr-2">
                    <v-icon color="white" size="18">mdi-check-circle</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-caption font-weight-medium">
                  Payment received
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption" style="font-size: 11px;">
                  $1,250 from client ABC
                </v-list-item-subtitle>
                <template v-slot:append>
                  <span class="text-caption text-grey" style="font-size: 10px;">5m</span>
                </template>
              </v-list-item>

              <v-divider class="my-1"></v-divider>

              <!-- Notification Item 3 -->
              <v-list-item class="notification-item">
                <template v-slot:prepend>
                  <v-avatar size="32" color="warning" class="mr-2">
                    <v-icon color="white" size="18">mdi-alert</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-caption font-weight-medium">
                  System update required
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption" style="font-size: 11px;">
                  Update to latest version
                </v-list-item-subtitle>
                <template v-slot:append>
                  <span class="text-caption text-grey" style="font-size: 10px;">1h</span>
                </template>
              </v-list-item>

              <v-divider class="my-1"></v-divider>

              <!-- Notification Item 4 -->
              <v-list-item class="notification-item">
                <template v-slot:prepend>
                  <v-avatar size="32" color="info" class="mr-2">
                    <v-icon color="white" size="18">mdi-email</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-caption font-weight-medium">
                  New message received
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption" style="font-size: 11px;">
                  3 unread messages
                </v-list-item-subtitle>
                <template v-slot:append>
                  <span class="text-caption text-grey" style="font-size: 10px;">2h</span>
                </template>
              </v-list-item>

              <v-divider class="my-1"></v-divider>

              <!-- Notification Item 5 -->
              <v-list-item class="notification-item">
                <template v-slot:prepend>
                  <v-avatar size="32" color="error" class="mr-2">
                    <v-icon color="white" size="18">mdi-alert-circle</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-caption font-weight-medium">
                  Server maintenance
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption" style="font-size: 11px;">
                  Scheduled at 2 AM
                </v-list-item-subtitle>
                <template v-slot:append>
                  <span class="text-caption text-grey" style="font-size: 10px;">3h</span>
                </template>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <!-- Footer -->
            <v-card-actions class="pa-1">
              <v-btn
                variant="text"
                color="primary"
                size="x-small"
                block
              >
                View All
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

        <!-- Profile -->
        <v-menu location="bottom end" offset="8">
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              variant="text"
              size="small"
              v-bind="props"
            >
              <v-avatar size="36">
                <v-img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Profile"
                ></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <v-card width="260" class="user-menu-card">
            <!-- User Info Header -->
            <v-card-item class="text-white pa-3 user-menu-header" style="background-color: var(--primary-color);">
              <div class="d-flex align-center">
                <v-avatar size="40" class="mr-2">
                  <v-img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Profile"
                  ></v-img>
                </v-avatar>
                <div>
                  <div class="text-subtitle-1 text-white">John Doe</div>
                  <div class="text-caption text-white text-opacity-90">john.doe@example.com</div>
                </div>
              </div>
            </v-card-item>

            <!-- Menu Items -->
            <v-list density="compact" class="pa-1">
              <v-list-item
                prepend-icon="mdi-account-outline"
                title="My Profile"
              ></v-list-item>
              
              <v-list-item
                prepend-icon="mdi-cog-outline"
                title="Settings"
              ></v-list-item>
              
              <v-list-item
                prepend-icon="mdi-email-outline"
                title="Messages"
              ></v-list-item>
              
              <v-list-item
                prepend-icon="mdi-help-circle-outline"
                title="Help & Support"
              ></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" class="pa-1">
              <v-list-item
                prepend-icon="mdi-logout"
                title="Logout"
                class="text-error"
              ></v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, inject } from 'vue';

const search = ref('');
const drawer = inject('sidebarDrawer', ref(true));

const toggleSidebar = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped>
.topbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  transition: left 0.3s ease, width 0.3s ease;
}

.topbar.sidebar-open {
  left: 260px !important;
  width: calc(100% - 260px) !important;
}

.topbar.sidebar-closed {
  left: 72px !important;
  width: calc(100% - 72px) !important;
}

.search-field :deep(.v-field) {
  background-color: #f5f5f5;
}

.search-field :deep(.v-field__outline) {
  border-color: transparent;
}

.user-menu-card :deep(.v-list-item) {
  border-radius: 8px;
  margin-bottom: 4px;
}

.user-menu-card :deep(.v-list-item:hover) {
  background-color: rgba(0, 0, 0, 0.04);
}

.user-menu-header {
  background-color: var(--primary-color) !important;
}

.notification-header {
  background-color: var(--primary-color) !important;
}

.notification-card :deep(.notification-item) {
  border-radius: 6px;
  margin-bottom: 2px;
  padding: 6px 4px;
  min-height: auto;
}

.notification-card :deep(.notification-item:hover) {
  background-color: rgba(0, 0, 0, 0.04);
}

.notification-card :deep(.v-list-item-title) {
  line-height: 1.2;
  margin-bottom: 1px;
}

.notification-card :deep(.v-list-item-subtitle) {
  opacity: 0.7;
  line-height: 1.1;
  margin-top: 0;
}
</style>

