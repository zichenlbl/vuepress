<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="back-to-top"
  >
  ︿
  </button>
</template>
 
<script>
export default {
  data() {
    return {
      visible: false,
      threshold: 500,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.threshold;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
 
<style>
.back-to-top {
  position: fixed;
  bottom: 2em;
  right: 2em;
  cursor: pointer;
}
</style>