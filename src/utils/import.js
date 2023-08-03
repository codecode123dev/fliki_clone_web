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
  app.component(
    "auth_admin-layout",
    defineAsyncComponent(() => import("@/layout/auth_admin"))
  )
}
