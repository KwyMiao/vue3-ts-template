<script lang="ts">
import { userStore } from "@/stores/modules/user";
import { mapState, storeToRefs } from "pinia";
import { computed } from "vue-demi";

export default {
  setup() {
    const userState = userStore();

    const { counter } = storeToRefs(userState);

    const onSubmit = function () {
      console.log(1);
      // userState.$patch("increment");
      userState.increment();
    };

    return {
      // add,
      // counter: computed(() => userState.counter),
      counter,
      userState,
      onSubmit,
      // a,
    };
  },

  methods: {
    add() {
      alert(1);
    },
  },
};
</script>

<template>
  <div>
    Home 页
    <a-button type="primary" @click="onSubmit">Primary Button</a-button>
    {{ counter }}
  </div>
</template>
