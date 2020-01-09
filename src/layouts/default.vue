<template>
  <div>
    <navbar title="Wordistry"/>
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
