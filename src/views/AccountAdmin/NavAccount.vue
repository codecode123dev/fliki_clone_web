<template>
  <div class="_menu_1mq9d_8">
    <div class="_top_1mq9d_20">
      <router-link :to="{name :'account_home'}" class="_item_1mq9d_25 _active_1mq9d_49">
        <!-- <a class="_item_1mq9d_25 _active_1mq9d_49" href="#"> -->
          <img
            src="../../assets/account_image/credit_img.png"
            width="16"
            height="16"
            alt="image"
          />
          Credits
        <!-- </a> -->
      </router-link>
      <router-link
        :to="{ name: 'reward_account' }"
        class="_item_1mq9d_25 _active_1mq9d_49"
      >
        <!-- <a class="_item_1mq9d_25 _active_1mq9d_49" href="#"> -->
        <img
          src="../../assets/account_image/reward_img.png"
          width="16"
          height="16"
          alt="image"
        />
        Rewards
        <!-- </a> -->
      </router-link>
      <router-link
        :to="{ name: 'profile_account' }"
        class="_item_1mq9d_25 _active_1mq9d_49"
      >
        <!-- <a class="_item_1mq9d_25 _active_1mq9d_49" href="#"> -->
        <img
          src="../../assets/account_image/profile_img.png"
          width="16"
          height="16"
          alt="image"
        />
        Profile
        <!-- </a> -->
      </router-link>
      <router-link
        :to="{ name: 'team_account' }"
        class="_item_1mq9d_25 _active_1mq9d_49"
      >
        <!-- <a class="_item_1mq9d_25 _active_1mq9d_49" href="#"> -->
        <img
          src="../../assets/account_image/team_img.png"
          width="16"
          height="16"
          alt="image"
        />
        Team
        <!-- </a> -->
      </router-link>
      <router-link
        :to="{ name: 'voice_account' }"
        class="_item_1mq9d_25 _active_1mq9d_49"
      >
        <!-- <a class="_item_1mq9d_25 _active_1mq9d_49" href="#"> -->
        <img
          src="../../assets/account_image/voice_img.png"
          width="16"
          height="16"
          alt="image"
        />
        Voice cloning
        <!-- </a> -->
      </router-link>
      <router-link
        :to="{ name: 'api_account' }"
        class="_item_1mq9d_25 _active_1mq9d_49"
      >
        <!-- <a class="_item_1mq9d_25 _active_1mq9d_49" href="#"> -->
        <img
          src="../../assets/account_image/api_img.png"
          width="16"
          height="16"
          alt="image"
        />
        API
        <!-- </a> -->
      </router-link>
      <router-link
        :to="{ name: 'affiliate_account' }"
        class="_item_1mq9d_25 _active_1mq9d_49"
      >
        <!-- <a class="_item_1mq9d_25 _active_1mq9d_49" href="#"> -->
        <img
          src="../../assets/account_image/affiliate_img.png"
          width="16"
          height="16"
          alt="image"
        />
        Affiliate
        <!-- </a> -->
      </router-link>
      <button
        class="_item_1mq9d_25"
        type="button"
        @click="dialog_logout = true"
      >
        <img
          src="../../assets/account_image/logout_img.png"
          width="16"
          height="16"
          alt="image"
        />
        Logout
      </button>

      <!-- <v-btn class="_item_1mq9d_25" @click="dialog_logout = true">
        <img
          src="../../assets/account_image/logout_img.png"
          width="16"
          height="16"
          alt="image"
        />
        Logout
      </v-btn> -->

      <v-dialog v-model="dialog_logout" width="auto">
        <v-card>
          <!-- <v-card-text> -->
          <div class="AlertDialogContent">
            <p class="AlertDialogDescription">
              Are you sure you want to logout?
            </p>
            <div class="AlertDialogActions">
              <router-link :to="{name: 'login'}">
                <button
                  class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee"
                  type="button"
                >
                  <span>
                    <span>Logout</span>
                  </span>
                </button>
              </router-link>
              <button
                class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
                type="button"
                @click="dialog_logout = false"
              >
                <span>
                  <span>Cancel</span>
                </span>
              </button>
            </div>
          </div>
          <!-- </v-card-text> -->
        </v-card>
      </v-dialog>
    </div>
    <div class="_bottom_1mq9d_62">
      <a href="#" title="Fliki is built by awesome team at Nine Thirty Five ❤️">
        © 2023 Nine Thirty Five
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog_logout: false,
    };
  },
};
</script>
<style scoped>
._account_1mq9d_1 ._menu_1mq9d_8 {
  display: flex;
  flex-direction: column;
  width: 12rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.5rem 0;
  border-radius: 1rem;
  margin: 0 1.5rem 1rem;
  background-color: hsl(0, 0%, 93%);
  border: 1px solid hsl(0, 0%, 88.7%);
}
._account_1mq9d_1 ._menu_1mq9d_8 ._top_1mq9d_20 {
  display: flex;
  flex-direction: column;
  flex: 1;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
ul,
li,
label,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
._account_1mq9d_1 ._menu_1mq9d_8 ._top_1mq9d_20 ._item_1mq9d_25 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  font-weight: 700;
  font-size: 1rem;
  color: hsl(0, 0%, 9%);
  opacity: 0.7;
  transition: opacity 0.2s;
  border: none;
  white-space: nowrap;
}
._account_1mq9d_1 ._menu_1mq9d_8 ._top_1mq9d_20 ._item_1mq9d_25 img {
  margin-right: 0.5rem;
  height: 1.1rem;
  width: 1.1rem;
}
._account_1mq9d_1 ._menu_1mq9d_8 ._top_1mq9d_20 ._item_1mq9d_25:hover {
  opacity: 1;
}
._account_1mq9d_1 ._menu_1mq9d_8 ._top_1mq9d_20 button._item_1mq9d_25 {
  cursor: pointer;
  border-top: none;
  border-left: none;
  border-right: none;
}
._account_1mq9d_1 ._menu_1mq9d_8 ._bottom_1mq9d_62 {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
}
._account_1mq9d_1 ._menu_1mq9d_8 ._bottom_1mq9d_62 a {
  font-size: 0.75rem;
  color: hsl(0, 0%, 9%);
  text-align: center;
  opacity: 0.5;
  transition: all 0.2s;
}
.AlertDialogContent {
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  background-color: hsl(0, 0%, 99%);
  box-shadow: #0f0f0f0d 0 0 0 1px, #0f0f0f1a 0 3px 6px, #0f0f0f33 0 9px 24px;
  padding: 0;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform;
  animation-name: scaleIn;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  opacity: 0;
  outline: none;
  width: 90vw;
  max-width: 27rem;
}
.v-dialog > .v-overlay__content > .v-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
}
@keyframes scaleIn {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.AlertDialogContent .AlertDialogDescription {
  color: hsl(0, 0%, 9%);
  font-size: hsl(0, 0%, 9%);
  padding: 1rem 1.5rem;
  white-space: break-spaces;
}
.AlertDialogContent .AlertDialogActions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid hsl(0, 0%, 90.9%);
  padding: 0.75rem 1.5rem;
  background-color: hsl(0, 0%, 97.3%);
  gap: 0.5rem;
}

button {
  transition: all 0.1s;
}
.style-module_button__-niPX {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: hsl(0, 0%, 95.1%);
  white-space: pre;
}
.style-module_button__-niPX.style-module_medium__ASKee {
  height: 2.15rem;
  padding: 0 1rem;
  border-radius: 1.75rem;
  font-size: 0.9rem;
}
.style-module_button__-niPX.style-module_primary__FOp7N {
  background-color: hsl(336, 75%, 47.2%);
  color: hsl(0, 0%, 95.1%);
}
.style-module_button__-niPX span {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.style-module_button__-niPX.style-module_primary__FOp7N:hover {
  background-color: hsl(336, 80%, 57.8%);
}
.style-module_button__-niPX.style-module_text__uHJEq {
  color: hsl(0, 0%, 43.5%);
}
.style-module_button__-niPX.style-module_text__uHJEq:hover {
  color: hsl(0, 0%, 9%);
}
</style>
