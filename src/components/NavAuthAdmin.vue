<template>
  <header class="_header_1hgra_1">
    <nav>
      <div class="_left_1hgra_13">
        <router-link :to="{name: 'file_home'}">
          <!-- <a class="notranslate" href="#"> -->
            <img
              class="logo_login"
              src="../assets//logo_login/logo.png"
              width="20"
              height="20"
            />
            Fliki
          <!-- </a> -->

        </router-link>
        <router-link :to="{name: 'file_home'}">
          <!-- <a class="notranslate _active_1hgra_109" href="#"> -->
            <img
              src="../assets/login_admin/files_img_or.png"
              width="20"
              height="20"
              alt="image"
            />
            <span>Files</span>
          <!-- </a> -->
        </router-link>
        <router-link :to="{name: 'podcast_home'}">
          <!-- <a class="notranslate" href="#"> -->
            <img
              src="../assets/login_admin/wi_img.png"
              width="20"
              height="20"
              alt="image"
            />
            <span>Podcast</span>
          <!-- </a> -->
        </router-link>
        <router-link :to="{name: 'book_home'}">
          <!-- <a class="notranslate" href="#"> -->
            <img
              src="../assets/login_admin/book_img.png"
              width="20"
              height="20"
              alt="image"
            />
            <span>Books</span>
          <!-- </a> -->
        </router-link>
      </div>
      <div class="_right_1hgra_18">
        <router-link :to="{name: 'account_home'}" class="_upgrade_1hgra_23">
          <!-- <a class="_upgrade_1hgra_23" href="#"> -->
            <img
              src="../assets/login_admin/upgrade_img.png"
              width="20"
              height="20"
              alt="image"
            />
            Upgrade
          <!-- </a> -->
        </router-link>
        <router-link :to="{name: 'account_home'}" class="notranslate">

          <!-- <a class="notranslate"> -->
            <img
              src="../assets/login_admin/account.png"
              alt="image"
              width="20"
              height="20"
            />
            <span> Account </span>
          <!-- </a> -->

        </router-link>
        <button type="button">
          <img
            src="../assets/login_admin/sun.png"
            height="20"
            width="20"
            alt="image"
          />
        </button>
        <!-- <div type="button">
          <button>
            <img
              src="../assets/login_admin/question.png"
              height="20"
              width="20"
              alt="image"
            />
          </button>
        </div> -->

        <div>
          <v-menu :location="bottom">
            <template v-slot:activator="{ props }">
              <button>
            <img
              src="../assets/login_admin/question.png"
              height="20"
              width="20"
              alt="image"
              v-bind="props"
            />
          </button>
              <!-- <v-btn v-bind="props"> Dropdown </v-btn> -->
            </template>

            <!-- <v-list> -->
              <v-list-item data-radix-menu-content>
                <v-list-item-title data-radix-collection-item>
                  <img src="../assets/nav_img/youtube_img.png" width="16" height="16" alt="image">
                  Watch tutorial video
                </v-list-item-title>
                <a>
                  <v-list-item-title data-radix-collection-item>
                    <img src="../assets/nav_img/resource_img.png" width="16" height="16" alt="image">
                    Resources and guide
                  </v-list-item-title>
                </a>
                <a>
                  <v-list-item-title data-radix-collection-item>
                    <img src="../assets/nav_img/whatnew_img.png" width="16" height="16" alt="image">
                    What's new
                  </v-list-item-title>
                </a>
                <a>
                  <v-list-item-title data-radix-collection-item>
                    <img src="../assets/nav_img/comunity_img.png" width="16" height="16" alt="image">
                    Community
                  </v-list-item-title>
                </a>
                <a>
                  <v-list-item-title data-radix-collection-item>
                    <img src="../assets/nav_img/email_img.png" width="16" height="16" alt="image">
                    Send us an email
                  </v-list-item-title>
                </a>
              </v-list-item>
            <!-- </v-list> -->
          </v-menu>
        </div>




        
      </div>
    </nav>
  </header>
</template>
<script>
  export default {
    data: () => ({
    }),
  }
