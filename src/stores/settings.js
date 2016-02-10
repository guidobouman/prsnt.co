export default {
  state: {},
  set(key, value) {
    this.state[key] = value;
    // persist locally
  },
  get(key) {
    if (!this.state.hasOwnProperty(key)) {
      // try to get from local storage
    }

    return this.state[key];
  },
};
