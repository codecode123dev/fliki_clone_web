<template>
  <div class="_content_1mq9d_77" id="account-section">
    <div class="_profile_1pjp7_1 animation fade-in">
      <div class="_section_1pjp7_9" id="basic">
        <h2>Basic details</h2>
        <div class="_content_1pjp7_19">
          <form>
            <div style="width: 20rem">
              <div
                class="style-module_input__8lk6o style-module_widthAuto__vceco"
              >
                <p class="style-module_label__QBJfY">Email</p>
                <div class="style-module_box__jZAWt"></div>
              </div>
              <div
                class="style-module_input__8lk6o style-module_widthFull__EQnlX"
              >
                <p class="style-module_label__QBJfY">Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  maxlength="25"
                  value="Nguyễn Minh"
                />
              </div>
              <div
                class="style-module_input__8lk6o style-module_widthFull__EQnlX"
              >
                <p class="style-module_label__QBJfY">YouTube channel ID(s)</p>
                <textarea
                  placeholder="channel1"
                  rows="2"
                  maxlength="150"
                ></textarea>
                <div class="style-module_info__sDj8U">
                    <p>
                        Prevent copyright claims.
                        <a href="https://support.google.com/youtube/answer/3250431?hl=en" rel="noreferrer noopener nofollow"> Click here</a>
                        to find your YouTube channel ID.    
                    </p>
                </div>
              </div>
            </div>
            <div class="_actions_1pjp7_24">
                <button class="style-module_button__-niPX style-module_secondary__K8Xdw style-module_medium__ASKee" type="submit">
                    <span>
                        <span>
                            <i class="fas fa-check"></i>
                            <span class="style-module_spacing__fGq8-"></span>
                        </span>
                        <span>Save</span>
                    </span>
                </button>
                <button class="style-module_button__-niPX style-module_text__uHJEq style-module_medium__ASKee" type="button">
                    <span>
                        <span>Change password</span>
                    </span>
                </button>
            </div>
          </form>
        </div>
      </div>

      <div class="_section_1pjp7_9">
        <h2>Email notifications</h2>
        <div class="_content_1pjp7_19">
            <form>
                <div style="width: 16rem;">
                    <div class="style-module_input__8lk6o style-module_checkbox__AOffm style-module_widthAuto__vceco" style="margin-bottom: 1rem;">
                        <label>
                            <input type="checkbox" name="exportStatus" checked>
                            <p>Export status</p>
                        </label>
                        <div class="style-module_info__sDj8U">
                            Get notified whenever your video or audio file is ready for download.
                        </div>
                    </div>
                    <div class="style-module_input__8lk6o style-module_checkbox__AOffm style-module_widthAuto__vceco" style="margin-bottom: 1rem;">
                        <label>
                            <input type="checkbox" name="usageAlerts" checked>
                            <p>Usage alerts</p>
                        </label>
                        <div class="style-module_info__sDj8U">
                            Get notified whenever your credits are low.
                        </div>
                    </div>
                    <div class="style-module_input__8lk6o style-module_checkbox__AOffm style-module_widthAuto__vceco" style="margin-bottom: 1rem;">
                        <label>
                            <input type="checkbox" name="newsletters" checked>
                            <p>Newsletters</p>
                        </label>
                        <div class="style-module_info__sDj8U">
                            Get notified about product updates.
                        </div>
                    </div>
                    <div class="style-module_input__8lk6o style-module_checkbox__AOffm style-module_widthAuto__vceco" style="margin-bottom: 1rem;">
                        <label>
                            <input type="checkbox" name="webinarsAndEvents" checked>
                            <p>Webinars & Events</p>
                        </label>
                        <div class="style-module_info__sDj8U">
                            Get notified about live webinars and events where Fliki team directly interacts with you.
                        </div>
                    </div>
                    <div class="style-module_input__8lk6o style-module_checkbox__AOffm style-module_widthAuto__vceco" style="margin-bottom: 1rem;">
                        <label>
                            <input type="checkbox" name="offersAndPromotions" checked>
                            <p>Offers & Promotions</p>
                        </label>
                        <div class="style-module_info__sDj8U">
                            Never miss excitind discounts, offers and other promotions.
                        </div>
                    </div>
                    <div class="style-module_input__8lk6o style-module_checkbox__AOffm style-module_widthAuto__vceco" style="margin-bottom: 0rem;">
                        <label>
                            <input type="checkbox" name="tutorials" checked>
                            <p>Tutorials</p>
                        </label>
                        <div class="style-module_info__sDj8U">
                            Keep updated about using Fliki so that you get most of out the app.
                        </div>
                    </div>
                </div>
                <div class="_actions_1pjp7_24">
                    <button class="style-module_button__-niPX style-module_secondary__K8Xdw style-module_medium__ASKee" type="submit">
                        <span>
                            <i class="fas fa-check"></i>
                            <span class="style-module_spacing__fGq8-"></span>
                        </span>
                        <span>Save</span>
                    </button>
                </div>
            </form>
        </div>
      </div>

      <div class="_section_1pjp7_9" id="danger">
        <h2> Danger zone</h2>
        <div class="_content_1pjp7_19">
            <div class="_actions_1pjp7_24">
                <button class="style-module_button__-niPX style-module_secondary__K8Xdw style-module_medium__ASKee" type="button">
                    <span>
                        <span>
                            <img src="../../assets/account_image/credit_img/reset_img.png" >
                            <span class="style-module_spacing__fGq8-"></span>
                        </span>
                        <span >Reset account data</span>
                    </span>
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
._account_1mq9d_1 ._content_1mq9d_77 {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-shrink: 0;
    overflow-x: auto;
    /* overflow-y: scroll; */
    margin-left: 1.5rem;
}

