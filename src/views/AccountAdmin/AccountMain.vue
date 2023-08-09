<template>
    <div class="_account_1mq9d_1">
        <nav-account/>
        <router-view/>
        
    </div>
</template>
<script>
import NavAccount from "./NavAccount.vue";
export default {
    components: {
        NavAccount: NavAccount,
    }
}
</script>
<style scoped>
._account_1mq9d_1 {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-shrink: 0;
    overflow: hidden;
}
</style>