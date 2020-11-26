<template>
  <li>
    <h2>{{ product.name }}</h2>
    <!-- <nuxt-link :to="`/detail/${product.id}`">詳しく見る</nuxt-link> -->
  </li>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="scss" module>
@import '~/components/ProductItem/ProductItem.scss';
</style>