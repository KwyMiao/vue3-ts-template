<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <Sidebar></Sidebar>
      <el-container>
        <el-header>
          <Navbar></Navbar>
        </el-header>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<!--<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <el-container>
        <Sidebar></Sidebar> 
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template> -->

<style></style>
