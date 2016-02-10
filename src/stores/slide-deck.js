/* globals: localStorage, JSON, Object, crypto, Uint8Array */

export default {
  state: {
    slides: [],
    activeSlideId: null,
    activeSlide: null,
  },
  storeKey: 'slide-deck',
  activateSlide(uuid) {
    const targetSlide = this.state.slides.find(slide => {
      return slide._uuid === uuid;
    });

    if (!targetSlide) {
      return undefined;
    }
    this.state.activeSlideId = uuid;
    this.state.activeSlide = targetSlide;

    this.saveState();

    return targetSlide;
  },
  addSlide(text) {
    const uuid = this._uuid();
    const returnValue = this.state.slides.push({
      _uuid: uuid,
      text: text || '',
    });

    this.saveState();

    if (!this.state.activeSlideId) {
      this.activateSlide(uuid);
    }

    return returnValue;
  },
  saveState() {
    return localStorage.setItem(this.storeKey, JSON.stringify(this.state));
  },
  loadState() {
    const cache = JSON.parse(localStorage.getItem(this.storeKey));
    // Don't replace [this.state] as Vue works by reference.
    // Replace the properties instead:
    for (const key in cache) {
      if (cache.hasOwnProperty(key)) {
        this.state[key] = cache[key];
      }
    }

    return this.state;
  },
  _uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
};
