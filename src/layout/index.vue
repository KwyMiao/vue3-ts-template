<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { Navbar, Sidebar, AppMain } from "./components/index";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  setup() {
    const state = reactive({
      // collapsed: false,
      // selectedKeys: ["1"],
      // openKeys: ["sub1"],
      // preOpenKeys: ["sub1"],
    });
    // watch(
    //   () => state.openKeys,
    //   (_val, oldVal) => {
    //     state.preOpenKeys = oldVal;
    //   }
    // );

    // const toggleCollapsed = () => {
    //   state.collapsed = !state.collapsed;
    //   state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    // };

    return { ...toRefs(state) };
  },
});
</script>

<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <Navbar></Navbar>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="sider" width="200" style="background: #fff">
        <Sider></Sider>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="app-main">
          <app-main></app-main>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
.app-main {
  height: calc(100vh - 64px - 16px);
  background: "#fff";
  padding: "24px";
  margin: 0;
}
</style>
