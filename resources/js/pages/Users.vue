<template>
  <div class="users-page">
    <!-- Breadcrumb -->
    <div class="d-flex align-center mb-4">
      <span class="text-caption text-grey-darken-1">Dashboard</span>
      <v-icon size="16" class="mx-2 text-grey-darken-1">mdi-chevron-right</v-icon>
      <span class="text-caption text-grey-darken-1">Users Grid</span>
    </div>
    <!-- Controls Bar -->
    <v-card class="mb-4" elevation="0" variant="outlined">
      <v-card-text class="d-flex align-center flex-wrap ga-3 pa-4">
        <!-- Show Dropdown -->
        <div class="d-flex align-center ga-2">
          <span class="text-body-2 text-grey-darken-1">Show</span>
          <v-select
            v-model="itemsPerPage"
            :items="[10, 25, 50, 100]"
            density="compact"
            variant="outlined"
            hide-details
            style="width: 80px;"
          ></v-select>
        </div>

        <!-- Search -->
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          placeholder="Search"
          variant="outlined"
          density="compact"
          hide-details
          style="max-width: 300px;"
          class="flex-grow-1"
        ></v-text-field>

        <!-- Status Filter -->
        <v-select
          v-model="statusFilter"
          :items="['All', 'Active', 'Inactive']"
          label="Status"
          variant="outlined"
          density="compact"
          hide-details
          style="width: 150px;"
        ></v-select>

        <!-- Add New User Button -->
        <v-btn
          color="primary"
          prepend-icon="mdi-plus"
          class="ml-auto"
          @click="openAddUserDialog"
        >
          Add New User
        </v-btn>
      </v-card-text>
    </v-card>

    <!-- Users Table -->
    <v-card elevation="0" variant="outlined" class="table-card">
      <v-table>
        <thead>
          <tr class="bg-grey-lighten-4">
            <th class="text-left" style="width: 50px;">
              <v-checkbox
                v-model="selectAll"
                density="compact"
                hide-details
              ></v-checkbox>
            </th>
            <th class="text-left">S.L</th>
            <th class="text-left">Join Date</th>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Department</th>
            <th class="text-left">Designation</th>
            <th class="text-left">Status</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="user.id">
            <td>
              <v-checkbox
                v-model="selectedUsers"
                :value="user.id"
                density="compact"
                hide-details
              ></v-checkbox>
            </td>
            <td class="text-body-2">{{ String(index + 1).padStart(2, '0') }}</td>
            <td class="text-body-2">{{ user.joinDate }}</td>
            <td>
              <div class="d-flex align-center ga-2">
                <v-avatar size="32">
                  <v-img :src="user.avatar" :alt="user.name"></v-img>
                </v-avatar>
                <span class="text-body-2 font-weight-medium">{{ user.name }}</span>
              </div>
            </td>
            <td class="text-body-2">{{ user.email }}</td>
            <td class="text-body-2">{{ user.department }}</td>
            <td class="text-body-2">{{ user.designation }}</td>
            <td>
              <v-chip
                :color="user.status === 'Active' ? 'success' : 'grey'"
                :variant="user.status === 'Active' ? 'flat' : 'tonal'"
                size="small"
                class="text-caption"
              >
                {{ user.status }}
              </v-chip>
            </td>
            <td>
              <div class="d-flex align-center ga-1">
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  color="primary"
                  @click="viewUser(user)"
                >
                  <v-icon size="18">mdi-eye</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  color="success"
                  @click="editUser(user)"
                >
                  <v-icon size="18">mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  color="error"
                  @click="deleteUser(user)"
                >
                  <v-icon size="18">mdi-delete</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  color="info"
                  @click="openConvertToLeadDialog(user)"
                  title="Convert to Lead"
                >
                  <v-icon size="18">mdi-account-convert</v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <!-- Add User Dialog -->
    <v-dialog v-model="addUserDialog" max-width="600" persistent>
      <v-card>
        <v-card-title class="d-flex align-center justify-space-between pa-4">
          <span class="text-h6 font-weight-bold">Add New User</span>
          <v-btn
            icon
            variant="text"
            size="small"
            @click="closeAddUserDialog"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-4">
          <v-form ref="addUserForm" v-model="formValid">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="newUser.firstName"
                  label="First Name"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="newUser.lastName"
                  label="Last Name"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12" >
                <v-text-field
                  v-model="newUser.phone"
                  label="Phone"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required, rules.phone]"
                  prepend-inner-icon="mdi-phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" >
                <v-text-field
                  v-model="newUser.email"
                  label="Email"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required, rules.email]"
                  prepend-inner-icon="mdi-email"
                ></v-text-field>
              </v-col>
              
    
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            @click="closeAddUserDialog"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            variant="flat"
            @click="saveNewUser"
            :disabled="!formValid"
          >
            Add User
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Convert to Lead Dialog -->
    <v-dialog v-model="convertToLeadDialog" max-width="600" persistent>
      <v-card>
        <v-card-title class="d-flex align-center justify-space-between pa-4">
          <span class="text-h6 font-weight-bold">Convert to Lead</span>
          <v-btn
            icon
            variant="text"
            size="small"
            @click="closeConvertToLeadDialog"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-4">
          <v-form v-model="formValid">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="leadForm.name"
                  label="Full Name"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="leadForm.email"
                  label="Email"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required, rules.email]"
                  prepend-inner-icon="mdi-email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="leadForm.phone"
                  label="Phone"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required, rules.phone]"
                  prepend-inner-icon="mdi-phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="leadForm.company"
                  label="Company"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-office-building"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="leadForm.source"
                  :items="['Website', 'Referral', 'Social Media', 'Email', 'Phone', 'Other']"
                  label="Lead Source"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-source-branch"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="leadForm.status"
                  :items="['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost']"
                  label="Lead Status"
                  variant="outlined"
                  density="comfortable"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account-arrow-right"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="leadForm.notes"
                  label="Notes"
                  variant="outlined"
                  density="comfortable"
                  rows="3"
                  auto-grow
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            @click="closeConvertToLeadDialog"
          >
            Cancel
          </v-btn>
          <v-btn
            color="info"
            variant="flat"
            @click="convertToLead"
            :disabled="!formValid"
          >
            Convert to Lead
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";
import api from "@/plugins/axios";

