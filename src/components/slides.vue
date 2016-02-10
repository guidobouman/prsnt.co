<style lang="stylus" scoped>
  .slides
    position absolute
    left 0
    top 0
    height 100%
    background white
    box-shadow 2px 0 0 rgba(0,0,0,0.1)
    transform translate3D(calc(-100% + 10px), 0, 0)
    transition transform 200ms ease
    transition-delay 500ms
    padding 10px
    overflow-y scroll

    &:hover
      transform translate3D(0,0,0)
      transition-delay 0ms

  .slide
    width 15vw
    height 15vh
    background #f0f0f0

    & + &
      margin-top 10px
</style>


<template>
  <div class="slides">
    <div class="slide" v-for="slide in slideDeck.slides" @click="activateSlide(slide._uuid)">
      #{{ $index + 1 }} {{ slide._uuid == slideDeck.activeSlideId ? 'ACTIVE' : 'inactive' }}
    </div>
    <div class="slide" @click="addSlide">
      Add slide
    </div>
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
