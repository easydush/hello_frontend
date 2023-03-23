<template>
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
  </select>
  <img alt="Hasbulla" src="./assets/hasbulla.png" id="Hasbulla">
  <router-link to="/auth">Login</router-link>
  <router-link to="/students">Students</router-link>

  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      msg: 'Hasbulla',
      isActive: false,
      className: ''
    }
  },
  methods: {
  },
  watch: {
    isActive(current) {
      if (current) {
        this.className = 'active'
      }
      else this.className = ''
    }
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
