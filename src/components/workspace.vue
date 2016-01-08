<style lang="stylus" scoped>
  .workspace
    flex 1
    position relative
    display flex
    background #f0f0f0

  h1
    margin auto
</style>

<template>
  <section class="workspace">
    <h1>
      Active slide ID:<br/>
      <small>
        {{ slideDeck.activeSlide ? slideDeck.activeSlide._uuid : 'No slide active.' }}
      </small>
    </h1>
    <slides></slides>
  </section>
</template>

<script>
  import Slides from './slides.vue'
  import SlideDeck from '../stores/slide-deck.js'

  export default {
    data() {
      return {
        slideDeck: SlideDeck.state
      }
    },
    components: {
      Slides
    }
  }
</script>
