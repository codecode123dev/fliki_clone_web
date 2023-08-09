<template>
  <div class="_drive_bzjrc_1 animation fade-in">
    <div class="_navigation_154g4_1">
      <div class="_breadcrumbs_rw006_1">
        <a class="notranslate" href="#"> Files </a>
        <img
          src="@/assets/login_admin/chev_down.png"
          width="16"
          height="16"
          alt="image"
        />
      </div>
      <div class="_actions_154g4_11">
        <!-- <button
          class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee"
          style="margin-right: 0.25rem"
        >
          <span>
            <span>
              <img
                src="@/assets/login_admin/files_plus.png"
                width="16"
                height="16"
                alt="image"
              />
              <span class="style-module_spacing__fGq8-"></span>
            </span>
            <span> New file </span>
          </span>
        </button> -->
        <v-btn
          @click="dialog = true"
          class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee"
        >
          <span>
            <span>
              <img
                src="@/assets/login_admin/files_plus.png"
                width="16"
                height="16"
                alt="image"
              />
              <span class="style-module_spacing__fGq8-"></span>
            </span>
            <span> New file </span>
          </span>
        </v-btn>

        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-card-text>
              <!-- <div id="radix-:r28:" aria-describedby="radix-:r2a:" aria-labelledby="radix-:r29:" data-state="open" class="DialogContent" tabindex="-1" style="max-width: 20rem; pointer-events: auto;">  -->
              <div class="DialogHeader">
                <p>New file</p>
                <button @click="dialog = false">
                  <img
                    src="../../assets/files_image/three_dot/close_img.png"
                    width="16"
                    height="16"
                    alt="image"
                  />
                </button>
              </div>
              <form>
                <div class="DialogContentContainer">
                  <div
                    class="style-module_input__8lk6o style-module_widthFull__EQnlX"
                  >
                    <v-text-field
                      placeholder="Enter file name"
                      variant="outlined"
                      class="title_field"
                    ></v-text-field>
                  </div>
                  <div
                    class="style-module_input__8lk6o style-module_widthFull__EQnlX"
                  >
                    <v-select
                      :items="['English']"
                      variant="outlined"
                      class="select-category"
                      placeholder="Select language"
                    ></v-select>
                  </div>
                  <div
                    class="style-module_input__8lk6o style-module_widthFull__EQnlX"
                  >
                    <v-radio-group inline>
                      <v-radio
                        color="hsl(336, 73.7%, 53.5%)"
                        label="Audio only"
                        value="1"
                      ></v-radio>
                      <v-radio
                        color="hsl(336, 73.7%, 53.5%)"
                        label="Video"
                        value="2"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </div>
              </form>
              <div class="DialogActions">
                <button
                  class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee"
                >
                  <span>
                    <span>
                      <img
                        src="../../assets/files_image/three_dot/tick_img.png"
                        alt="img"
                        width="16"
                        height="16"
                      />
                      <span class="style-module_spacing__fGq8-"></span>
                    </span>
                    <span>Submit</span>
                  </span>
                </button>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>

        <div>
          <button
            class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
            disabled
          >
            <span>
              <span>
                <img
                  src="@/assets/login_admin/folder_new.png"
                  width="16"
                  height="16"
                  alt="image"
                />
                <span class="style-module_spacing__fGq8-"></span>
              </span>
              <span>New folder</span>
            </span>
          </button>
        </div>

        <!-- <button
          class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
        >
          <span>
            <span>
              <span>
                <img
                  src="@/assets/login_admin/tutorial.png"
                  alt="image"
                  width="16"
                  height="16"
                />
                <span class="style-module_spacing__fGq8-"></span>
              </span>
              <span>Tutorial</span>
            </span>
          </span>
        </button> -->

        <v-btn
          @click="selectDialog = true"
          class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
        >
          <span>
            <span>
              <img
                src="@/assets/login_admin/tutorial.png"
                alt="image"
                width="16"
                height="16"
              />
              <span class="style-module_spacing__fGq8-"></span>
            </span>
            <span> Tutorial </span>
          </span>
        </v-btn>

        <v-dialog v-model="selectDialog" width="50%">
          <v-card>
            <v-card-text>
              <!-- <div id="radix-:r28:" aria-describedby="radix-:r2a:" aria-labelledby="radix-:r29:" data-state="open" class="DialogContent" tabindex="-1" style="max-width: 20rem; pointer-events: auto;">  -->
              <div class="DialogHeader">
                <p>How to create videos and voiceover</p>
                <button @click="selectDialog = false">
                  <img
                    src="../../assets/files_image/three_dot/close_img.png"
                    width="16"
                    height="16"
                    alt="image"
                  />
                </button>
              </div>
              <div class="DialogContentContainer">
                <video controls autoplay style="width: 100%">
                  <source
                    src="../../assets/files_image/audio/video_file-720.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="DialogActions">
                <button
                  class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
                  @click="selectDialog = false"
                >
                  <span>
                    <span>Close</span>
                  </span>
                </button>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>


      </div>
    </div>
    <div class="_list_bzjrc_11 animation fade-in">
      <div class="style-module_list__X6WDt">
        <div class="style-module_head__NLyXc">
          <div class="style-module_headItem__55ZxH style-module_thumb__RYrpu">
            Cover
          </div>
          <div class="style-module_headItem__55ZxH style-module_detail__r0sak">
            Name
          </div>
          <div class="style-module_headItem__55ZxH style-module_time__g2tr7">
            Modified
          </div>
          <div
            class="style-module_headItem__55ZxH style-module_action__zsYAQ"
          ></div>
        </div>
        <div class="style-module_body__Y6-eC">
          <div class="style-module_bodyItem__oV1ky">
            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_thumb__RYrpu"
            >
              <i class="_video_1hpv2_5">
                <img
                  src="@/assets/login_admin/sample_video.png"
                  alt="image"
                  height="32"
                  width="32"
                />
              </i>
            </div>
            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_detail__r0sak"
            >
              <router-link :to="{ name: 'file_item_sample_video' }">
                <h3 class="notranslate">
                  Sample video - 3 tips to help you lose weight
                </h3>
              </router-link>
              <p class="notranslate">video</p>
            </div>
            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_time__g2tr7"
            >
              Jul 31, 02:17 pm
            </div>

            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_action__zsYAQ"
            >
              <!-- <button type="button" id="radix-:rfh:">
                <img
                  src="@/assets/login_admin/three_dot.png"
                  alt="image"
                  width="18"
                  height="18"
                />
              </button> -->
              <v-menu :location="bottom">
                <template v-slot:activator="{ props }">
                  <!-- <v-btn v-bind="props"> -->
                  <img
                    v-bind="props"
                    src="@/assets/login_admin/three_dot.png"
                    alt="image"
                    width="18"
                    height="18"
                    class="three-dot"
                  />
                  <!-- </v-btn> -->
                </template>

                <v-list class="list_three_dot">
                  <v-list-item>
                    <v-list-item-title
                      role="menuitem"
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                      class="item_three_dot"
                    >
                      <img
                        src="../../assets/files_image/three_dot/rename_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Rename
                    </v-list-item-title>
                    <v-list-item-title
                      class="item_three_dot_none"
                      role="menuitem"
                      aria-disabled="true"
                      data-disabled
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                    >
                      <img
                        src="../../assets/files_image/three_dot/move_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Move
                    </v-list-item-title>
                    <v-list-item-title
                      class="item_three_dot_none"
                      role="menuitem"
                      aria-disabled="true"
                      data-disabled
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                    >
                      <img
                        src="../../assets/files_image/three_dot/duplicate_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Duplicate
                    </v-list-item-title>
                    <div class="_divider_wzz4a_1"></div>
                    <!-- <v-list-item-title
                      class="item_three_dot_none"
                      role="menuitem"
                      aria-disabled="true"
                      data-disabled
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                    >
                      <img
                        src="../../assets/files_image/three_dot/embed_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Embed
                    </v-list-item-title> -->
                    <!-- <div class="_divider_wzz4a_1"></div> -->
                    <v-list-item-title
                      role="menuitem"
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                      class="item_three_dot"
                    >
                      <img
                        src="../../assets/files_image/three_dot/delete_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Delete
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div class="style-module_bodyItem__oV1ky">
            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_thumb__RYrpu"
            >
              <i class="_audio_1hpv2_9">
                <img
                  src="@/assets/login_admin/music_note.png"
                  alt="image"
                  width="32"
                  height="32"
                  class="three-dot"
                />
              </i>
            </div>
            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_detail__r0sak"
            >
              <router-link :to="{ name: 'file_item_sample_audio' }">
                <h3 class="notranslate">Sample audio - Motivational quotes</h3>
              </router-link>
              <p class="notranslate">audio</p>
            </div>
            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_time__g2tr7"
            >
              Jul 31, 02:17 pm
            </div>
            <div
              class="style-module_bodyItemColumn__bwSo0 style-module_action__zsYAQ"
            >
              <!-- <button type="button" id="radix-:rfh:">
                <img
                  src="@/assets/login_admin/three_dot.png"
                  alt="image"
                  width="18"
                  height="18"
                />
              </button> -->

              <v-menu :location="bottom">
                <template v-slot:activator="{ props }">
                  <!-- <v-btn v-bind="props"> -->
                  <img
                    v-bind="props"
                    src="@/assets/login_admin/three_dot.png"
                    alt="image"
                    width="18"
                    height="18"
                    class="three-dot"
                  />
                  <!-- </v-btn> -->
                </template>

                <v-list class="list_three_dot">
                  <v-list-item>
                    <v-list-item-title
                      role="menuitem"
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                      class="item_three_dot"
                    >
                      <img
                        src="../../assets/files_image/three_dot/rename_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Rename
                    </v-list-item-title>
                    <v-list-item-title
                      class="item_three_dot_none"
                      role="menuitem"
                      aria-disabled="true"
                      data-disabled
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                    >
                      <img
                        src="../../assets/files_image/three_dot/move_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Move
                    </v-list-item-title>
                    <v-list-item-title
                      class="item_three_dot_none"
                      role="menuitem"
                      aria-disabled="true"
                      data-disabled
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                    >
                      <img
                        src="../../assets/files_image/three_dot/duplicate_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Duplicate
                    </v-list-item-title>
                    <div class="_divider_wzz4a_1"></div>
                    <v-list-item-title
                      class="item_three_dot_none"
                      role="menuitem"
                      aria-disabled="true"
                      data-disabled
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                    >
                      <img
                        src="../../assets/files_image/three_dot/embed_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Embed
                    </v-list-item-title>
                    <div class="_divider_wzz4a_1"></div>
                    <v-list-item-title
                      role="menuitem"
                      tabindex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item
                      class="item_three_dot"
                    >
                      <img
                        src="../../assets/files_image/three_dot/delete_img.png"
                        width="16"
                        height="16"
                        alt="image"
                        class="icon_img"
                      />
                      Delete
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    selectDialog: false,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>

