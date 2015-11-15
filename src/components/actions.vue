<style lang="stylus" scoped>
  .actions
    display flex
    flex-direction row
    justify-content space-between

    > *
      display flex

      .action
        padding 10px
        border 0 solid rgba(0,0,0,0.2)
        transition background-color 200ms ease
        cursor pointer

        &:hover
          background-color rgba(0,0,0,0.05)

      &:first-child
        flex-direction row
        .action
          border-right-width 1px

      &:last-child
        flex-direction row-reverse
        .action
          border-left-width 1px
</style>

<template>
  <div class="actions">
    <div class="left">
      <div class="action">
        A 1
      </div>
      <div class="action">
        A 2
      </div>
    </div>
    <div class="right">
      <div class="action">
        A 1
      </div>
      <div class="action">
        A 2
      </div>
    </div>
  </div>
</template>
