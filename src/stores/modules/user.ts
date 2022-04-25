import { defineStore } from "pinia";
import store from "../index";
// import { ResInfoList } from "/@/api/home/model";
export const userStore = defineStore({
  id: "user",
  state: () => ({
    counter: 0,
    test: "23333",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    tenCount: (state) => state.counter * 10,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

// interface HomeState {
//   info: Nullable<ResInfoList>;
// }

// export const useHomeStore = defineStore({
//   id: "app-home",
//   state: (): HomeState => ({
//     // info
//     info: null,
//   }),
//   getters: {
//     getInfo(): Nullable<ResInfoList> {
//       return this.info || null;
//     },
//   },
//   actions: {
//     setInfo(info: Nullable<ResInfoList>) {
//       this.info = info;
//     },
//     resetState() {
//       this.info = null;
//     },
//     /**
//      * @description: login
//      */
//     // async fetchInfo() {
//     //   const res = await fetchApi.info();
//     //   if (res) {
//     //     // save token
//     //     this.setInfo(res);
//     //   }
//     //   return res;
//     // },
//   },
// });

// Need to be used outside the setup
export function useHomeStoreWithOut() {
  return userStore(store);
}
