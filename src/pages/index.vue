<template>
  <div>
    <div class="hero has-text-centered">
        <h1 class="title">vue cli auto routing boilerplate</h1>
        <span class="sub">vue cli + bulma + auto routing</span>
    </div>
    <div class="column has-text-centered">
      <h1 class="feature">Feature</h1>
    </div>
    <div class="columns is-multiline is-centered">
      <div class="column is-3 has-text-centered">
        <card imgsrc="https://jgthms.com/web-design-in-4-minutes/bulma.png" title="vue-cli-bulma" author="@neovive" description="This is an example app that demonstrates using Bulma with a Vue CLI 3 generated application" url="https://github.com/neovive/bulma-vuecli"></card>
      </div>
      <div class="column is-3 has-text-centered">
      <card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" title="vue-cli-plugin-auto-routing" author="@ktsn" description="Vue CLI plugin that provides auto routing feature." url="https://github.com/ktsn/vue-cli-plugin-auto-routing"></card>
    </div>
    </div>
    <footer class="footer has-text-centered">
    <div class="content">
    <a href="https://github.com/ytype/vue-cli-auto-routing-boilerplate"><img class="github" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"></a>
    <a href="https://github.com/ytype/vue-cli-auto-routing-boilerplate"><p class="git-url">https://github.com/ytype/vue-cli-auto-routing-boilerplate</p></a>
  </div>
</footer>
  </div>
</template>

<script>
import card from '@/components/card.vue'

export default {
    components: {
        card,
    },
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.git-url {
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 600;
  line-height: 1.125;
}
.github {
  width: 100px;
  height: auto;
}
.footer {
  background-color: #808080;
}
.feature {
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.125;
}

.title {
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  margin: 50px 10px 0px 10px;
}

.sub {
  align-self: center;
  width: 20em;
  border-radius: 25px;
  padding: 15px;
  margin: 0 10px 50px 10px;
  background-color: #ffffff;
  opacity: 0.5;
}

.hero {
  background: rgb(206,112,245);
  background: linear-gradient(90deg, rgba(206,112,245,1) 0%, rgba(35,86,174,1) 100%);
}

.columns {
    margin-left: 0;
}

.hero.is-fullheight {
  min-height: 20vh;
}
.hero.has-background {
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0;
}
</style>
