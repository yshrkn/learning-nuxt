<template>
  <button :class="[$style.button, $style.red]">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
  }
}
</script>

<style lang="scss" module>
@import '~/components/Button.scss';
</style>