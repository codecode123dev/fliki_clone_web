<template>
  <div id="root">
    <div class="_pages_jouiz_1">
      <nav-auth-admin />
      <slot />
    </div>
  </div>
</template>
<script>
import NavAuthAdmin from "@/components/NavAuthAdmin.vue";
export default {
  components: {
    NavAuthAdmin: NavAuthAdmin,
  },
};
</script>
<style scoped>
#root,
#__next {
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: #F8F8F8;
}
._pages_jouiz_1 {
  display: flex;
  flex-direction: column;
  flex: 1;
}

</style>