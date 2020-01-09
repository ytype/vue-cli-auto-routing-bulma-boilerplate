<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column is-3 ">
          <sidebar />
        </div>
        <div class="column is-9">
          <div class="hero is-fullheight has-background banner m-r-md">
            <img alt="Fill Murray" class="hero-background" src="background.png" />
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Hero Image
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue'

export default {
    components: {
        sidebar,
    },
}
</script>

<style scope>
.columns {
    margin-left: 0;
}
.title {
  color: #ffffff;
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
