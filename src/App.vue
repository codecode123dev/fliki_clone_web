<template>
  <div class="style_body__xnciK">
    <!-- <nav-header/> -->
    <component :is="layout">
      <router-view />
    </component>
    <!-- <footer-page/> -->
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import {PUBLIC_LAYOUT} from "@/constants"
export default {
  setup(){
    const route = useRoute();
    console.log(route)
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout")
    }
  }

}
</script>
<style>
#app {
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: row;
  flex: 1 1;
  height: 100vh;

}
body {
  display: flex;
  flex: 1 1;
  margin: 0;
  padding: 0;
  color: #171717;
}
.style_body__xnciK {
    display: flex;
    flex: 1 1;
    flex-shrink: 0;
    flex-direction: column;
    position: relative;
}

</style>
