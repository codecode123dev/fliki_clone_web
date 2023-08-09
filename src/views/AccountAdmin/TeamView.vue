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
                    <button class="style-module_button__-niPX style-module_primary__FOp7N style-module_medium__ASKee">
                        <span>
                            <span>Create team</span>
                            <span>
                                <span class="style-module_spacing__fGq8-"></span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </span>
                    </button>
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
</style>