const router = useRouter();
const addUserDialog = ref(false);
const convertToLeadDialog = ref(false);
const formValid = ref(false);
const addUserForm = ref(null);
const selectedUserForConversion = ref(null);

const newUser = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
});

const leadForm = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  source: 'Website',
  status: 'New',
  notes: ''
});

const rules = {
  required: (value) => !!value || 'This field is required',
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || 'Invalid email address';
  },
  phone: (value) => {
    const pattern = /^[0-9\-\+\(\)\s]{10,}$/;
    return pattern.test(value) || 'Invalid phone number';
  }
};

const search = ref('');
const statusFilter = ref('All');
const itemsPerPage = ref(10);
const selectAll = ref(false);
const selectedUsers = ref([]);

// Dummy users data
const users = ref([
  {
    id: 1,
    name: 'Kathryn Murphy',
    email: 'osgoodwy@gmail.com',
    department: 'HR',
    designation: 'Manager',
    status: 'Active',
    joinDate: '25 Jan 2024',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'Annette Black',
    email: 'redaniel@gmail.com',
    department: 'Design',
    designation: 'UI UX Designer',
    status: 'Inactive',
    joinDate: '25 Jan 2024',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Ronald Richards',
    email: 'seannand@mail.ru',
    department: 'Design',
    designation: 'UI UX Designer',
    status: 'Active',
    joinDate: '10 Feb 2024',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 4,
    name: 'Eleanor Pena',
    email: 'miyokoto@mail.ru',
    department: 'Design',
    designation: 'UI UX Designer',
    status: 'Active',
    joinDate: '10 Feb 2024',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    id: 5,
    name: 'Leslie Alexander',
    email: 'icadahli@gmail.com',
    department: 'Design',
    designation: 'UI UX Designer',
    status: 'Inactive',
    joinDate: '15 March 2024',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 6,
    name: 'Robert Fox',
    email: 'robertfox@example.com',
    department: 'Development',
    designation: 'Senior Developer',
    status: 'Active',
    joinDate: '20 March 2024',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 7,
    name: 'Jane Cooper',
    email: 'janecooper@example.com',
    department: 'Marketing',
    designation: 'Marketing Manager',
    status: 'Active',
    joinDate: '05 April 2024',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
  {
    id: 8,
    name: 'Wade Warren',
    email: 'wadewarren@example.com',
    department: 'Sales',
    designation: 'Sales Executive',
    status: 'Inactive',
    joinDate: '12 April 2024',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 9,
    name: 'Kristin Watson',
    email: 'kristinwatson@example.com',
    department: 'HR',
    designation: 'HR Executive',
    status: 'Active',
    joinDate: '18 April 2024',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    id: 10,
    name: 'Cameron Williamson',
    email: 'cameronwilliamson@example.com',
    department: 'Development',
    designation: 'Frontend Developer',
    status: 'Active',
    joinDate: '25 April 2024',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
  }
]);

// Filtered users based on search and status
const filteredUsers = computed(() => {
  let result = users.value;

  // Filter by search
  if (search.value) {
    const searchLower = search.value.toLowerCase();
    result = result.filter(user =>
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.department.toLowerCase().includes(searchLower) ||
      user.designation.toLowerCase().includes(searchLower)
    );
  }

  // Filter by status
  if (statusFilter.value !== 'All') {
    result = result.filter(user => user.status === statusFilter.value);
  }

  return result;
});

// Methods
const viewUser = (user) => {
  console.log('View user:', user);
  // Add your view logic here
};

const editUser = (user) => {
  console.log('Edit user:', user);
  // Add your edit logic here
};

const deleteUser = (user) => {
  console.log('Delete user:', user);
  // Add your delete logic here
};

const openAddUserDialog = () => {
  addUserDialog.value = true;
  // Reset form
  newUser.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    status: 'Active',
    joinDate: ''
  };
};

