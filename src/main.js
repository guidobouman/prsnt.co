import Vue from 'vue';
import App from './app.vue';
import Slide from './stores/slide.js';
import SlideDeck from './stores/slide-deck.js';

new Vue({
  data: {
    Slide,
    SlideDeck,
  },
  el: 'body',
  components: {
    App,
  },
});