</script>
<style scoped>
._header_1hgra_1 {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 11;
}
._header_1hgra_1 nav {
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
}
._header_1hgra_1 nav ._left_1hgra_13 {
  display: flex;
  flex-direction: row;
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
._header_1hgra_1 nav ._left_1hgra_13 a,
._header_1hgra_1 nav ._right_1hgra_18 a {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: hsl(0, 0%, 9%);
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.2s, opacity 0.2s;
  opacity: 0.8;
  outline: none;
}
._header_1hgra_1 nav ._left_1hgra_13 a img,
._header_1hgra_1 nav ._right_1hgra_18 a img {
  transition: fill 0.2s;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.25rem;
}
._header_1hgra_1 nav ._left_1hgra_13 a:hover,
._header_1hgra_1 nav ._right_1hgra_18 a:hover {
  opacity: 1;
}
._header_1hgra_1 nav ._right_1hgra_18 {
  display: flex;
  flex-direction: row;
  align-items: center;
}
._header_1hgra_1 nav ._right_1hgra_18 ._upgrade_1hgra_23 {
  color: hsl(133, 50%, 32.5%);
  font-weight: 700;
}
._header_1hgra_1 nav ._right_1hgra_18 button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  transition: opacity 0.2s;
  opacity: 0.8;
  height: 3rem;
  color: hsl(0, 0%, 9%);
}
.animation {
  transform: translateZ(0);
  will-change: transform;
}
._drive_bzjrc_1 {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-shrink: 0;
  color: hsl(0, 0%, 9%);
  overflow: hidden;
  position: relative;
}
.animation.fade-in {
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
._navigation_154g4_1 {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  padding: 0.5rem 1.5rem;
  margin: 0 1.5rem;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 93%);
  border: 1px solid hsl(0, 0%, 88.7%);
}
._breadcrumbs_rw006_1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
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
._breadcrumbs_rw006_1 a {
  display: flex;
  flex-direction: row;
  padding: 0.4rem 0.5rem;
  transition: background-color 0.2s;
  border-radius: 0.5rem;
  color: hsl(0, 0%, 9%);
}
._navigation_154g4_1 ._actions_154g4_11 {
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-weight: 700;
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
.style-module_button__-niPX.style-module_medium__ASKee
  .style-module_spacing__fGq8- {
  width: 0.35rem;
}
.style-module_button__-niPX.style-module_text__uHJEq {
  color: hsl(0, 0%, 43.5%);
}
.style-module_button__-niPX.style-module_primary__FOp7N:hover {
  background-color: hsl(336, 80%, 57.8%);
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky {
  display: flex;
  flex-direction: row;
  transition: background-color 0.2s;
}

._header_1hgra_1 nav ._left_1hgra_13 a._active_1hgra_109,
._header_1hgra_1 nav ._right_1hgra_18 a._active_1hgra_109 {
  opacity: 1;
  color: hsl(336, 73.7%, 53.5%);
}
[data-radix-menu-content] {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: #0f0f0f0d 0 0 0 1px, #0f0f0f1a 0 3px 6px, #0f0f0f33 0 9px 24px;
    animation-name: fadein;
    animation-duration: .2s;
    animation-fill-mode: forwards;
    opacity: 0;
    will-change: opacity;
    overflow: hidden;
    padding: .5rem 0;
    background-color: hsl(0, 0%, 99%);
    border: 1px solid hsl(0, 0%, 88.7%);
    min-width: 10rem;
    z-index: 12;
}

[data-radix-menu-content] [data-radix-collection-item] {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem 1rem;
    outline: none;
    cursor: pointer;
    transition: all .1s;
    font-weight: 600;
    font-size: .9rem;
    color: hsl(0, 0%, 9%);
}

@keyframes fadein {
  0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}
[data-radix-menu-content] [data-radix-collection-item] img {
    margin-right: .35rem;
}
[data-radix-menu-content] [data-radix-collection-item][data-v-a331a258]:hover {
    background-color: hsla(0, 0%, 0%, 0.071);
}
</style>
