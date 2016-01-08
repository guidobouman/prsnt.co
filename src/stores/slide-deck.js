export default {
  state: {
    slides: [],
    activeSlideId: null,
    activeSlide: null,
  },
  activateSlide(uuid) {
    const slide = this.state.slides.find(slide => {
      return slide._uuid == uuid;
    });

    if(slide) {
      this.state.activeSlideId = uuid;
      this.state.activeSlide = slide;
      return slide;
    }

    return undefined;
  },
  addSlide(text) {
    return this.state.slides.push({
      _uuid: this._uuid(),
      text: text || ''
    })
  },
  _uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = crypto.getRandomValues(new Uint8Array(1))[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  },
};