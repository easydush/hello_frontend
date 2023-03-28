<template>
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
  </select>
  <img alt="Hasbulla" src="./assets/hasbulla.png" id="Hasbulla">
  <br/>
  <router-link to="/auth">Login</router-link>
  <br/>
  <router-link to="/students">Students</router-link>
  <br/>
  <button @click="handleVK"> Login via VK</button>

  <router-view/>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: 'App',
  components: {},
  data() {
    return {
      msg: 'Hasbulla',
      isActive: false,
      className: ''
    }
  },
  computed: {
    ...mapGetters(["token"])
  },
  methods: {
    handleVK: () => window.open("https://oauth.vk.com/authorize?client_id=client_id&display=page&redirect_uri=http://localhost:8080/students?&scope=1026&response_type=token&v=5.131&state=123456"),
    ...mapActions(["setToken"]),
    getVKInfo() {
      console.log(this.$data)
      axios.post(`https://api.vk.com/method/account.getInfo?access_token=${this.token}&v=5.131`).then((response) => console.log(response))
    }
  },
  watch: {
    isActive(current) {
      if (current) {
        this.className = 'active'
      } else this.className = ''
    }
  },
  mounted() {
    const firstAmp = this.$route.hash.indexOf('&')
    console.log(this.$route.hash)
    console.log(this.$route.hash.slice(14, firstAmp))
    this.setToken(this.$route.hash.slice(14, firstAmp))
    this.$forceUpdate()
    this.getVKInfo()
  }
}
</script>

<style>
#Hasbulla {
  width: 10em;
  height: 10em;
}

.active {
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
