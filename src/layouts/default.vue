<template>
  <div>
    <navbar title="vue-cli-auto-routing-bulma-boilerplate"/>
    <router-view/>

  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
    name: 'home',
    components: {
        navbar,
    },
}

</script>

<style>

</style>
