<template>
  <!-- <v-responsive> -->
  <div class="_save_yry9z_1 animation fade-in">
    <div class="_navigation_154g4_1">
      <div class="_breadcrumbs_rw006_1">
        <a class="notranslate" href="#">Books</a>
        <i class="fas fa-chevron-right"></i>
        <a class="notranslate" href="#">Create</a>
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>

    <div class="_content_yry9z_11 animation fade-in">
      <form>
        <div class="style-module_input__8lk6o style-module_widthFull__EQnlX">
          <p class="style-module_label__QBJfY">Name</p>
          <v-text-field
            dense
            class="title_field"
            placeholder="Enter podcast show title, eg: Arts Books Fan club"
            variant="outlined"
          ></v-text-field>
          <!-- <v-text-field solo placeholder="Enter podcast show title, eg: Arts Books Fan club" height="20px"></v-text-field> -->
        </div>
        <div class="style-module_input__8lk6o style-module_widthFull__EQnlX">
          <p class="style-module_label__QBJfY">Author</p>
          <v-textarea
            class="textarea"
            bg-color="white"
            color="hsl(0, 0%, 43.5%)"
            placeholder="Enter show description eg: Exploring new books in the world of arts."
          ></v-textarea>
        </div>
        <div class="_row_yry9z_23">
          <div class="style-module_input__8lk6o style-module_widthFull__EQnlX">
            <p class="style-module_label__QBJfY">Category</p>
            <v-select
              class="select-category"
              :items="['test1', 'test2', 'test3', 'test4', 'test5', 'test6']"
              variant="outlined"
              placeholder="Select a category"
            ></v-select>
          </div>
        </div>
        <div class="_cover_yry9z_33">
          <div class="_picker_1paap_1">
            <button type="button" class="_preview_1paap_8">
              <img
                src="../../assets/create_podcast/image_img.png"
                alt="image"
              />
            </button>
            <button
              class="style-module_button__-niPX style-module_text__uHJEq style-module_small__8crLq"
              type="button"
            >
              <span>
                <span>Pick cover image</span>
              </span>
            </button>
          </div>
        </div>
        <div
          class="style-module_input__8lk6o style-module_checkbox__AOffm style-module_widthAuto__vceco"
        >
          <label>
            <v-checkbox
              color="hsl(336, 73.7%, 53.5%)"
              class="published_checkbox"
              label="Published"
            ></v-checkbox>
          </label>
        </div>
        <div class="_actions_yry9z_38">
          <button
            class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee"
            type="submit"
          >
            <span>
              <span>
                <img
                  src="../../assets/create_podcast/tick_img.png"
                  width="16"
                  height="16"
                  alt="image"
                />
                <span class="style-module_spacing__fGq8-"></span>
              </span>
              <span>Save</span>
            </span>
          </button>
          <a>
            <button
              class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee"
              type="button"
            >
              <span>
                <span>Cancel</span>
              </span>
            </button>
          </a>
        </div>
      </form>
    </div>
  </div>
  <!-- </v-responsive> -->
</template>
<style>
.animation {
  transform: translateZ(0);
  will-change: transform;
}
._save_yry9z_1 {
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

._breadcrumbs_rw006_1 .fa-chevron-right {
  color: hsl(0, 0%, 9%);
  font-size: 0.7rem;
}
._breadcrumbs_rw006_1 .fa-chevron-down {
  color: hsl(0, 0%, 9%);
  font-size: 0.7rem;
}
._save_yry9z_1 ._content_yry9z_11 {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-shrink: 0;
  padding: 1rem 2rem;
  overflow-x: hidden;
  overflow-y: auto;
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
  margin-bottom: .8rem;
}
.style-module_input__8lk6o .style-module_label__QBJfY {
  margin-bottom: 0.25rem;
}
</style>
