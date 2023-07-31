import { defineAsyncComponent } from "vue";

export function loginGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layout/auth"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layout/default"))
  );
}
