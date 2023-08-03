<template>
  <div class="_podcasts_1urzg_1 animation fade-in">
    <div class="_navigation_154g4_1">
      <div class="_breadcrumbs_rw006_1">
        <a class="notranslate" href="#"> Podcasts </a>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="_actions_154g4_11">
        <button
          class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
          style="margin-right: 0.5rem"
        >
          <span>
            <span>
              <i class="fas fa-plus"></i>
              <span class="style-module_spacing__fGq8-"></span>
            </span>
            <span>New show</span>
          </span>
        </button>
        <button
          class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
        >
          <span>
            <span>
              <img
                src="../../assets/podcast_image/tutorial.png"
                width="16"
                height="16"
                alt="image"
              />
              <span class="style-module_spacing__fGq8-"></span>
            </span>
            <span>Tutorial</span>
          </span>
        </button>
      </div>
    </div>

    <div class="_list_1urzg_9 animation fade-in">
        <div class="style-module_list__X6WDt">
            <div class="style-module_head__NLyXc">
                <div class="style-module_headItem__55ZxH style-module_thumb__RYrpu">Cover</div>
                <div class="style-module_headItem__55ZxH style-module_detail__r0sak">Title</div>
                <div class="style-module_headItem__55ZxH style-module_boolean__0WO0e">Published</div>
                <div class="style-module_headItem__55ZxH style-module_time__g2tr7">Created</div>
                <div class="style-module_headItem__55ZxH style-module_action__zsYAQ"></div>
            </div>
            
            <div class="style-module_body__Y6-eC">
                <div class="style-module_bodyItemEmpty__ECkp2">
                    <p>
                        No podcast shows yet. Create a new
                        <a>show</a>
                    </p>
                    <button class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee">
                        <span>
                            <span>🎥 Tutorial - How to create a podcast show</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.animation {
  transform: translateZ(0);
  will-change: transform;
}

._podcasts_1urzg_1 {
  display: flex;
  flex-direction: column;
  flex: 1 0 0%;
  overflow: hidden;
  position: relative;
}
.animation.fade-in {
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}
._podcasts_1urzg_1 ._list_1urzg_9 {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 1.5rem;
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
    padding: .5rem 1.5rem;
    margin: 0 1.5rem;
    border-radius: 1rem;
    background-color: hsl(0, 0%, 93%);
    border: 1px solid hsl(0, 0%, 93%);
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
h1, h2, h3, h4, h5, h6, p, a, ul, li, label, input, textarea, select {
    margin: 0;
    padding: 0;
}
._breadcrumbs_rw006_1 a {
    display: flex;
    flex-direction: row;
    padding: .4rem .5rem;
    transition: background-color .2s;
    border-radius: .5rem;
    color: hsl(0, 0%, 9%);
}
._breadcrumbs_rw006_1 a:hover {
    background-color: hsla(0, 0%, 0%, .047);
}
._breadcrumbs_rw006_1 .fa-chevron-down {
    color: hsl(0, 0%, 9%);
    font-size: .6rem;
}
._navigation_154g4_1 ._actions_154g4_11 {
    display: flex;
    flex-direction: row;
    align-items: center;
}


button {
    transition: all .1s;
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
    font-size: .9rem;
}
.style-module_button__-niPX.style-module_text__uHJEq {
    color: hsl(0, 0%, 43.5%);
    opacity: .6;
}
.style-module_button__-niPX.style-module_text__uHJEq:hover {
    opacity: 1;
}
.style-module_button__-niPX span {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.style-module_button__-niPX.style-module_medium__ASKee .style-module_spacing__fGq8- {
    width: .35rem;
}
.style-module_list__X6WDt {
    display: flex;
    flex-direction: column;
}
.style-module_list__X6WDt .style-module_head__NLyXc {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid hsl(0, 0%, 90.9%);
    position: sticky;
    top: 0;
    background-color: hsl(0, 0%, 97.3%);
    z-index: 1;
}
.style-module_list__X6WDt .style-module_head__NLyXc .style-module_headItem__55ZxH {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.5rem 1rem;
    text-transform: uppercase;
    font-weight:700;
    font-size: .75rem;
}
.style-module_list__X6WDt .style-module_head__NLyXc .style-module_headItem__55ZxH.style-module_thumb__RYrpu {
    width: 6rem;
}
.style-module_list__X6WDt .style-module_head__NLyXc .style-module_headItem__55ZxH.style-module_detail__r0sak {
    display: flex;
    flex: 1;
    min-width: 10rem;
}
.style-module_list__X6WDt .style-module_head__NLyXc .style-module_headItem__55ZxH.style-module_boolean__0WO0e {
    width: 8rem;
}
.style-module_list__X6WDt .style-module_head__NLyXc .style-module_headItem__55ZxH.style-module_time__g2tr7 {
    width: 12rem;
}
.style-module_list__X6WDt .style-module_head__NLyXc .style-module_headItem__55ZxH.style-module_action__zsYAQ {
    width: 5rem;
}
.style-module_list__X6WDt .style-module_body__Y6-eC {
    display: flex;
    flex-direction: column;
}
.style-module_list__X6WDt .style-module_body__Y6-eC .style-module_bodyItemEmpty__ECkp2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;
}
.style-module_list__X6WDt .style-module_body__Y6-eC .style-module_bodyItemEmpty__ECkp2 p {
    margin-bottom: 1rem;
}
.style-module_list__X6WDt .style-module_body__Y6-eC .style-module_bodyItemEmpty__ECkp2 p a {
    text-decoration: underline;
    cursor: pointer;
}
.style-module_button__-niPX.style-module_primary__FOp7N {
    background-color: hsl(336, 75%, 47.2%);
    color: hsl(0, 0%, 95.1%);
}
.style-module_button__-niPX.style-module_primary__FOp7N:hover {
    background-color: hsl(336, 80%, 57.8%);
}
</style>
