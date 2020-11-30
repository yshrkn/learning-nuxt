
<template>
  <dl>
    <template v-for="item in items">
      <dt :key="item.id">{{ item.name }}</dt>
      <dd :key="item.id">{{ item.content }}</dd>
    </template>
  </dl>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style lang="scss" module>
@import './Accordion.scss';
</style>