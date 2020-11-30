<template>
  <div>

    <Accordion :items="items"></Accordion>


  </div>
</template>

<script>
import Button from '../components/atoms/Button/Button.vue';
import Accordion from '../components/atoms/Accordion/Accordion.vue';

export default {
  components: {
    Button,
    Accordion,
  },
  data() {
    return {
      items: [
        { id: 1, name: "商品A", text:"テキストテキストテキスト" },
        { id: 2, name: "商品B", text:"テキストテキストテキスト" },
        { id: 3, name: "商品C", text:"テキストテキストテキスト" },
      ]
    }
  }
}
</script>
