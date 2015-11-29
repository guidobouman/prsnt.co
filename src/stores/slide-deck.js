export default {
  state: {
    slides: [],
    activeSlideId: 0,
    activeSlide: {},
  },
  activateSlide: function activateSlide(slideId) {
    if (this.state.slides[slideId]) {
      this.state.activeSlideId = slideId;
      this.state.activeSlide = this.state.slides[slideId];
    }
  },
};