const closeAddUserDialog = () => {
  addUserDialog.value = false;
  if (addUserForm.value) {
    addUserForm.value.reset();
  }
};

const openConvertToLeadDialog = (user) => {
  selectedUserForConversion.value = user;
  leadForm.value = {
    name: user.name,
    email: user.email,
    phone: '',
    company: user.department,
    source: 'Website',
    status: 'New',
    notes: `Converted from user: ${user.name} (${user.email}) - ${user.designation} at ${user.department}`
  };
  convertToLeadDialog.value = true;
};

const closeConvertToLeadDialog = () => {
  convertToLeadDialog.value = false;
  selectedUserForConversion.value = null;
};

const convertToLead = () => {
  // Here you would typically make an API call to save the lead
  console.log('Converting to lead:', leadForm.value);
  
  // Simulate API call
  setTimeout(() => {
    // Show success message
    alert(`Successfully converted ${selectedUserForConversion.value.name} to a lead!`);
    closeConvertToLeadDialog();
    
    // Optionally navigate to the leads page or refresh the list
    // router.push('/leads');
  }, 1000);
};

const saveNewUser = async () => {
  if (!formValid.value) return;

  try {
    const res = await api.post("/register", {
      name: `${newUser.value.firstName} ${newUser.value.lastName}`,
      email: newUser.value.email,
      phone: newUser.value.phone,
      password: "12345678", // temp password
    });

    users.value.push(res.data.data.user);
    closeAddUserDialog();
    console.log("User created:", res.data);

  } catch (error) {
    console.error("Registration error:", error.response?.data || error);
  }
};

</script>

<style scoped>
.users-page {
  padding: 20px 0;
}

:deep(.v-table) {
  border-collapse: separate;
  border-spacing: 0;
}

:deep(.v-table thead th) {
  font-weight: 600;
  font-size: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

:deep(.v-table tbody td) {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

:deep(.v-table tbody tr:hover) {
  background-color: rgba(0, 0, 0, 0.02);
}

:deep(.v-table) {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  overflow: hidden;
}

:deep(.v-card) {
  border: 1px solid rgba(0, 0, 0, 0.06) !important;
}

.table-card {
  padding: 0 !important;
  overflow: hidden;
}

.table-card :deep(.v-card-text) {
  padding: 0 !important;
}

.table-card :deep(.v-table) {
  margin: 0;
}
</style>
