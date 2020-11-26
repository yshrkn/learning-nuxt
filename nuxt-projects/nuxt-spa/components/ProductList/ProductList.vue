<template>
  <ul>
    <ProductItem :product="product" v-for="product in products" :key="product.id"></ProductItem>
  </ul>
</template>

<script>
import ProductItem from '../../components/ProductItem/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: {
    products: Array
  }
}
</script>

<style lang="scss" module>
@import '~/components/ProductItem/ProductItem.scss';
</style>