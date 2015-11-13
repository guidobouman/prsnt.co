<style lang="stylus">
  html, body
    height 100%

  body
    margin 0
    font-family ".SFNSDisplay-Regular", sans-serif
    color #222222

  .app
    height 100%
    display flex
    flex-direction column

</style>

<template>
  <div class="app">
    <toolbar></toolbar>
    <workspace></workspace>
  </div>
</template>

<script>
  import Toolbar from './components/toolbar.vue'
  import Workspace from './components/workspace.vue'

  export default {
    components: {
      Toolbar,
      Workspace
    }
  }
</script>