.animation {
    transform: translateZ(0);
    will-change: transform;
}
._profile_1pjp7_1 {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-shrink: 0;
    justify-items: flex-start;
    align-items: flex-start;
}
.animation.fade-in {
    animation-name: fadein;
    animation-duration: .5s;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes fadein{
    0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}
._profile_1pjp7_1 ._section_1pjp7_9 {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
}
h1, h2, h3, h4, h5, h6, p, a, ul, li, label, input, textarea, select {
    margin: 0;
    padding: 0;
}
._profile_1pjp7_1 ._section_1pjp7_9 h2 {
    font-weight: 700;
    font-size: 1.3125rem;
    color: hsl(0, 0%, 9%);
}

._profile_1pjp7_1 ._section_1pjp7_9 ._content_1pjp7_19 {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
}
.style-module_input__8lk6o {
    margin-bottom: 1.5rem;
}
.style-module_widthAuto__vceco {
    width: auto;
}
.style-module_input__8lk6o .style-module_label__QBJfY {
    margin-bottom: .25rem;
    color: hsl(0, 0%, 43.5%);
    font-size: .9rem;
    font-weight: 600;
}
.style-module_input__8lk6o input[type=text], .style-module_input__8lk6o input[type=email], .style-module_input__8lk6o input[type=number], .style-module_input__8lk6o input[type=password], .style-module_input__8lk6o input[type=search], .style-module_input__8lk6o input[type=url], .style-module_input__8lk6o textarea, .style-module_input__8lk6o select, .style-module_input__8lk6o .style-module_box__jZAWt {
    display: flex;
    outline: none;
    background: hsl(0, 0%, 99%);
    border: 1px solid hsl(0, 0%, 78%);
    font-size: 1rem;
    font-weight: 400;
    color: hsl(0, 0%, 9%);
    border-radius: 1.25rem;
    padding: .2rem .75rem;
    transition: border-color .2s;
    box-shadow: none;
    min-height: 2.3rem;
    min-width: 16rem;
    word-break: break-word;
}
.style-module_input__8lk6o .style-module_box__jZAWt {
    align-items: center;
    cursor: default;
    color: hsl(0, 0%, 43.5%);
    border: 1px solid hsl(0, 0%, 78%)!important;
}
.style-module_input__8lk6o {
    margin-bottom: 1.5rem;
}
.style-module_widthFull__EQnlX, .style-module_widthFull__EQnlX input, .style-module_widthFull__EQnlX textarea, .style-module_widthFull__EQnlX select {
    width: 100%;
}
.style-module_input__8lk6o textarea {
    resize: vertical;
    white-space: pre-wrap;
}
.style-module_widthFull__EQnlX, .style-module_widthFull__EQnlX input, .style-module_widthFull__EQnlX textarea, .style-module_widthFull__EQnlX select {
    width: 100%;
}

.style-module_input__8lk6o .style-module_info__sDj8U {
    margin-top: .3rem;
    color: hsl(0, 0%, 52.3%);
    font-size: .75rem;
    font-weight: 400;
}
.style-module_input__8lk6o .style-module_info__sDj8U a {
    font-size: .75rem;
    color: hsl(0, 0%, 52.3%)!important;
    text-decoration: underline;
}
._profile_1pjp7_1 ._section_1pjp7_9 ._content_1pjp7_19 form ._actions_1pjp7_24 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.5rem;
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
.style-module_button__-niPX.style-module_secondary__K8Xdw {
    background-color: hsl(0, 0%, 99%);
    color: hsl(0, 0%, 9%);
    border: 1px solid hsl(0, 0%, 56.1%);
}
.style-module_button__-niPX span {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.style-module_button__-niPX.style-module_secondary__K8Xdw:hover {
    color: hsl(336, 75%, 47.2%);
    border: 1px solid hsl(336, 75%, 47.2%);
}
._profile_1pjp7_1 ._section_1pjp7_9 {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
}
._profile_1pjp7_1 ._section_1pjp7_9 h2 {
    font-weight: 700;
    font-size: 1.3125rem;
    color: hsl(0, 0%, 9%);
}
._profile_1pjp7_1 ._section_1pjp7_9 ._content_1pjp7_19 {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
}
.style-module_widthAuto__vceco {
    width: auto;
}
.style-module_checkbox__AOffm label {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.style-module_checkbox__AOffm label input {
    accent-color: hsl(336, 73.7%, 53.5%);
}
.style-module_input__8lk6o input:read-only, .style-module_input__8lk6o input:disabled, .style-module_input__8lk6o select:disabled {
    cursor: default;
    color: hsl(0, 0%, 78%);
    border: 1px solid hsl(0, 0%, 90.9%)!important;
}
.style-module_checkbox__AOffm label p {
    margin-left: .5rem;
}
.style-module_input__8lk6o .style-module_info__sDj8U {
    margin-top: .3rem;
    color: hsl(0, 0%, 52.3%);
    font-size: .75rem;
    font-weight: 400;
}
.style-module_button__-niPX.style-module_secondary__K8Xdw .fa-check {
    color: hsl(0, 0%, 9%);
    font-size: 1rem;
}
</style>