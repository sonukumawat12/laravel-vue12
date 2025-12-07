<template>
  <div class="dashboard-page">
    <!-- Breadcrumb -->
    <div class="d-flex align-center mb-4">
      <span class="text-caption text-grey-darken-1">Dashboard</span>
    </div>

    <!-- Page Title -->
    <h2 class="text-h5 font-weight-bold mb-6">Dashboard</h2>

    <!-- Stats Cards Row 1 -->
    <v-row class="mb-4">
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Total Users</div>
                <div class="text-h4 font-weight-bold">2,543</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="success" class="mr-1">mdi-trending-up</v-icon>
                  <span class="text-caption text-success">12.5%</span>
                  <span class="text-caption text-grey-darken-1 ml-1">vs last month</span>
                </div>
              </div>
              <v-avatar size="56" color="primary" variant="tonal">
                <v-icon color="primary" size="28">mdi-account-group</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Total Revenue</div>
                <div class="text-h4 font-weight-bold">$45,231</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="success" class="mr-1">mdi-trending-up</v-icon>
                  <span class="text-caption text-success">8.2%</span>
                  <span class="text-caption text-grey-darken-1 ml-1">vs last month</span>
                </div>
              </div>
              <v-avatar size="56" color="success" variant="tonal">
                <v-icon color="success" size="28">mdi-currency-usd</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Total Orders</div>
                <div class="text-h4 font-weight-bold">1,234</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="error" class="mr-1">mdi-trending-down</v-icon>
                  <span class="text-caption text-error">3.1%</span>
                  <span class="text-caption text-grey-darken-1 ml-1">vs last month</span>
                </div>
              </div>
              <v-avatar size="56" color="warning" variant="tonal">
                <v-icon color="warning" size="28">mdi-cart</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Growth</div>
                <div class="text-h4 font-weight-bold">24.8%</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="success" class="mr-1">mdi-trending-up</v-icon>
                  <span class="text-caption text-success">15.3%</span>
                  <span class="text-caption text-grey-darken-1 ml-1">vs last month</span>
                </div>
              </div>
              <v-avatar size="56" color="info" variant="tonal">
                <v-icon color="info" size="28">mdi-chart-line</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Stats Cards Row 2 -->
    <v-row class="mb-4">
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Active Users</div>
                <div class="text-h4 font-weight-bold">1,892</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="success" class="mr-1">mdi-circle</v-icon>
                  <span class="text-caption text-success">Online</span>
                </div>
              </div>
              <v-avatar size="56" color="success" variant="tonal">
                <v-icon color="success" size="28">mdi-account-check</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Pending Orders</div>
                <div class="text-h4 font-weight-bold">342</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="warning" class="mr-1">mdi-clock-outline</v-icon>
                  <span class="text-caption text-warning">Pending</span>
                </div>
              </div>
              <v-avatar size="56" color="warning" variant="tonal">
                <v-icon color="warning" size="28">mdi-clock-alert</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Messages</div>
                <div class="text-h4 font-weight-bold">156</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="info" class="mr-1">mdi-email</v-icon>
                  <span class="text-caption text-info">Unread</span>
                </div>
              </div>
              <v-avatar size="56" color="info" variant="tonal">
                <v-icon color="info" size="28">mdi-email-multiple</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="2" class="stat-card">
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <div class="text-caption text-grey-darken-1 mb-1">Support Tickets</div>
                <div class="text-h4 font-weight-bold">89</div>
                <div class="d-flex align-center mt-2">
                  <v-icon size="16" color="error" class="mr-1">mdi-alert-circle</v-icon>
                  <span class="text-caption text-error">Open</span>
                </div>
              </div>
              <v-avatar size="56" color="error" variant="tonal">
                <v-icon color="error" size="28">mdi-help-circle</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Info Cards -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card elevation="2">
          <v-card-title class="d-flex align-center justify-space-between">
            <span>Recent Activity</span>
            <v-btn variant="text" size="small" color="primary">View All</v-btn>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(activity, index) in recentActivities"
                :key="index"
                :prepend-avatar="activity.avatar"
                :title="activity.title"
                :subtitle="activity.subtitle"
              >
                <template v-slot:append>
                  <span class="text-caption text-grey-darken-1">{{ activity.time }}</span>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card elevation="2">
          <v-card-title>Quick Actions</v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item
                prepend-icon="mdi-account-plus"
                title="Add New User"
                @click="$router.push('/users')"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-email"
                title="Send Email"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-file-document"
                title="Generate Report"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-cog"
                title="Settings"
              ></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const recentActivities = ref([
  {
    title: 'New user registered',
    subtitle: 'John Doe joined the platform',
    time: '2 minutes ago',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    title: 'Order completed',
    subtitle: 'Order #1234 has been completed',
    time: '15 minutes ago',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    title: 'Payment received',
    subtitle: '$1,250 payment from client ABC',
    time: '1 hour ago',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    title: 'New message',
    subtitle: 'You have a new message from Sarah',
    time: '2 hours ago',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    title: 'System update',
    subtitle: 'System updated to version 2.0',
    time: '3 hours ago',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
]);
</script>

<style scoped>
.dashboard-page {
  padding: 20px 0;
}

.stat-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
}

:deep(.v-list-item) {
  border-radius: 8px;
  margin-bottom: 4px;
}

:deep(.v-list-item:hover) {
  background-color: rgba(0, 0, 0, 0.04);
}
</style>
