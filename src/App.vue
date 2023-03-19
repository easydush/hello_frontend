<template>
  <img alt="Hasbulla" src="./assets/hasbulla.png" id="Hasbulla" @mouseover="switchActive" @mouseleave="switchActive">
  <h1 v-if="isActive" class="active">{{ msg }}</h1>
  <h1 v-else class="">{{ msg }} is not active</h1>

  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Hasbulla',
      isActive: false,
      className: ''
    }
  },
  methods: {
    switchActive(){
      this.isActive = !this.isActive
    }
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
