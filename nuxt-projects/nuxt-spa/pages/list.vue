<template>
  
</template>

<script>
import ProductList from '../components/ProductList/ProductList.vue';

export default {
  components: {

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
