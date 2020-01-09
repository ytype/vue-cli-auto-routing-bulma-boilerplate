<template>
  <div>
    <nav class="navbar m-b-md is-white">
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
              Home
            </a>
            <a class="navbar-item" href="admin.html">
              Orders
            </a>
            <a class="navbar-item" href="admin.html">
              Payments
            </a>
            <a class="navbar-item" href="admin.html">
              Exceptions
            </a>
            <a class="navbar-item" href="admin.html">
              Reports
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
  nav.navbar {
    border-top: 4px solid #2b3238;
    font-family: 'Kaushan Script', cursive;
    /*
  margin-bottom: 1rem;
  */
  }

  .navbar-item.brand-text {
    font-weight: 300;
  }

  .navbar-item,
  .navbar-link {
    font-size: 14px;
    font-weight: 700;
  }
</style>
