<template>
    <div class="h-screen flex items-center justify-center bg-gray-100">
      <div class="p-6 shadow rounded bg-white w-96">
        <h2 class="text-2xl mb-4 font-semibold">Login</h2>
  
        <input type="email" v-model="email" class="input" placeholder="Email">
        <input type="password" v-model="password" class="input mt-3" placeholder="Password">
  
        <button class="btn mt-4 w-full" @click="login">Login</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { useUserStore } from "../stores/user";
  import { useRouter } from "vue-router";
  
  const email = "";
  const password = "";
  
  const store = useUserStore();
  const router = useRouter();
  
  async function login() {
    const res = await axios.post("/login", { email, password });
  
    store.setUser(res.data.user); // user save in pinia
    router.push("/"); // go to dashboard
  }
  </script>
  
  <style>
  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
  }
  .btn {
    background: #4f46e5;
    color: #fff;
    padding: 10px;
  }
  </style>
  