<style scoped>
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
  text-transform: none;
  letter-spacing: 0;
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
._drive_bzjrc_1 ._list_bzjrc_11 {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-shrink: 0;
  padding: 0 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
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
.style-module_list__X6WDt
  .style-module_head__NLyXc
  .style-module_headItem__55ZxH {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
}
.style-module_list__X6WDt
  .style-module_head__NLyXc
  .style-module_headItem__55ZxH.style-module_thumb__RYrpu {
  width: 6rem;
}
.style-module_list__X6WDt
  .style-module_head__NLyXc
  .style-module_headItem__55ZxH.style-module_detail__r0sak {
  display: flex;
  flex: 1;
  min-width: 10rem;
}
.style-module_list__X6WDt
  .style-module_head__NLyXc
  .style-module_headItem__55ZxH.style-module_time__g2tr7 {
  width: 12rem;
}
.style-module_list__X6WDt
  .style-module_head__NLyXc
  .style-module_headItem__55ZxH.style-module_action__zsYAQ {
  width: 5rem;
}
.style-module_list__X6WDt .style-module_body__Y6-eC {
  display: flex;
  flex-direction: column;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky {
  display: flex;
  flex-direction: row;
  transition: background-color 0.2s;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_thumb__RYrpu {
  width: 6rem;
  cursor: pointer;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_detail__r0sak {
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
  min-width: 10rem;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_detail__r0sak
  h3 {
  font-size: 1rem;
  font-weight: 600;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_detail__r0sak
  p {
  color: hsl(0, 0%, 52.3%);
  margin-top: 0.15rem;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_thumb__RYrpu
  i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
}
._video_1hpv2_5,
._audio_1hpv2_9 {
  background-color: hsl(0, 0%, 56.1%);
}
.style-module_list__X6WDt .style-module_body__Y6-eC {
  display: flex;
  flex-direction: column;
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
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0 {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_detail__r0sak {
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
  min-width: 10rem;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0 {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_time__g2tr7 {
  width: 12rem;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_action__zsYAQ {
  width: 5rem;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_action__zsYAQ
  button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  opacity: 0.7;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  transition: opacity 0.2s, background-color 0.2s;
}
.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky:hover {
  background-color: hsl(0, 0%, 95.1%);
}
button.style-module_button__-niPX.style-module_text__uHJEq.style-module_medium__ASKee {
  opacity: 0.7;
}
button.style-module_button__-niPX.style-module_text__uHJEq.style-module_medium__ASKee:hover {
  opacity: 1;
}

.style-module_list__X6WDt
  .style-module_body__Y6-eC
  .style-module_bodyItem__oV1ky
  .style-module_bodyItemColumn__bwSo0.style-module_action__zsYAQ
  .three-dot:hover {
  opacity: 1;
  background-color: hsla(0, 0%, 0%, 0.071);
  border-radius: 50%;
}
.three-dot .v-list-item-title:hover {
  background-color: red;
}
._divider_wzz4a_1 {
  width: 100%;
  height: 1px;
  background-color: hsl(0, 0%, 90.9%);
}
.v-list-item.v-theme--light.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text {
  padding: 0;
}
.item_three_dot {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  font-weight: 600;
  font-size: 0.9rem;
  color: hsl(0, 0%, 9%);
}
.item_three_dot_none {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  font-weight: 600;
  font-size: 0.9rem;
  color: hsl(0, 0%, 52.3%);
}
.v-menu > .v-overlay__content > .v-card,
.v-menu > .v-overlay__content > .v-sheet,
.v-menu > .v-overlay__content > .v-list {
  border-radius: 12%;
  width: 10rem;
}
.v-list {
  overflow: hidden;
}
.v-menu > .v-overlay__content > .v-list {
  overflow: hidden;
}
.icon_img {
  margin-right: 0.35rem;
}
.item_three_dot:hover {
  background-color: hsla(0, 0%, 0%, 0.071);
}
.DialogContent {
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
  margin: 10vh auto;
  width: 90vw;
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
.DialogContent .DialogHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid hsl(0, 0%, 90.9%);
  background-color: hsl(0, 0%, 97.3%);
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
.DialogContent .DialogHeader p {
  display: flex;
  flex: 1;
  font-weight: 600;
  color: hsl(0, 0%, 9%);
}
button {
  transition: all 0.1s;
}
.DialogHeader button {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 1rem;
  height: 1.75rem;
  width: 1.75rem;
  padding: 0;
  transition: background-color 0.2s;
}
.DialogContent .DialogHeader button:hover {
  background-color: hsl(0, 0%, 88.7%);
}
.v-dialog > .v-overlay__content > .v-card > .v-card-text {
  font-size: inherit;
  letter-spacing: 0.03125em;
  line-height: inherit;
  padding: 0;
}
.DialogHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: hsl(0, 0%, 97.3%);
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid hsl(0, 0%, 90.9%);
}
.DialogHeader p {
  display: flex;
  flex: 1;
}

.v-field__field {
  background-color: #fcfcfc;
  border-radius: 2rem;
  border: 1px solid hsl(0, 0%, 78%);
}
.v-input__control {
  width: 30rem;
}
.form-wrap {
  padding: 1rem 2rem;
}
.v-input--density-default .v-field--variant-outlined,
.v-input--density-default .v-field--single-line,
.v-input--density-default .v-field--no-label {
  --v-field-padding-bottom: 15px;
  border-radius: 20rem;
}
.v-field__outline {
  display: none;
}
.v-textarea .v-field--no-label textarea,
.v-textarea .v-field--active textarea {
  opacity: 1;
  height: 5rem;
}

.title_field input#input-0 {
  margin-top: 0;
}

.title_field .v-field__input {
  color: inherit;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.009375em;
  opacity: var(--v-high-emphasis-opacity);
  min-height: 30px !important;
  min-width: 0;
  padding-inline-start: var(--v-field-padding-start);
  padding-inline-end: var(--v-field-padding-end);
  padding-top: var(--v-field-input-padding-top);
  padding-bottom: var(--v-field-input-padding-bottom);
  position: relative;
  width: 100%;
}
.title_field .v-field__input {
  padding-top: 6px;
}
.title_field .v-field__field {
  height: 35px;
}
.select-category .v-field__field {
  width: 480px;
  height: 34px;
}
.select-category .v-field__input {
  padding-top: 2px;
}
form ._cover_yry9z_33 {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
._picker_1paap_1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
}
button {
  transition: all 0.1s;
}
._picker_1paap_1 ._preview_1paap_8 {
  width: 3rem;
  height: 3rem;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  background-color: hsl(0, 0%, 78%);
  transition: border 0.2s;
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
.style-module_button__-niPX.style-module_small__8crLq {
  height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 1rem;
  font-size: 0.85rem;
}
.style-module_button__-niPX.style-module_text__uHJEq {
  color: hsl(0, 0%, 43.5%);
}
._picker_1paap_1 ._preview_1paap_8 img,
._picker_1paap_1 ._preview_1paap_8 svg,
._picker_1paap_1 ._preview_1paap_8 video {
  width: 100%;
  height: 100%;
  transition: border 0.2s;
  position: absolute;
  object-fit: cover;
  z-index: 0;
  cursor: pointer;
}
.published_checkbox .v-selection-control__input input {
  cursor: pointer;
  position: absolute;
  left: 11px;
  top: 0;
  width: 45%;
  height: 100%;
  opacity: none;
}
.published_checkbox .v-selection-control__input {
  width: var(--v-selection-control-size);
  height: var(--v-selection-control-size);
  align-items: center;
  display: flex;
  flex: none;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  left: -9px;
}
._save_yry9z_1 ._content_yry9z_11 form ._actions_yry9z_38 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid hsl(0, 0%, 88.7%);
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
._save_yry9z_1 ._content_yry9z_11 form ._actions_yry9z_38 button {
  margin-right: 1rem;
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
.style-module_button__-niPX.style-module_text__uHJEq:hover {
  color: hsl(0, 0%, 9%);
}
._save_yry9z_1 ._content_yry9z_11 form ._actions_yry9z_38 button {
  margin-right: 1rem;
}
.style-module_button__-niPX.style-module_primary__FOp7N:hover {
  background-color: hsl(336, 80%, 57.8%);
}
._save_yry9z_1 ._content_yry9z_11 form {
  max-width: 32rem;
}
.v-input__details {
  display: none;
}
.style-module_input__8lk6o {
  margin-bottom: 0.8rem;
}
.style-module_input__8lk6o .style-module_label__QBJfY {
  margin-bottom: 0.25rem;
}
.DialogContentContainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 1.5rem;
}
.style-module_input__8lk6o {
  margin-bottom: 1.5rem;
}
.style-module_widthFull__EQnlX,
.style-module_widthFull__EQnlX input,
.style-module_widthFull__EQnlX textarea,
.style-module_widthFull__EQnlX select {
  width: 100%;
}
.DialogActions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid hsl(0, 0%, 90.9%);
  padding: 0.75rem 1.5rem;
  gap: 0.5rem;
  background-color: hsl(0, 0%, 97.3%);
}
.v-dialog > .v-overlay__content > .v-card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}
.v-btn--variant-elevated,
.v-btn--variant-flat {
  background: none;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.style-module_button__-niPX.style-module_text__uHJEq.style-module_medium__ASKee {
  border: hidden;
}
.v-btn--variant-elevated {
  box-shadow: none;
}

.v-btn__overlay {
  background-color: none;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.DialogContentContainerVideo {
  display: flex;
  justify-content: center;
  flex-direction: unset !important;
  padding: 0;
}
</style>
