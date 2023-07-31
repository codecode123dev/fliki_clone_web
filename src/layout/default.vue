<template>
  <nav-header />
  <slot />
  <footer-page />
</template>
<script>
import NavHeader from "@/components/NavHeader.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: { 
    NavHeader: NavHeader,
    FooterPage: FooterPage
 }
};
</script>
