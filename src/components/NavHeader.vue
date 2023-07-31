<template>
  <nav class="style_header__2sMlx">
    <div class="style_wrapper__mgTHs">
      <div class="style_left__X3lWe">
        <a class="style_brand___exmZ" href="/">
          <img
            src="../assets/logo_login/logo_fliki.png"
            width="32"
            height="32"
          />
          Fliki
        </a>
      </div>
      <div class="style_right__5NCtu">
        <router-link
          :to="{ name: 'pricing' }"
          class="router style_mobileHidden__6OBFf"
          >Pricing</router-link
        >
        <router-link
          :to="{ name: 'resources' }"
          class="router style_mobileHidden__6OBFf"
          >Resources</router-link
        >
        <router-link
          :to="{ name: 'blog' }"
          class="router style_mobileHidden__6OBFf"
          >Blog</router-link
        >
        <router-link
          :to="{ name: 'what' }"
          class="router style_mobileHidden__6OBFf"
          >What's new
          <span class="style_new__4N8K8"></span>
        </router-link>
        <router-link :to="{ name: 'login' }" class="router">Login</router-link>
        <router-link :to="{ name: 'login' }" class="style_cta__H2jRn router">
          Sign up
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.style_header__2sMlx .style_left__X3lWe .style_brand___exmZ:hover img {
  transform: rotate(-45deg);
}
.style_header__2sMlx .style_left__X3lWe .style_brand___exmZ img {
  transition: all 0.2s;
}
.style_header__2sMlx {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
}
.style_wrapper__mgTHs {
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding: 1.5rem 2rem;
}
.style_header__2sMlx .style_right__5NCtu a.style_cta__H2jRn {
  color: #e91e63;
}
.style_header__2sMlx .style_right__5NCtu a.style_cta__H2jRn .fa-arrow-right {
  color: #e91e63;
  font-size: 1rem;
}

.style_header__2sMlx .style_right__5NCtu a.style_active__YC_A8,
.style_header__2sMlx .style_right__5NCtu a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.style_header__2sMlx .style_right__5NCtu a .fa-arrow-right {
  margin-left: 0.25rem;
}
.style_header__2sMlx .style_right__5NCtu a:last-child {
  margin-right: 0;
}
.style_header__2sMlx .style_left__X3lWe {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1;
  position: relative;
}
a {
  color: inherit;
  text-decoration: none;
}
.style_header__2sMlx .style_left__X3lWe .style_brand___exmZ {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 800;
  padding: 0;
  font-size: 1.6rem;
  color: #e91e63;
}
.style_header__2sMlx .style_right__5NCtu,
.style_header__2sMlx .style_right__5NCtu .router {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.style_header__2sMlx .style_right__5NCtu .router {
  font-size: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  color: #2d000d;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
  position: relative;
}
.style_header__2sMlx .style_right__5NCtu .router .style_new__4N8K8 {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  background-color: #ff1744;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}
@media (max-width: 1023px) {
  .style_header__2sMlx .style_right__5NCtu .style_mobileHidden__6OBFf {
    display: none;
  }
  @media (max-width: 1199px) {
    .style_wrapper__mgTHs {
      width: 100% !important;
      padding: 1rem 1.5rem;
    }
  }
}
</style>
