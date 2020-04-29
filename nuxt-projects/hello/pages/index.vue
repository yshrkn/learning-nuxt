<template>
  <div class="container">
    <p>{{ message }}</p>
    <hr>
    <nuxt-link to="/price">Price page</nuxt-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'Hello World!',
    }
  }
}
</script>
