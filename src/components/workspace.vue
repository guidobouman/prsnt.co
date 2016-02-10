<style lang="stylus" scoped>
  .workspace
    flex 1
    display flex
    position relative
    background #f0f0f0
</style>

<template>
  <section class="workspace">
    <slide-list></slide-list>
    <slide-preview></slide-preview>
  </section>
</template>

<script>
  import SlideList from './slide-list.vue';
  import SlidePreview from './slide-preview.vue';

  export default {
    components: {
      SlideList,
      SlidePreview,
    },
  };
</script>
