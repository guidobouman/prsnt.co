<style lang="stylus" scoped>
  header
    flex 0 0 auto
    background white
    box-shadow 0 3px 0 rgba(0,0,0,0.1)
    z-index 1
    text-transform uppercase

  h1
    margin 10px 0
    position absolute
    left 50%
    transform translateX(-50%)
    font-size inherit
</style>

<template>
  <header>
    <h1>prsnt.co</h1>
    <actions></actions>
  </header>
</template>


<script>
  import Actions from './actions.vue';

  export default {
    components: {
      Actions,
    },
  };
</script>
