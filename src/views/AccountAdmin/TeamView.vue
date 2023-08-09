<template>
    <div class="_content_1mq9d_77" id="account-section">
        <div class="_team_12suf_1 animation fade-in">
            <div class="_heading_12suf_8">
                <h1>Team</h1>
                <p >
                    Manage team members and their billing from one account. Additional seat follows same pricing and payment cycle as active on admin account, more details
                    <a href="#">here</a>
                    .
                </p>
            </div>

            <div class="_content_12suf_31">
                <div>
                    <button 
                    class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee"
                    @click="showCreateTeam = !showCreateTeam"
                    v-bind:class="{ createTeam: showCreateTeam, '': !showCreateTeam }" 


                    >
                        <span>
                            <span>Create team</span>
                            <span>
                                <span class="style-module_spacing__fGq8-"></span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </span>
                    </button>
                </div>

                <div 
                class="animation fade-in"

                v-bind:class="{ createTeam: !showCreateTeam, '': showCreateTeam }" 

                >
                    <div class="style-module_input__8lk6o style-module_widthAuto__vceco">
                        <p class="style-module_label__QBJfY">Organization name</p>
                        <input type="text" placeholder="eg: Acme Inc." required name="name" maxlength="20" value>
                    </div>
                    <div class="style-module_input__8lk6o style-module_widthAuto__vceco">
                        <p class="style-module_label__QBJfY">Organization website</p>
                        <input type="url" placeholder="eg: https://example.com" required name="website" value>
                    </div>
                    <div>
                        <button class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee" type="submit">
                            <span>
                                <span>
                                    <i class="fas fa-check"></i>
                                    <span class="style-module_spacing__fGq8-"></span>
                                </span>
                                <span>Create</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        showCreateTeam: false
    }),
}
</script>
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
._team_12suf_1 {
    display: flex;
    flex-direction: column;
    flex: 1 0 0%;
    max-width: 40rem;
}
.animation.fade-in {
    animation-name: fadein;
    animation-duration: .5s;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes fadein {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
._team_12suf_1 ._heading_12suf_8 {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}
h1, h2, h3, h4, h5, h6, p, a, ul, li, label, input, textarea, select {
    margin: 0;
    padding: 0;
}
._team_12suf_1 ._heading_12suf_8 h1 {
    font-weight: 700;
    font-size: 700;
    color: hsl(0, 0%, 9%);
}
._team_12suf_1 ._heading_12suf_8 p {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: hsl(0, 0%, 43.5%);
}
._team_12suf_1 ._heading_12suf_8 p a {
    color: hsl(0, 0%, 43.5%);
    text-decoration: underline;
    transition: color 0.2s ease 0s;
}
._team_12suf_1 ._content_12suf_31 {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin-top: 1.5rem;
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
.style-module_button__-niPX.style-module_primary__FOp7N {
    background-color: hsl(336, 75%, 47.2%);
    color: hsl(0, 0%, 95.1%);
}
.style-module_button__-niPX span {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.style-module_button__-niPX.style-module_medium__ASKee .style-module_spacing__fGq8- {
    width: .35rem;
}
.style-module_button__-niPX.style-module_primary__FOp7N:hover {
    background-color: hsl(336, 80%, 57.8%);
}
.style-module_widthAuto__vceco {
    width: auto;
}
.style-module_input__8lk6o {
    margin-bottom: 1.5rem;
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
.style-module_input__8lk6o input[type=text]:hover, .style-module_input__8lk6o input[type=text]:focus, .style-module_input__8lk6o input[type=email]:hover, .style-module_input__8lk6o input[type=email]:focus, .style-module_input__8lk6o input[type=number]:hover, .style-module_input__8lk6o input[type=number]:focus, .style-module_input__8lk6o input[type=password]:hover, .style-module_input__8lk6o input[type=password]:focus, .style-module_input__8lk6o input[type=search]:hover, .style-module_input__8lk6o input[type=search]:focus, .style-module_input__8lk6o input[type=url]:hover, .style-module_input__8lk6o input[type=url]:focus, .style-module_input__8lk6o textarea:hover, .style-module_input__8lk6o textarea:focus, .style-module_input__8lk6o select:hover, .style-module_input__8lk6o select:focus, .style-module_input__8lk6o .style-module_box__jZAWt:hover, .style-module_input__8lk6o .style-module_box__jZAWt:focus {
    border: 1px solid hsl(336, 73.7%, 53.5%);
}

.createTeam{
    display: none;
}
</style>