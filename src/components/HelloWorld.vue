<template>
<div>
  <div class="columns is-mobile is-multiline is-centered">
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br>
      First Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br>
      Our Second Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br>
      Third Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br>
      The Fourth Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="notification is-primary">
      <code class="html">is-narrow</code><br>
      Fifth Column
    </p>
  </div>
</div>
<div class="notification is-primary">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor.
  <strong>Pellentesque risus mi</strong>

</div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
