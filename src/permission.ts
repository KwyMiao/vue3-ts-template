import router from "./router";
import store from "./stores";

const whiteList = ["/login"]; // no redirect whitelist
const windowTitle = import.meta.env.VITE_APP_TITLE;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  } else {
    document.title = `${windowTitle}`;
  }

  //   if (hasToken) {
  //     if (to.path === "/login") {
  //       // if is logged in, redirect to the home page
  //       next({ path: "/" });
  //       NProgress.done();
  //     } else {
  //       const hasGetUserInfo = store.getters.name;
  //       if (hasGetUserInfo) {
  //         next();
  //       } else {
  //         try {
  //           // get user info
  //           await store.dispatch("user/getInfo");

  //           next();
  //         } catch (error) {
  //           // remove token and go to login page to re-login
  //           await store.dispatch("user/resetToken");
  //           Message.error(error || "Has Error");
  //           next(`/login?redirect=${to.path}`);
  //           NProgress.done();
  //         }
  //       }
  //     }
  //   } else {
  //     /* has no token*/

  //     if (whiteList.indexOf(to.path) !== -1) {
  //       // in the free login whitelist, go directly
  //       next();
  //     } else {
  //       // other pages that do not have permission to access are redirected to the login page.
  //       next(`/login?redirect=${to.path}`);
  //       NProgress.done();
  //     }
  //   }
});
