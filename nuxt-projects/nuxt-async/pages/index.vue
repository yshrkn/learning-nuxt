<template>
  <div class="container">
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }}, {{ user.name }}, {{ user.company.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users/';

export default {

  // NuxtにあるAPIのひとつ　コンポーネントが読み込まれる前にかならず実行される
  asyncData({ params, error }) {
    return axios.get(url)
      .then(res => {
        // 返却されたデータはコンポーネントのデータへマージされる
        return { users: res.data }
      })
      .catch(e => {
        // console.log(e.response.status);

        // エラーページの表示用関数 ステータスコードとメッセージを渡す必要あり
        error({
          statusCode: e.response.status,
          message: 'Error!!!'
        })
      })
  }
}
</script>

<style>
</style>
