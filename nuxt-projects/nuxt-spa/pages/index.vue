<template>
  <div class="container">
    <!-- <Button to="/about">nuxt-linkのボタン</Button>
    <nuxt-link to="/about">nuxt-link</nuxt-link>
    <Button>ただのボタン</Button> -->
  
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script>
import Button from '../components/Button/Button.vue';
import ProductList from '../components/ProductList/ProductList.vue';

export default {
  components: {
    Button,
    ProductList
  },
  data() {
    return {
      products: [
        { id: 1, name: "商品A" },
        { id: 2, name: "商品B" },
        { id: 3, name: "商品C" },
      ]
    }
  },
  // async asyncData(context) {
  //   setTimeout(() => {

  //     return {
  //       products: [
  //         { id: 1, name: "商品A" },
  //         { id: 2, name: "商品B" },
  //         { id: 3, name: "商品C" },
  //       ]
  //     }

  //   }, 1000);
  // },
}
</script>
