<template>
  <form @submit.prevent="handleLogin">
    <input name="username" type="text" v-model="username" />
    <input name="password" type="password" v-model="password"/>
    <button type="submit">{{ $t('login') }}</button>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AuthPage",
  data() {
    return {username: '', password: ''}
  },
  methods: {
    handleLogin() {
      console.log()
      this.getUser({'username': this.$data.username, 'password': this.$data.password})
    },
    ...mapActions(["getUser"])
  }
}
</script>

<style scoped>

</style>