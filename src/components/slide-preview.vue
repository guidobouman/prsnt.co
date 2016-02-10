<style lang="stylus" scoped>

  .slide-preview
    flex 1
    display flex

  .slide
    flex none
    display flex
    width 80vw
    height 80vh
    background #ffffff
    margin auto
    box-shadow 0 0 0 2px rgba(0,0,0,0.1)

    h1
      margin auto
</style>


<template>
  <div class="slide-preview">
    <div class="slide">
      <h1>
        Active slide ID:<br/>
        <small>
          {{ slideDeck.activeSlide ? slideDeck.activeSlide._uuid : 'No slide active.' }}
        </small>
      </h1>
    </dv>
  </div>
</template>


<script>
  import SlideDeck from '../stores/slide-deck.js';

  export default {
    data() {
      return {
        slideDeck: SlideDeck.state,
      };
    },
    methods: {
      activateSlide(uuid) {
        SlideDeck.activateSlide(uuid);
      },
      addSlide() {
        SlideDeck.addSlide();
      },
    },
  };
</script>
