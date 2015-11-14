<style lang="stylus" scoped>
  header
    flex 0 0 auto
    display flex
    background white
    box-shadow 0 3px 0 rgba(0,0,0,0.3)
    z-index 1
    flex-direction row
    justify-content space-between
    text-transform uppercase

    > *
      flex 0 1 auto
      padding 10px

  .slides
    border-right 1px solid rgba(0,0,0,0.2)

  h1
    margin 0
    font-size inherit

  .actions
    border-left 1px solid rgba(0,0,0,0.2)
</style>

<template>
    <header>
      <div class="slides">
        Slides
      </div>
      <h1>prsnt.co</h1>
      <div class="actions">
        Actions
      </div>
    </header>
</template>
