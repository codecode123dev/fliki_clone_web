<template>
  <div class="style_main__ahEw1">
    <section class="style_hero__SOAP3">
      <div class="style_wrapper__mgTHs style_wrapper__JQpkh">
        <h1>
          Easy, powerful and
          <span>affordable</span>
        </h1>
        <h2>
          Fliki offers one of the most cost-effective solutions in the market to
          give you complete value for money!
        </h2>
      </div>
    </section>
    <section class="style_plans__kBw1C">
      <div class="style_wrapper__mgTHs style_wrapper__JQpkh">
        <div class="style_cycle__wasZr">
          <div class="style_switch__yv984">
            <!-- <button type="button" :class="{ style_active___4Aod : toggleClick}" @dblclick="onToggleClick($event)">Pay monthly</button>
            <button type="button" :class="{ style_active___4Aod : toggleClick}" @dblclick="onToggleClick($event)"> -->
            <button
              type="button"
              v-bind:class="{ white: !clickedButton1, '': clickedButton1 }"
              @click="clickedButton1 = !clickedButton1"
            >
              Pay monthly
            </button>
            <button
              type="button"
              v-bind:class="{ white: clickedButton1, '': !clickedButton1 }"
              @click="clickedButton1 = !clickedButton1"
            >
              Pay yearly
              <span>⚡️25% off</span>
            </button>
          </div>
        </div>
        <div class="style_list__GmqcG">
          <div class="style_item___KEPt style_free__QYjpL">
            <div class="style_name__uE30W">
              <h2>Free</h2>
              <p>Get started without any credit cards for one off projects</p>
            </div>
            <div class="style_features__CAVmT">
              <div>
                <i>📝</i>
                <p>
                  <span>5 minutes</span>
                  of audio and video content per month
                </p>
              </div>
              <div>
                <i>🎥</i>
                <p>HD - 720p low-res videos</p>
              </div>
              <div>
                <i>🔗</i>
                <p>Convert Blog articles, PPT and Tweets</p>
              </div>
              <div>
                <i>🇺🇸</i>
                <p>300 (limited) voices, 75+ languages & 100+ dialects</p>
              </div>
              <div>
                <i>✐</i>
                <p>Contains Fliki Watermark</p>
              </div>
            </div>
            <div class="style_price__FJH9d">
              <h4>Free</h4>
              <p>Upgrade as you scale</p>
              <div class="style_button__4v9Tl">
                <a href="#">
                  <button
                    class="style-module_button__-niPX style-module_medium__ASKee"
                    type="button"
                  >
                    Start now
                    <span class="style-module_spacing__fGq8-"></span>
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="style_item___KEPt">
            <div 
            v-bind:class="{ style_offer__aonly: clickedButton1, '': !clickedButton1 }" 
            ></div>
            <div class="style_name__uE30W">
              <h2>
                Basic
                <span class="style_audio__ZWI_K">🎙️ audio only</span>
              </h2>
              <p>
                Perfect for those who are looking to create audio only using
                human-like AI voices
              </p>
            </div>
            <div class="style_features__CAVmT">
              <div>
                <i>📝</i>
                <p>
                  <span>120 minutes</span>
                  of audio content per month
                </p>
              </div>
              <div>
                <i>🇺🇸</i>
                <p>900+ voices, 75+ languages & 100+ dialects</p>
              </div>
              <div>
                <i>🌎</i>
                <p>Translate audio to 75+ languages</p>
              </div>
              <div>
                <i>🏁</i>
                <p>Audios of length upto 15 mins</p>
              </div>
              <div>
                <i>©</i>
                <p>Commercial rights</p>
              </div>
            </div>
            <div class="style_price__FJH9d">
              <h4>
                <span 
                v-bind:class="{ style_original__ruhRz: clickedButton1, '': !clickedButton1 }" 

                >
                  <span class="font-sans-serif">$8</span>
                  
                </span>
                <span 
                class="discounted"
                v-bind:class="{ discountedInline: clickedButton1, '': !clickedButton1 }"
                >
                  <span class="font-sans-serif">$6</span>
                  
                </span>
              </h4>
              <p>per month</p>
              <div class="style_button__4v9Tl">
                <a href="#">
                  <button
                    class="style-module_button__-niPX style-module_medium__ASKee"
                    type="button"
                  >
                    <i class="fas fa-check"></i>
                    <span class="style-module_spacing__fGq8-"></span>
                    Subscribe now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="style_item___KEPt style_standard__FUrZV">
            <div 
            v-bind:class="{ style_offer__aonly: clickedButton1, '': !clickedButton1 }" 
            ></div>
            <div class="style_name__uE30W">
              <h2>
                Standard
                <span class="style_standard__FUrZV">🔥 popular</span>
              </h2>
              <p>
                Perfect for individuals and professionals who are looking create
                videos with voiceovers effortlessly
              </p>
            </div>
            <div class="style_features__CAVmT">
              <div>
                <i>📝</i>
                <p>
                  <span>180 minutes</span>
                  of audio / video content per month
                </p>
              </div>
              <div>
                <i>🎥</i>
                <p>Full HD - 1080p videos</p>
              </div>
              <div>
                <i>🏁</i>
                <p>Videos of length upto 15 mins</p>
              </div>
              <div>
                <i>🌠</i>
                <p>Millions of premium images, video clips and music assets</p>
              </div>
              <div>
                <i>✂︎</i>
                <p>No Watermark</p>
              </div>
            </div>
            <div class="style_price__FJH9d">
              <h4 class="animation slide-up">
                <span 
                v-bind:class="{ style_original__ruhRz: clickedButton1, '': !clickedButton1 }" 
                >
                  <span class="font-sans-serif">$28</span>
                  
                </span>
                <span 
                class="discounted"
                v-bind:class="{ discountedInline: clickedButton1, '': !clickedButton1 }"
                >
                  <span class="font-sans-serif">$21</span>
                  
                </span>
              </h4>
              <p>per month</p>
              <div class="style_button__4v9Tl">
                <a href="#">
                  <button
                    class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee"
                  >
                    <i class="fas fa-check"></i>
                    <span class="style-module_spacing__fGq8-"></span>
                    Subscribe now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="style_item___KEPt">
            <div 
            v-bind:class="{ style_offer__aonly : clickedButton1, '': !clickedButton1 }" 
            ></div>
            <div class="style_name__uE30W">
              <h2>Premium</h2>
              <p>
                Ideal for power users and businesses who want to use Fliki's
                advance AI features and create content at scale
              </p>
            </div>
            <div class="style_features__CAVmT">
              <div>
                <i>📝</i>
                <p>
                  <span>600 minutes</span>
                  of audio / video content per month
                </p>
              </div>
              <div>
                <i>🏁</i>
                <p>Videos of length upto 30 mins</p>
              </div>
              <div>
                <i>🎙️</i>
                <p>Voice Cloning</p>
              </div>
              <div>
                <i>🗣️</i>
                <p>150+ Ultra realistic voices</p>
              </div>
              <div>
                <i>🔌</i>
                <p>API access</p>
              </div>
              <div>
                <i>‍👩‍💼</i>
                <p>Dedicated account manager</p>
              </div>
            </div>
            <div class="style_price__FJH9d">
              <h4>
                <span 
                v-bind:class="{ style_original__ruhRz: clickedButton1, '': !clickedButton1 }" 
                
                >
                  <span class="font-sans-serif">$88</span>
                  
                </span>
                <span 
                class="discounted"
                v-bind:class="{ discountedInline: clickedButton1, '': !clickedButton1 }"
                 >
                  <span class="font-sans-serif">$66</span>
                  
                </span>
              </h4>
              <p>per month</p>
              <div class="style_button__4v9Tl">
                <a href="#">
                  <button
                    class="style-module_button__-niPX style-module_medium__ASKee"
                    type="button"
                  >
                    <i class="fas fa-check"></i>
                    <span class="style-module_spacing__fGq8-"></span>
                    Subscribe now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="style_custom__E_4rF">
      <div class="style_wrapper__mgTHs style_wrapper__JQpkh">
        <div class="style_item___KEPt">
          <h3>
            <strong>💼 Enterprise</strong>
          </h3>
          <p>
            🎙️ Voice cloning ● 🗣️ Ultra realistic voices ● 💻 Video API ● 🌠
            Custom templates ● ⚡️ Higher usage
          </p>
          <p>
            Custom plan tailored to your specific needs,
            <a href="#">
              <button
                class="style-module_button__-niPX style-module_medium__ASKee"
                type="button"
              >
                Get in touch
                <span class="style-module_spacing__fGq8-"></span>
                <i class="fas fa-arrow-right"></i>
              </button>
            </a>
          </p>
        </div>
      </div>
    </section>
    <section class="style_featuresTable__voKme">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Free</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody v-for="feature in features" :key="feature.id">
          <tr>
            <td>
              <p>{{ feature.name }}</p>
            </td>
            <td>
              <p>{{ feature.free }}</p>
            </td>
            <td>
              <p>{{ feature.basic }}</p>
            </td>
            <td>
              <p>{{ feature.standard }}</p>
            </td>
            <td>
              <p>{{ feature.premium }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="style_faq___FTGB">
      <div class="style_wrapper__mgTHs style_wrapper__JQpkh">
        <h2>Frequently asked questions</h2>
        <div class="style_item___KEPt">
          <h3>
            How does Fliki calculate the minutes used or How do credits work?
          </h3>
          <p>
            Credits of minutes used are calculated based on the duration of
            audio or video generated in Fliki.
            <br />
            Please checkout this
            <a href="#">video</a>
            which shows in detail how credits work.
          </p>
        </div>
        <div class="style_item___KEPt">
          <h3>Can I create videos in the Basic plan?</h3>
          <p>
            The Basic plan allows you to only create and export audio content
            its best for people who want voiceovers, podcasts and audiobooks.
            <br />
            Select the Standard or Premium plan in order to create videos.
          </p>
        </div>
        <div class="style_item___KEPt">
          <h3>
            What is the maximum length of an audio/video file I can create?
          </h3>
          <p>
            The standard plan offers creating audio/video upto 15 mins in
            length. The premium plan offers creating audio/video upto 30 mins in
            length.
          </p>
        </div>
        <div class="style_item___KEPt">
          <h3>Can I use Fliki to create Youtube videos?</h3>
          <p>
            Yes, with our subscription plans you get commercial license to all
            the content you create. You can use the content created to publish
            on Youtube or other social media and monetize it, provided your text
            content is original in nature and does not have any copyright
            conflict.
          </p>
        </div>
        <div class="style_item___KEPt">
          <h3>Will I get copyright issues with content created with Fliki?</h3>
          <p>
            Fliki provides media from royalty free media sources and also have
            license to the premium media to be used with commercial rights on
            all social media platforms.
          </p>
        </div>
        <div class="style_item___KEPt">
          <h3>Does Fliki provide an API?</h3>
          <p>
            Yes, we do provide an API you can get more information
            <a href="#">here</a>
            .
          </p>
        </div>
        <div class="style_item___KEPt">
          <h3>What if I only need Fliki for a short amount of time?</h3>
          <p>
            You can cancel your subscription at anytime by navigating to
            <a href="#">Account</a>
            and selecting "Manage billing".
          </p>
        </div>
        <div class="style_item___KEPt">
          <h3>How do I pay?</h3>
          <p>
            Prices are listed in USD. We accept all major debit and credit
            cards.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clickedButton1: false,
      clickedButton2: false,
      features: [
        {
          id: 1,
          name: "Video Creation",
          free: "✔",
          basic: "⛌",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 2,
          name: "Remove Watermark",
          free: "⛌",
          basic: "﹣",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 3,
          name: "Video Resolution",
          free: "720p",
          basic: "﹣",
          standard: "1080p",
          premium: "1080p",
        },
        {
          id: 4,
          name: "Export Length",
          free: "5 mins",
          basic: "15 mins",
          standard: "15 mins",
          premium: "25 mins",
        },
        {
          id: 5,
          name: "Voices",
          free: "400",
          basic: "1000+",
          standard: "1000+",
          premium: "1000+",
        },
        {
          id: 6,
          name: "Credits",
          free: "5 mins",
          basic: "120 mins (Audio)",
          standard: "180 mins",
          premium: "600 mins",
        },
        {
          id: 7,
          name: "Podcast",
          free: "✔",
          basic: "✔",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 8,
          name: "Audiobook",
          free: "✔",
          basic: "✔",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 9,
          name: "Blog post to video",
          free: "limited",
          basic: "﹣",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 10,
          name: "Idea to video",
          free: "limited",
          basic: "﹣",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 11,
          name: "PPT to video",
          free: "limited",
          basic: "﹣",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 12,
          name: "Tweet to video",
          free: "✔",
          basic: "✔",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 13,
          name: "Translate",
          free: "⛌",
          basic: "✔",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 14,
          name: "AI Art",
          free: "✔",
          basic: "-",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 15,
          name: "Pronunciation Map",
          free: "⛌",
          basic: "✔",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 16,
          name: "Scene Limit",
          free: "10",
          basic: "50",
          standard: "50",
          premium: "50",
        },
        {
          id: 17,
          name: "Commercial Rights",
          free: "⛌",
          basic: "✔",
          standard: "✔",
          premium: "✔",
        },
        {
          id: 18,
          name: "Media Library",
          free: "Limited",
          basic: "Limited",
          standard: "Premium",
          premium: "Premium",
        },
        {
          id: 19,
          name: "Voice Cloning",
          free: "⛌",
          basic: "⛌",
          standard: "⛌",
          premium: "✔",
        },
        {
          id: 20,
          name: "Ultra Realistic Voices",
          free: "⛌",
          basic: "⛌",
          standard: "⛌",
          premium: "✔",
        },
        {
          id: 21,
          name: "Autopick on paste",
          free: "⛌",
          basic: "⛌",
          standard: "⛌",
          premium: "✔",
        },
        {
          id: 22,
          name: "API Access",
          free: "⛌",
          basic: "⛌",
          standard: "⛌",
          premium: "✔",
        },
        {
          id: 23,
          name: "Faster Exports",
          free: "⛌",
          basic: "⛌",
          standard: "⛌",
          premium: "✔",
        },
        {
          id: 24,
          name: "Support",
          free: "Email only",
          basic: "Email only",
          standard: "Email & live chat ",
          premium: "Email & live chat",
        },
      ],
    };
  },
};
</script>
<style scoped>
.style_main__ahEw1 {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  flex-shrink: 0;
  flex-basis: auto;
}
.style_hero__SOAP3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 0;
}
.style_wrapper__mgTHs {
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding: 1.5rem 2rem;
}
.style_hero__SOAP3 .style_wrapper__JQpkh {
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 4rem;
  justify-content: center;
  align-items: center;
}
a,
h1,
h2,
h3,
h4,
h5,
h6,
input,
label,
li,
p,
select,
textarea,
ul {
  margin: 0;
  padding: 0;
}
.style_hero__SOAP3 .style_wrapper__JQpkh h1 {
  font-size: 3.5rem;
  line-height: 3.5rem;
  font-weight: 800;
  text-align: center;
  max-width: 50rem;
}
.style_hero__SOAP3 .style_wrapper__JQpkh h2 {
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  max-width: 40rem;
  margin-top: 1rem;
}
.style_plans__kBw1C {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 0;
}
.style_plans__kBw1C .style_wrapper__JQpkh {
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 1200px;
}
.style_plans__kBw1C .style_wrapper__JQpkh .style_cycle__wasZr {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_cycle__wasZr
  .style_switch__yv984 {
  display: flex;
  background-color: #eee;
  border-radius: 2rem;
  border: 1px solid #eae4df;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_cycle__wasZr
  .style_switch__yv984
  button {
  border: none;
  outline: none;
  /* background: transparent; */
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  transition: background-color 0.2s;
  font-weight: 400;
}

.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_cycle__wasZr
  .style_switch__yv984
  button.style_active___4Aod {
  background: #fff;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_cycle__wasZr
  .style_switch__yv984
  button
  span {
  font-weight: 600;
}
.style_plans__kBw1C .style_wrapper__JQpkh .style_list__GmqcG {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #eae4df;
  background-color: #fbfbfb;
  position: relative;
  overflow: hidden;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_free__QYjpL {
  background-color: transparent;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_name__uE30W {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_name__uE30W
  h2 {
  display: flex;
  align-items: center;
  font-size: 1.3125rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_name__uE30W
  p {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.1rem;
  color: #000;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_features__CAVmT {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  border-top: 1px solid #eae4df;
  border-bottom: 1px solid #eae4df;
  padding: 0.5rem 0;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_features__CAVmT
  div {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_features__CAVmT
  div
  i {
  font-style: normal;
  font-size: 1rem;
  line-height: 1.3rem;
  margin-right: 0.5rem;
  width: 1rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_features__CAVmT
  div
  p
  span {
  text-decoration: underline;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_price__FJH9d {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_price__FJH9d
  h4 {
  font-family: var(--font-secondary);
  font-size: 1.3125rem;
  font-weight: 700;
  color: #b0003a;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_price__FJH9d
  p {
  font-size: 0.75rem;
  color: #594f51;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_price__FJH9d
  .style_button__4v9Tl {
  margin-top: 0.5rem;
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
  transition-property: background-color, border, color, opacity;
  transition-duration: 0.2s;
  white-space: pre;
}
.style-module_button__-niPX.style-module_medium__ASKee {
  height: 2.15rem;
  padding: 0 1rem;
  border-radius: 1.75rem;
  font-size: 0.9rem;
}
.style-module_button__-niPX.style-module_medium__ASKee
  .style-module_spacing__fGq8- {
  width: 0.25rem;
}
.style-module_button__-niPX .fa-arrow-right::before {
  transition: rgb(255, 255, 255) 0.2s;
  color: rgb(255, 255, 255);
}
a {
  color: inherit;
  text-decoration: none;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_offer__aonly {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 0.3rem;
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_name__uE30W
  h2
  span {
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 400;
  padding: 0.25rem;
  margin-left: 0.5rem;
  border-radius: 0.2rem;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_name__uE30W
  h2
  span.style_audio__ZWI_K {
  background-color: #eee;
}
.animation {
  transform: translateZ(0);
  will-change: transform;
}
@keyframes slideUp {
  0% {
    transform: translateY(0.5rem);
    opacity: 0.1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.animation.slide-up {
  animation: slideUp 0.5s;
  animation-fill-mode: forwards;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_price__FJH9d
  h4 {
  font-size: 1.3125rem;
  font-weight: 700;
  color: #b0003a;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_price__FJH9d
  .style_original__ruhRz {
  text-decoration: line-through;
  font-weight: 400;
}
.font-sans-serif {
  font-family: sans-serif !important;
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_item___KEPt
  .style_price__FJH9d
  h4 {
  font-size: 1.3125rem;
  font-weight: 700;
  color: #b0003a;
}
.style-module_button__-niPX.style-module_medium__ASKee {
  height: 2.15rem;
  padding: 0 1rem;
  border-radius: 1.75rem;
  font-size: 0.9rem;
}
.style-module_button__-niPX .fa-check {
  color: rgb(255, 255, 255);
}
.style_plans__kBw1C
  .style_wrapper__JQpkh
  .style_list__GmqcG
  .style_standard__FUrZV {
  background-color: #fcecf1;
  border: 1px solid #ffc8d7;
}
.style-module_button__-niPX.style-module_medium__ASKee {
  height: 2.15rem;
  padding: 0 1rem;
  border-radius: 1.75rem;
  font-size: 0.9rem;
}
.style-module_button__-niPX.style-module_primary__FOp7N {
  background-color: #d31e66;
  color: #f3f3f3;
}
.style-module_button__-niPX.style-module_primary__FOp7N:hover {
  background-color: #e93d82;
}
.style_custom__E_4rF {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
}
.style_custom__E_4rF .style_wrapper__JQpkh {
  flex-direction: column;
  max-width: 768px;
  border: 1px solid #ffc8d7;
  border-radius: 0.5rem;
}
.style_custom__E_4rF .style_wrapper__JQpkh .style_item___KEPt {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.style_custom__E_4rF .style_wrapper__JQpkh .style_item___KEPt h3 {
  font-size: 1.3125rem;
  line-height: 1.3125rem;
  text-align: center;
}
.style_custom__E_4rF .style_wrapper__JQpkh .style_item___KEPt p:nth-child(2) {
  max-width: 27rem;
  text-align: center;
  margin-top: 0.75rem;
}
.style_custom__E_4rF .style_wrapper__JQpkh .style_item___KEPt p {
  max-width: 23rem;
  text-align: center;
  margin-top: 0.75rem;
}
.style_custom__E_4rF .style_wrapper__JQpkh .style_item___KEPt button {
  display: flex;
  margin: 1rem auto;
}
.style_featuresTable__voKme {
  display: flex;
  margin-bottom: 5rem;
  padding: 2rem;
}
.style_featuresTable__voKme table {
  margin: 0 auto;
}
table {
  border-collapse: collapse;
}
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
table > tbody > tr > td,
table > tbody > tr > th,
table > thead > tr > th {
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid #eae4df;
  padding: 0.5rem 1rem 0.5rem 0;
  margin: 0;
  font-size: 1rem;
}
table > thead > tr > th {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
}
.style_featuresTable__voKme table tbody tr td,
.style_featuresTable__voKme table tbody tr th,
.style_featuresTable__voKme table thead tr td,
.style_featuresTable__voKme table thead tr th {
  padding: 1rem 1.5rem;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.style_featuresTable__voKme table {
  margin: 0 auto;
}
.style_faq___FTGB {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
}
.style_faq___FTGB .style_wrapper__JQpkh {
  flex-direction: column;
  border: 1px solid #eae4df;
  background-color: #f9f2e8;
  max-width: 768px;
  border-radius: 0.5rem;
}
.style_faq___FTGB .style_wrapper__JQpkh h2 {
  font-size: 1.3125rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
}
.style_faq___FTGB .style_wrapper__JQpkh .style_item___KEPt {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.style_faq___FTGB .style_wrapper__JQpkh .style_item___KEPt h3 {
  font-size: 1.3125rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
}
.style_faq___FTGB .style_wrapper__JQpkh .style_item___KEPt a {
  text-decoration: underline;
}
@media (max-width: 1023px) {
  .style_hero__SOAP3 .style_wrapper__JQpkh,
  .style_plans__kBw1C .style_wrapper__JQpkh {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .style_plans__kBw1C .style_wrapper__JQpkh .style_list__GmqcG {
    grid-template-columns: repeat(1, 1fr);
  }
  .style_custom__E_4rF .style_wrapper__JQpkh {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.white {
  background-color: #fff;
}

.discounted {
    display: none;
}
.discountedInline{
  display: inline;
}
</style>
