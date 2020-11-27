<template>
  <component :is="tagName" :to="to" :class="[$style.button, $style.red]" >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: String,
  },
  computed: {
    tagName() {
      if (this.to) return 'nuxt-link';
      if (this.$attrs.href) return 'a';
      return 'button';
    }
  }
}
</script>

<style lang="scss" module>
@import '~/components/Button/Button.scss';
</style>