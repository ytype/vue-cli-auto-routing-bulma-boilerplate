<template>
  <div>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="../index.html">
            {{ title }}
          </a>
          <div class="navbar-burger burger" @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
            data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <a class="navbar-item" href="admin.html">
              vue
            </a>
            <a class="navbar-item" href="admin.html">
              cli
            </a>
            <a class="navbar-item" href="admin.html">
              auto
            </a>
            <a class="navbar-item" href="admin.html">
              routing
            </a>
            <a class="navbar-item" href="admin.html">
              boilerplate
            </a>
          </div>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            showNav: false,
        }
    },
}
</script>

<style scope>
  .navbar-item.brand-text {
    font-weight: 300;
  }

  .navbar-item,
  .navbar-link {
    font-size: 14px;

  }
</style>
